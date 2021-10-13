import Image from "next/image";

export default function StoryCard({ name, src, profile }) {
  return (
    <div className="relative h-14 w-14 md:h-20 md:w-20 lg:w-32 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105">
      <Image
        className="absolute opacity-0 lg:opacity-100 rounded-full lg:rounded-3xl"
        src={profile}
        layout="fill"
      />
       <Image
        className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
        src={src}
        layout="fill"
      /> 
      <p className="absolute opacity-0 lg:opacity-100 bottom-4 w-5/6 text-white text-sm font-bold truncate">{name}</p>
    </div>
  );
}
