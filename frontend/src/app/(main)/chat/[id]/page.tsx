"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { getMessages } from "@/utils/_fetch";
import ChatWindow from "@/components/ChatWindow";
import ChatHeader from "@/components/ChatHeader";

export default function ChatInterface() {
  const params = useParams();
  const recipientId = Number(params.id);
  const { isLoading, isError, data } = useQuery({
    queryKey: [recipientId],
    queryFn: () => getMessages(recipientId),
  });

  return (
    <div className="absolute top-0 z-50 flex h-[100vh] w-full flex-col break-words bg-[#FFEEEE]">
      <ChatHeader></ChatHeader>
      <ChatWindow
        isLoading={isLoading}
        isError={isError}
        data={data}
        recipientId={recipientId}
      ></ChatWindow>
      <div className="basis-[9%] bg-[#FAF9F7] px-6 py-4">
        <textarea
          className="h-12 w-full bg-[#E8E6E1] px-4 py-3 text-base text-[#625D52] placeholder-[#625D52]"
          placeholder="type something..."
        />
      </div>
    </div>
  );
}
