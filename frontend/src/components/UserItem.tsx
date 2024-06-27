import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function UserItem({
  username,
  avatar,
}: {
  username: string;
  avatar: string;
}) {
  return (
    <a className="flex gap-5">
      <AccountCircleIcon className="size-24"></AccountCircleIcon>
      <div className="relative">
        <h3 className="mt-3 text-lg font-medium text-[#27241D]">{username}</h3>
        <p className="relative mt-1 text-sm text-[#504A40] before:absolute before:-top-[27px] before:text-7xl before:text-[#7BB026] before:content-['·']">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Online
        </p>
      </div>
    </a>
  );
}
