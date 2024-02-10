"use server";

import { revalidatePath } from "next/cache";
import { postsRepository } from "./posts.repository";

export const createPostAction = async (
    command: CreatePostListItemCommand,
    revalidatePagePath : string
    ) => {
        await postsRepository.createPostItem(command);
        revalidatePath(revalidatePagePath);
 }