import { headers } from "next/headers";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import ProfileName from "@/components/ProfileName";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = headers();
  const domain = headerList.get("x-forward-host");
  console.log(domain);
  return (
    <>
      <div className="relative bg-[#FAF9F7]">
        {/* Client component is wrapped inside a server component */}
        <Header>
          <ProfileName></ProfileName>
        </Header>
        {children}
        <Navbar></Navbar>
      </div>
    </>
  );
}
