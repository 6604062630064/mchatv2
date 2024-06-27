import { MessageList } from "@/types/message";

const SERVER_URL = process.env.SERVER_URL;

export const getMessages: (id: number) => Promise<MessageList> = async (
  id: number,
) => {
  const response = await fetch(`${SERVER_URL}/users/${id}/messages`, {
    method: "GET",
    credentials: "include",
    mode: "cors",
  });

  if (response.ok) {
    const json = await response.json();
    console.log(json);
    return json;
  } else {
    throw new Error("Fetch failed");
  }
};
