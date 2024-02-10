import { dbClient } from "@/shared/lib/db";
import { cache } from "react";

export class PostsRepository  {

    getPostsList = cache(() : Promise<PostListItemType[]> => dbClient.post.findMany())

    createPostItem = (command: CreatePostListItemCommand): Promise<PostListItemType> => {
        return dbClient.post.create({
            data: command
        });
    
    }

    deletePostItem = (command: DeletePostListItemCommand) => {
        return dbClient.post.delete({
            where: {id: command.id}
        })
    }
}

export const postsRepository = new PostsRepository();