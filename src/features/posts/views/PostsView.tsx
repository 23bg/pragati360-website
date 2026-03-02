import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface PostsViewProps {
    posts: any[];
    isLoading: boolean;
    isError: boolean;
}

export function PostsView({ posts, isLoading, isError }: PostsViewProps) {
    return (
        <div className="space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle>Posts</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Posts list will be displayed here.</p>
                </CardContent>
            </Card>
        </div>
    );
}