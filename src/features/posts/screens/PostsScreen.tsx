import React from 'react';
import { PostsView } from '../views/PostsView';

export function PostsScreen() {
    // For now, placeholder data
    const posts: any[] = [];
    const isLoading = false;
    const isError = false;

    return (
        <PostsView
            posts={posts}
            isLoading={isLoading}
            isError={isError}
        />
    );
}