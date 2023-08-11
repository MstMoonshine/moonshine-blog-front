import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'

// app/page.js
export default function Home() {
  return (
    <>
    <li> <Link href="remote-page/basic">basic</Link> </li>
    <br/>
    <li> <Link href="remote-page/front">front</Link> </li>
    </>
  )
}