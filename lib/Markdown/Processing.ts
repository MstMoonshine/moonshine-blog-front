import { serialize } from 'next-mdx-remote/serialize';
import remarkMath from "remark-math";
import rehypeKatex from 'rehype-katex';

// TODO: use mathjax

async function replaceFigureUrl(content: string, path: string) {
    const match = content.replace(/\!\[([^\]]*)\]\((\S+)\)/g, "![$1](" + path + "/$2)");
    return match;
}

export async function processContent(content: string, path: string) {
    const updatedContent = await replaceFigureUrl(content, path);

    const source = await serialize(updatedContent, {
        mdxOptions: {
            remarkPlugins: [remarkMath],
            rehypePlugins: [rehypeKatex]
        },
        parseFrontmatter: true,
    });

    return source;
}