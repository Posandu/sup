type Message = {
    id: string;
    date: string;
    text: string;
    sender: "user" | "assistant";
};

type Chat = {
    id: string;
    title: string;
    messages: string[];
};

