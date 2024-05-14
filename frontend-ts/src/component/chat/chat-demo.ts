import { HistoryEntry } from "../sidebar/type";
import { MessageType } from "../chat-container/type";

export const chatData: {
    id: string,
    meta: HistoryEntry, 
    messages: { content: string, type: MessageType }[],
}[] = [
    { 
        id: "chat-1",
        meta: {
            chatId: "chat-1", 
            title: "Daily Updates", 
            date: new Date(2023, 4, 10),
        },
        messages: [
            { content: "Good morning, team!", type: MessageType.PROMPT },
            { content: "Today's tasks include reviewing the new PRs.", type: MessageType.REPSONSE }
        ]
    },
    { 
        id: "chat-2",
        meta: {
            chatId: "chat-2", 
            title: "Project Chat", 
            date: new Date(2023, 5, 15),
        },
        messages: [
            { content: "How's the project progress?", type: MessageType.PROMPT },
            { content: "We're on track for the deadline.", type: MessageType.REPSONSE }
        ]
    },
    {
        id: "chat-3",
        meta: {
            chatId: "chat-3", 
            title: "Team Sync", 
            date: new Date(2023, 6, 20),
        },
        messages: [
            { content: "Let's sync up on the tasks for this week.", type: MessageType.PROMPT },
            { content: "Sure, I have completed the backend implementation.", type: MessageType.REPSONSE }
        ]
    },
    { 
        id: "chat-4",
        meta: {
            chatId: "chat-4", 
            title: "Client Meeting", 
            date: new Date(2023, 7, 25),
        },
        messages: [
            { content: "The client meeting is scheduled for 3 PM.", type: MessageType.PROMPT },
            { content: "Got it. I'll prepare the presentation.", type: MessageType.REPSONSE }
        ]
    },
    {
        id: "chat-5",
        meta: {
            chatId: "chat-5", 
            title: "Code Review", 
            date: new Date(2023, 8, 30),
        },
        messages: [
            { content: "Please review my latest code changes.", type: MessageType.PROMPT },
            { content: "I'll start the review now.", type: MessageType.REPSONSE }
        ]
    },
    {
        id: "chat-6",
        meta: {
            chatId: "chat-6", 
            title: "Sprint Planning", 
            date: new Date(2023, 9, 5),
        },
        messages: [
            { content: "Let's plan the tasks for the next sprint.", type: MessageType.PROMPT },
            { content: "I suggest we focus on the feature X implementation.", type: MessageType.REPSONSE }
        ]
    },
    { 
        id: "chat-7",
        meta: {
            chatId: "chat-7", 
            title: "Quick Questions", 
            date: new Date(2023, 10, 10),
        },
        messages: [
            { content: "Can anyone help me with this bug?", type: MessageType.PROMPT },
            { content: "Sure, what seems to be the issue?", type: MessageType.REPSONSE }
        ]
    },
    {
        id: "chat-8",
        meta: {
            chatId: "chat-8", 
            title: "Design Discussion", 
            date: new Date(2023, 11, 15),
        },
        messages: [
            { content: "Let's discuss the new design proposal.", type: MessageType.PROMPT },
            { content: "I think the new design looks great.", type: MessageType.REPSONSE }
        ]
    },
    { 
        id: "chat-9",
        meta: {
            chatId: "chat-9", 
            title: "Bug Reports", 
            date: new Date(2023, 12, 20),
        },
        messages: [
            { content: "Found a bug in the login module.", type: MessageType.PROMPT },
            { content: "Thanks, I'll look into it.", type: MessageType.REPSONSE }
        ]
    },
    {
        id: "chat-10",
        meta: {
            chatId: "chat-10", 
            title: "Lunch Plans", 
            date: new Date(2024, 1, 25),
        },
        messages: [
            { content: "Where should we go for lunch today?", type: MessageType.PROMPT },
            { content: "How about the new cafe downtown?", type: MessageType.REPSONSE }
        ]
    }
];
