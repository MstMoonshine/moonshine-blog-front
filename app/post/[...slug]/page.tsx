import env from '../../../.env.json';
import { serialize } from 'next-mdx-remote/serialize';
import MDXContent from '@/components/wrapper/remote-mdx-wrapper';
import remarkMath from "remark-math";
import rehypeKatex from 'rehype-katex';
import rehypeMathjax from 'rehype-mathjax'
import { getPostContent } from '@/lib/KV/fetchPost';

// TODO: use mathjax

async function replaceFigureUrl(content: string, key: string) {
  const match = content.replace(/\!\[([^\]]*)\]\((\S+)\)/g, "![$1](" + env['post-worker'] + "content/" + key + "/$2)");
  return match;
}

async function processContent(content: string, key: string) {
  const updatedContent = await replaceFigureUrl(content, key);

  const source = await serialize(updatedContent, {
    mdxOptions: {
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex]
    },
    parseFrontmatter: true,
  });

  return source;
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const key = params.slug[0] + '/' + params.slug[1];

  const post_content = await getPostContent(key);
  const source = await processContent(post_content, key);

  return (<>
    <div>
      <MDXContent source={source} />
    </div>
  </>
  )
}
