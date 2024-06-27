import { MessageList } from "@/types/message";
import Skeleton from "@mui/material/Skeleton";
import UserMessage from "./UserMessage";

export default function ChatWindow({
  isLoading,
  isError,
  data,
  recipientId,
}: {
  isLoading: boolean;
  isError: boolean;
  data: MessageList | undefined;
  recipientId: number;
}) {
  return (
    <div className="flex basis-[83%] flex-col gap-6 overflow-y-scroll bg-inherit px-6 py-4">
      {isLoading ? (
        <>
          <Skeleton
            height={96}
            width={145}
            variant="rounded"
            animation="wave"
          ></Skeleton>
          <Skeleton
            height={96}
            width={145}
            variant="rounded"
            animation="wave"
          ></Skeleton>
          <Skeleton
            className="self-end"
            height={57}
            width={145}
            variant="text"
            animation="wave"
          ></Skeleton>
        </>
      ) : isError ? (
        <p className="self-center">Please try again in a few minutes</p>
      ) : (
        data?.map((e) => (
          <UserMessage key={e.id} {...e} recipient={recipientId}></UserMessage>
        ))
      )}
    </div>
  );
}
