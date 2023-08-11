import Link from 'next/link'

function PostPage() {
  return (
    <div>
      <p>
        PostPage
      </p>
      <Link href="/mdx-page">Test Link to MDX</Link>
      <br/>
      <Link href="/remote-page">Test Link to Remote MDX</Link>
    </div>
  )
}

export default PostPage;