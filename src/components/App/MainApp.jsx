import { useSession } from "next-auth/react";
import StoryCard from "./Card/StoryCard";
import Posts from "./Posts/Posts";
import Sidebar from "./Sidebar/Sidebar";
import Storys from "./Storys/Storys";
import Suggestions from "./Suggestions/Suggestions";

const MainApp = () => {
  const { data: session } = useSession();
  return (
    <>
      <section className="col-span-2">
        <Storys />
        <Posts />
      </section>
      <section className="hidden lg:inline-grid">
        <div className="fixed top-24 ml-6">
          {session && (
            <>
              <Sidebar />
              <Suggestions />
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default MainApp;
