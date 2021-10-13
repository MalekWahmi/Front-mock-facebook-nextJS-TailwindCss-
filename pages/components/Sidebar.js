import { useSession } from "next-auth/client";
import SidebarRow from "./SidebarRow"

import {
  ShoppingCartIcon,
  UserGroupIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";
import {
    CalendarIcon,
    DesktopComputerIcon,
    ClockIcon,
    UsersIcon
  } from "@heroicons/react/solid";
export default function Sidbebar() {
  const [session, loading] = useSession();
  return <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
     <SidebarRow  src="https://links.papareact.com/zvy/" title ="Bill Gates"/>
      <SidebarRow  className="h_8 w-8 text-blue-5" Icon ={UsersIcon} title ="Friends"/>
      <SidebarRow Icon ={UserGroupIcon} title ="Groups"/>
      <SidebarRow Icon ={ShoppingCartIcon} title= "Marketplace"/>      
      <SidebarRow Icon ={DesktopComputerIcon} title ="Watch"/>
      <SidebarRow Icon ={CalendarIcon} title ="Events"/>
      <SidebarRow Icon ={ClockIcon} title="Memories"/>
      <SidebarRow Icon ={ChevronDownIcon} title="See More"/>
  </div>;
}
