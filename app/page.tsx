import PostPage from '@/components/UI/Homepage/PostPage'
import WelcomeCard from '@/components/UI/Homepage/WelcomeCard'

export default async function Home() {
  return (
      <>
        <WelcomeCard />
        <PostPage />
      </>
  )
}
