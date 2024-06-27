import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="h-full bg-[#FAF9F7]">
        <Header></Header>
        {children}
        <Navbar></Navbar>
      </div>
    </>
  );
}
