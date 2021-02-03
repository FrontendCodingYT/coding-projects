import { Message } from "./Message";

export interface Contact {
    profile_image: string;
    name: string;
    status: string;
    last_seen: string;
    messages: Message[];
}