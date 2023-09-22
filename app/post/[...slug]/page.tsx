import MDXContent from '@/components/wrapper/remote-mdx-wrapper';
import { getPostContent } from '@/lib/KV/fetchPost';
import { processContent } from '@/lib/Markdown/Processing';

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
