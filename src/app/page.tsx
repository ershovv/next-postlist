import { CreatePostForm } from "@/features/postList/pub/CreatePostForm";
import { PostList } from "@/features/postList/pub/PostList";
import {dbClient } from "@/shared/lib/db";

export default async function Home() {

  const posts = await dbClient.post.findMany();

  return (
    <main className="flex min-h-screen flex-col p-8">
      <CreatePostForm className="max-w-[300px] mb-5" revalidatePagePath="/" />
      <PostList revalidatePagePath="/" />
    </main>
  );
}
