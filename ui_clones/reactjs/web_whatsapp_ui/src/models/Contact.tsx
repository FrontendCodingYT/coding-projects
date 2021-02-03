import { Message } from "./Message";

export interface Contact {
    profile_image: string;
    name: string;
    status: string;
    messages: Message[];
}