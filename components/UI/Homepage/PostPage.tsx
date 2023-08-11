import Link from 'next/link'

function PostPage() {
  return (
    <div>
      <p>
        PostPage
      </p>
      <Link href="/mdx-page">Test Link to MDX</Link>
    </div>
  )
}

export default PostPage;