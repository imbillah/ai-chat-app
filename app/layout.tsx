import Sidebar from "../components/sidebar/Sidebar";
import "../styles/globals.css";
export const metadata = {
  title: "Ai Chat 2.0",
  description:
    "Ai Powered chat app that can answer any of your questions almost like human. Powered by Chat GPT AI Api",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="max-w-xs h-screen overflow-y-auto md:min-w-[18rem]">
          <Sidebar />
        </div>
        {/* notification provider */}
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
