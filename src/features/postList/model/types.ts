type PostListItemType = {
    id: string;
    title: string;
    description: string
}

type CreatePostListItemCommand = {
    title: string;
    description: string
}

type DeletePostListItemCommand = {
    id: string;
}