import { compileMDX, MDXRemote } from 'next-mdx-remote/rsc'

async function fetchMDX() {
  const url = 'https://raw.githubusercontent.com/MstMoonshine/blog-1999/main/data/blog/sakai.mdx';
  const res = await fetch(url);
  return res.text();
}

export default async function Home() {

  const mdx = await fetchMDX();

  // Optionally provide a type for your frontmatter object
  const { content, frontmatter } = await compileMDX<{ title: string }>({
    source: mdx,
    options: { parseFrontmatter: true },
  })

  console.log(frontmatter);

  return (
    <>
      <h1>{frontmatter.title}</h1>
      {content}
    </>
  )
}
