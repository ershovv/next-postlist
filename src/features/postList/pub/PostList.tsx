import { revalidatePath } from "next/cache";
import { postsRepository } from "../posts.repository"
import { PostItem } from "../ui/PostItem";

interface IProps {
    revalidatePagePath: string
}

export async function PostList({revalidatePagePath}: IProps) {

    const postList = await postsRepository.getPostsList();

    const handleDeleteAction = async (postId: string) => {
        "use server";
        await postsRepository.deletePostItem({id: postId})
        revalidatePath(revalidatePagePath);
    }

    return(
        <div className="flex flex-col gap-3">
            {
                postList.map((p) => <PostItem key={p.id} post={p} onDelete={handleDeleteAction.bind(null, p.id)}/>)
            }
        </div>
    )

}