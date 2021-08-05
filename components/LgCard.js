import Image from "next/image";
const LgCard = ({ img, title, description }) => {
  return (
    <div className="flex-1 my-2 space-y-1 transition duration-300 ease-out transform cursor-pointer max-w-max hover:scale-105 rounded-xl">
      <div className="relative h-[272px] w-[272px] md:h-[200px] md:w-[200px] lg:w-[260px] lg:h-[260px] xl:h-[350px] xl:w-[350px] ">
        <Image src={img} layout="fill" alt={title} className="rounded-lg" />
      </div>
      <div className="">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default LgCard;
