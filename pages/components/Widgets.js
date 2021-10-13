import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon ,VideoCameraIcon} from "@heroicons/react/solid";


const contacts = [
  {
    src: "https://links.papareac.com/f0p",name : "Jeff Bezoz"},
    {src: "https://links.papareac.com/kxk",name : "Elon Musk"},
    { src: "https://links.papareac.com/snf",name : "Mark Zuckerberg"},
    { src: "https://links.papareac.com/d0c",name : "Harry Potter"},
    { src: "https://links.papareac.com/r57",name : "James Bond"},

];

export default function Widgets() {
  return <div className ="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gry-500 mb-5">
          <h2 className="text-xl">Contact</h2>
          <div className="flex space-x-2">
              <VideoCameraIcon className="h-6"/>
              <SearchIcon className="h-6"/>
              <DotsHorizontalIcon className="h-6"/>

          </div>

      </div>
  </div>;
}
