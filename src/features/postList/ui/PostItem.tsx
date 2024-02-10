"use client";
import { Button } from "@/shared/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/shared/ui/card";
import { useTransition } from "react";

interface IProps {
    post: PostListItemType;
    onDelete: () => Promise<void>;
}

export function PostItem({ post, onDelete }: IProps) {

    const [deleteIsLoading, startDeleteTransition] = useTransition();

    const handleDelete = () => {
        startDeleteTransition(async () => {
            await onDelete ();
        })
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
            </CardHeader>
            <CardFooter>
                <Button disabled={deleteIsLoading} onClick={handleDelete}>Удалить</Button>
            </CardFooter>
        </Card>
    )

}