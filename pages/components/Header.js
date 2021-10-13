import React from "react";
import Image from "next/image";
import {signOut ,useSession} from "next-auth/client";
import {
  BeakerIcon,
  HomeIcon,
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  ViewGridIcon,
  ChevronDownIcon,
  BellIcon,
  ChatIcon,
} from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";

export default function Header() {
  const[session ]=useSession()
  return (
    <div className="sticky top-0 z-50 bgèwhite flex items-center p-2 lg:px-5 shadow-md">
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className=" hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
        {/* Center */}
        <div className="flex justify-center flex-grow">
          <div className="flex mx-auto centerspace-x-6 md:space-x-2">
            <HeaderIcon active Icon={HomeIcon} />
            <HeaderIcon Icon={FlagIcon} />
            <HeaderIcon Icon={PlayIcon} />
            <HeaderIcon Icon={ShoppingCartIcon} />
            <HeaderIcon Icon={UserGroupIcon} />
          </div>
        </div>
        {/* Rigth */}
        <div className="flex items-center cursor-pointer  md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group">
          {/* Profile pic */}
          {/* <Image
            Onclick={signOut}
            className="rounded-full cursor-pointer"
            src="https://www.google.com/search?q=malek+wahmi&sxsrf=AOaemvJPuWaoZ7pRDygsytkxWlb6UEx6WQ:1634052705383&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjtjbHYmMXzAhVM-aQKHbt8B-MQ_AUoAXoECAEQAw&biw=1920&bih=1012&dpr=1#imgrc=adoCzptIJ4nW1M&imgdii=Wyym5tjXzlbqSM"
            width="40"
            height="40"
            layout="fixed"
          /> */}

          <p className="whitespace-nowrap font-semibold pr-3">Malek Wahmi</p>

          <ViewGridIcon className="icon" />
          <ChatIcon className="icon" />
          <BellIcon className="icon" />
          <ChevronDownIcon className="icon" />
        </div>
      </div>
    </div>
  );
}
