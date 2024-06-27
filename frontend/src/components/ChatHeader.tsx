import { useRouter } from "next/navigation";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function ChatHeader() {
  const router = useRouter();
  return (
    <header className="flex basis-[8%] bg-[#FAF9F7]">
      <a onClick={router.back} className="cursor-pointer">
        <ArrowBackIcon
          width={36}
          height={36}
          className="my-5 ml-6"
        ></ArrowBackIcon>
      </a>
      <AccountCircleIcon
        sx={{ width: 56, height: 56 }}
        className="my-[10px] ml-8"
      ></AccountCircleIcon>
      <h2 className="ml-4 mt-5 text-lg font-bold">Jordan Dickson</h2>
    </header>
  );
}
