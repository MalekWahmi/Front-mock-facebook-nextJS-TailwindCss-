import { getSession } from "next-auth/client";
import Head from "next/head";
import Header from "./components/Header";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
export default function Home({ session }) {
  // if (!session) return <Header />;
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>My Social Media</title>
      </Head>
      <Header />
      <main>
        {/* Sidebar */}
        <Sidebar/>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Get the user
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
