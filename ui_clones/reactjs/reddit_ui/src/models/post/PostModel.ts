import { Subreddit } from "../subreddit/Subreddit";

export interface Post {
    title: string;
    description?: string;
    image_src?: string;
    video_src?: string;
    duration?: number;
    upvotes: number;
    comments: string;
    subreddit: Subreddit;
    username: string;
}