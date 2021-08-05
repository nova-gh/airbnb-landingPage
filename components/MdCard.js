import Image from "next/image";
const MdCard = ({ img, title }) => {
  return (
    <div className="my-2 space-y-1 transition duration-300 ease-out transform cursor-pointer max-w-max hover:scale-105 rounded-xl">
      <div className="relative h-[272px] w-[272px] md:h-[216px] md:w-[216px] lg:w-[302px] lg:h-[302px] xl:w-[307px] xl:h-[307px]">
        <Image src={img} layout="fill" alt={title} className="rounded-lg" />
      </div>
      <div className="">
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
    </div>
  );
};

export default MdCard;
