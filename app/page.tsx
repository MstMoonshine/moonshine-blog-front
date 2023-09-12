import PostPage from '@/components/UI/Homepage/PostPage';
import WelcomeCard from '@/components/UI/Homepage/WelcomeCard';
import DynJump from "@/components/UI/Homepage/DynJump";

export default async function Home() {
  return (
      <>
        <WelcomeCard />
        <DynJump />
        <PostPage />
      </>
  )
}
