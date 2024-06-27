import FriendList from "@/components/FriendList";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <FriendList></FriendList>
      {children}
    </>
  );
}
