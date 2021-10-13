import StoryCard from "../components/StoryCard";

const stories = [
  {
    name: "Bill Gates",
    src: ":https://links.papareact.com/zvy",
    profile: "https://links.papareact.com/zvy",
  },
];
import Image from "next/image";

export default function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      <div className=" h-14 w- md:h-20 md:w-20 lg:w-20 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105">
   
        <p className="absolute lg:opacity-100 bottom-4 w-5/6 text-black text-sm font-bold ">
          {stories.name}
        </p>
      </div>

      {stories.map((story) => {
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />;
      })}
    </div>
  );
}
