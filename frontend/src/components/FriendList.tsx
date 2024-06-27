import UserItem from "@/components/UserItem";
import { getUserList } from "@/utils/fetch";

export default async function FriendList() {
  const userList = await getUserList();
  return (
    <main className="h-auto break-words p-6 pb-24">
      {userList.map((e) => (
        <UserItem key={e.id} {...e}></UserItem>
      ))}
      {userList.map((e) => (
        <UserItem key={e.id} {...e}></UserItem>
      ))}
      {userList.map((e) => (
        <UserItem key={e.id} {...e}></UserItem>
      ))}
      {userList.map((e) => (
        <UserItem key={e.id} {...e}></UserItem>
      ))}
      {userList.map((e) => (
        <UserItem key={e.id} {...e}></UserItem>
      ))}
      {userList.map((e) => (
        <UserItem key={e.id} {...e}></UserItem>
      ))}
      {userList.map((e) => (
        <UserItem key={e.id} {...e}></UserItem>
      ))}
    </main>
  );
}
