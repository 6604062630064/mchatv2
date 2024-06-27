import { getUserInfo } from "@/utils/fetch";
import { logo } from "@/utils/fonts";

export default async function Header() {
  const { username } = await getUserInfo();

  return (
    <header className="sticky top-0 z-50 flex w-full justify-between bg-[#FAF9F7]">
      <h1 className={`m-6 text-[#D64545] ${logo.className} text-4xl`}>mChat</h1>
      <div className="mx-6 mt-4 text-right">
        <p className="text-lg text-[#757575]">Hello</p>
        <h2 className="text-2xl font-bold text-[#27241D]">{username}</h2>
      </div>
    </header>
  );
}
