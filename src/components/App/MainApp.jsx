import StoryCard from "./Card/StoryCard";
import Posts from "./Posts/Posts";
import Sidebar from "./Sidebar/Sidebar";
import Storys from "./Storys/Storys";

const MainApp = () => {
  return (
    <>
      <section className="col-span-2">
        <Storys />
        <Posts />
      </section>
      <section className=""></section>
    </>
  );
};

export default MainApp;
