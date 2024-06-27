import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import { nav } from "@/utils/fonts";
export default function Navbar() {
  return (
    <nav className="fixed bottom-0 flex w-full justify-between bg-[#FAF9F7]">
      <div className="flex basis-1/3 flex-col items-center border-t-2 border-solid border-[#D64545] py-2">
        <ChatOutlinedIcon className="size-10"></ChatOutlinedIcon>
        <p className={`${nav.className} text-[#D64545]`}>Chat</p>
      </div>
      <div className="flex basis-1/3 flex-col place-content-center items-center py-2 text-center">
        <QuestionAnswerOutlinedIcon className="size-10"></QuestionAnswerOutlinedIcon>
        <p className={`${nav.className} text-[#27241D]`}>Rooms</p>
      </div>
      <div className="flex basis-1/3 flex-col items-center py-2">
        <SettingsOutlinedIcon className="size-10"></SettingsOutlinedIcon>
        <p className={`${nav.className} text-[#27241D]`}>Settings</p>
      </div>
    </nav>
  );
}
