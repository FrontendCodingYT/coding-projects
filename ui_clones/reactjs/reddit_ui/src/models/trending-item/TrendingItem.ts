import { Subreddit } from "../subreddit/Subreddit"

export interface TrendingItem {
    image_src: string;
    title: string;
    description: string;
    subreddit: Subreddit;
}