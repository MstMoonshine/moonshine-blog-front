import React from 'react';

export function NewsSummary({ children } : { children: React.ReactNode }) {
  return React.Children.map(children, (child) => {
    console.log(child);
    if (React.isValidElement(child) && child.type === 'img') {
      return React.cloneElement(child, {
        className: 'w-1 h-20', // apply your styles here
      });
    }
    return child;
  });
}
