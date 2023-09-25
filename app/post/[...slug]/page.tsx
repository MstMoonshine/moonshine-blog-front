import MDXContent from '@/components/wrapper/remote-mdx-wrapper';
import { getPostContent } from '@/lib/KV/fetchPost';
import { processContent } from '@/lib/Markdown/Processing';
import env from '../../../.env.json';

export default async function Page({ params }: { params: { slug: string[] } }) {
  const key = params.slug[0] + '/' + params.slug[1];

  const post_content = await getPostContent(key);
  const path = env['post-worker'] + 'content/';
  const source = await processContent(post_content, path + key);

  return (<>
    <div>
      <MDXContent source={source} />
    </div>
  </>
  )
}
