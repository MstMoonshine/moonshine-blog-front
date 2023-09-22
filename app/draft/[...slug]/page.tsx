import MDXContent from '@/components/wrapper/remote-mdx-wrapper';
import ProcessDraft from '@/lib/Markdown/Draft';

export default async function Page({ params }: { params: { slug: string[] } }) {
  const source = await ProcessDraft({ params });
  return (<>
    <div>
      <MDXContent source={source} />
    </div>
  </>
  )
}
