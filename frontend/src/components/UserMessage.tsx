export default function UserMessage({
  id,
  body,
  sender,
  recipient,
}: {
  id: number;
  body: string;
  sender: number;
  recipient: number;
}) {
  return (
    <p
      className={`w-fit min-w-9 max-w-64 rounded-lg px-6 py-4 ${sender === recipient ? "bg-[#E8E6E1] text-[#A61B1B]" : "self-end bg-[#D64545] text-[#FAF9F7]"}`}
      key={id}
    >
      {body}
    </p>
  );
}
