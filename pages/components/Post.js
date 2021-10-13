import Image from "next/image";
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";

function Post() {
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-xl">
        <div className="flex items-center space-x-2">
          <img
            className="rounded-full"
            src="https://links.papareact.com/zvy/"
            width={40}
            height={40}
            alt=""
          />
          <div>
            <p className="font-medium">Bill Gates</p>
            <p className="text-xs text-gray-400"> 13/10/2021,15:20:44</p>
          </div>
        </div>
        <p className="pt-4"> Yo!</p>
      </div>
      <div className="relative h-56 md:h-96 bg-white">
        <Image
          src="https://links.papareact.com/4u4"
          objectFit="cover"
          layout="fill"
        />
      </div>
      {/* Footer of post */}
      <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
        <div className="flex  items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl-none cursor-pointer">
            <ThumbUpIcon className="h-4"/>
            <p className="text-xs sm:text-base"> Like</p>
        </div>
        <div className="flex  items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl-none cursor-pointer">
        <ChatAltIcon className="h-4"/>
            <p className="text-xs sm:text-base"> Comment </p>
        </div>
        <div className="flex  items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl-none cursor-pointer ">
        <ShareIcon className="h-4"/>
            <p className="text-xs sm:text-base"> Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
