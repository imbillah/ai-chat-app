import { getServerSession } from "next-auth";
import Login from "../components/login/Login";
import ClientProvider from "../components/provider/ClientProvider";
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
      <body className="bg-[#FAFAFA] h-screen">
        {!session ? (
          <Login />
        ) : (
          <SessionProvider session={session}>
            <div className="flex">
              <div className="overflow-y-auto w-[120px] md:min-w-[300px]">
                <Sidebar />
              </div>
              <ClientProvider />
              <div className="flex-1">{children}</div>
            </div>
          </SessionProvider>
        )}
      </body>
    </html>
  );
}
