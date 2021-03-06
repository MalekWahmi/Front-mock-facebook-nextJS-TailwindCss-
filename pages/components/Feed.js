import Stories from "../components/Stories";
import InputBox from "../components/InputBox";
import Post from "./Post";

export default function Feed() {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide">
      
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2x1">
        <Stories />
        <InputBox />
        <Post />
      </div>
    </div>
  );
}
