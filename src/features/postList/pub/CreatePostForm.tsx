"use client";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from "@/shared/ui/form"
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { useForm } from "react-hook-form"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { createPostAction } from "../actions";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/lib/utils";

const createPostFormSchema = z.object({
    title: z.string(),
    description: z.string()
})

interface IProps {
    revalidatePagePath: string
    className: string
}
export function CreatePostForm({revalidatePagePath, className} : IProps) {
    const [isCreateTransition, startCreateTransition] = useTransition();

    const form = useForm({
        resolver: zodResolver(createPostFormSchema),
        defaultValues: {
            title: '',
            description: '',
        }
    })

    const onSubmit = form.handleSubmit((data) => {
        startCreateTransition(async () => {
            createPostAction(data, revalidatePagePath);
        })
    })

    return (
        <Form {...form}>
            <form onSubmit={onSubmit} className={cn(className, "space-y-8")}>
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Заголовок</FormLabel>
                            <FormControl>
                                <Input placeholder="заголовок" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Описание</FormLabel>
                            <FormControl>
                                <Textarea placeholder="описание" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button disabled={isCreateTransition} type="submit">Создать</Button>
            </form>
        </Form>
    )
}