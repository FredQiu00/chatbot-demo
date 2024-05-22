export interface MessageProp {
    content: string;
}

export enum MessageType {
    PROMPT = 'prompt',
    RESPONSE = 'response',
}

export interface Message extends MessageProp {
    type: MessageType,
}

export interface MessageWithRating extends MessageProp {
    rating: number;
}

export interface MsgInputAreaProps {
    onSend: (message: Message) => void;
}

export interface MessagePanelProps {
    messages: Message[];
}

export interface MessagePanelHandle {
    scrollToBottom: () => void;
}