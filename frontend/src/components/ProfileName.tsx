import { getUserInfo } from "@/utils/fetch";

export default async function ProfileName() {
  const { username } = await getUserInfo();
  return <h2 className="text-2xl font-bold text-[#27241D]">{username}</h2>;
}
