import Post from '@/lib/Post/post';
import AllPosts from '../../../lib/KV/fetchPost';
import PostCard from './PostCard';
import { format, parseISO } from 'date-fns';

export default async function PostPage() {
  const posts: Post[] = await AllPosts()
  .then(posts => posts.filter(post => !post.draft)) // filter out drafts
  .then((posts) => (
    posts.sort((a, b) => (                          // sort by date
      new Date(b.date).getTime() - new Date(a.date).getTime()
    ))
  ));

  return (
    <div className="primary mx-auto mt-4 space-y-6 py-5 sm:mt-10 sm:px-4">
      {posts.map(post => (
        <PostCard
          key={post.key} // for element iterator
          title={post.title}
          url={`/post/${post.key}`}
          date={format(parseISO(post.date), "yyyy/LL/dd")}
          summary={post.summary}
          showSummary={true}
        />
      ))}
    </div>
  )
}
