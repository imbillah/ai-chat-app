import { getServerSession } from "next-auth";
import Login from "../components/login/Login";
import { SessionProvider } from "../components/provider/SessionProvider";
import Sidebar from "../components/sidebar/Sidebar";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import "../styles/globals.css";
export const metadata = {
  title: "Ai Chat 2.0",
  description:
    "Ai Powered chat app that can answer any of your questions almost like human. Powered by Chat GPT AI Api",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-purple-500 to-pink-500">
        {!session ? (
          <Login />
        ) : (
          <SessionProvider session={session}>
            <div className="flex">
              <div className="max-w-xs h-screen overflow-y-auto md:min-w-[18rem]">
                <Sidebar />
              </div>
              {/* notification provider */}
              <div className="flex-1">{children}</div>
            </div>
          </SessionProvider>
        )}
      </body>
    </html>
  );
}
