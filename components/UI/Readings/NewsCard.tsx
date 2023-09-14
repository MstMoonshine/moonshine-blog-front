"use client";

import NewsEntry from "@/lib/NewsEntry/NewsEntry";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const DeskCard = ({ entry }: { entry: NewsEntry }) => {
  const withImage = entry.summary && entry.summary.includes("<img");
  const newsSummaryClass = "news-summary-desk py-1" + (withImage ? " news-summary-desk-with-img" : "");

  return (
    <Link href={entry.url} key={entry.title}>
      <div className="flex items-center px-1 py-3 transition-all hover:bg-gray-50">
        <div className="min-w-0 flex-grow">
          <p>
            <span className="font-bold text-xl">{entry.title}</span>
          </p>
          <div className="grid">
            <div className={newsSummaryClass} dangerouslySetInnerHTML={{ __html: entry.summary ? entry.summary : "" }}></div>
          </div>
        </div>
        <p className="flex-shrink-0 font-mono text-xs text-gray-500 sm:text-sm">
          {(new Date(entry.date)).toLocaleDateString()}
        </p>
      </div>
    </Link>
  )
}

const MobileCard = ({ entry }: { entry: NewsEntry }) => (
  <Link href={entry.url} key={entry.title}>
    <div className="items-center px-1 py-3 transition-all hover:bg-gray-50">
      <div className="min-w-0 flex-grow">
        <p>
          <span className="font-bold text-xl">{entry.title}</span>
        </p>
        <p className="py-1 font-mono text-xs text-gray-500 sm:text-sm">
          {(new Date(entry.date)).toLocaleDateString()}
        </p>
        <div className="news-summary-mobile py-1" dangerouslySetInnerHTML={{ __html: entry.summary ? entry.summary : "" }}></div>
      </div>
    </div>
  </Link>
)

const Card = ({ entry }: { entry: NewsEntry }) => {
  const [width, setWidth] = useState<number>(globalThis.window?.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);
  const isMobile = width <= 768;
  return (
    <>
      {isMobile ? <MobileCard entry={entry} /> : <DeskCard entry={entry} />}
    </>
  );
}

export default Card;
