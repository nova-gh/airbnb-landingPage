import Image from "next/image";

const SmCard = ({ img, location, distance }) => {
  return (
    <div className="flex items-center my-2 space-x-4 transition duration-150 ease-out cursor-pointer rounded-xl hover:bg-gray-100 hover:scale-105 max-w-max">
      <div className="relative w-[64px] h-[64px] ">
        <Image src={img} layout="fill" alt={location} className="rounded-lg" />
      </div>
      <div className="text-primeBlack">
        <h2 className="font-semibold">{location}</h2>
        <h3 className="">{distance}</h3>
      </div>
    </div>
  );
};

export default SmCard;
