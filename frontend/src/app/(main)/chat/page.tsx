import UserItem from "@/components/UserItem";
import { getUserList } from "@/utils/fetch";

export default async function Chat() {
  const userList = await getUserList();
  return (
    <main className="break-words p-6">
      {userList.map((e) => (
        <UserItem key={e.id} {...e}></UserItem>
      ))}
    </main>
  );
}
