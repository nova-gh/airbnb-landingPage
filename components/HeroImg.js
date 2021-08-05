import Image from "next/image";

const HeroImg = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="/imgs/heroImg.png"
        layout="fill"
        objectFit="cover"
        alt="airbnb hero Img"
        quality="100"
        className="object-bottom"
      />
      <div className="absolute w-full text-center top-1/2">
        <h1 className="text-sm font-medium sm:text-lg">
          Not sure where to go? Perfect.
        </h1>
        <button className="px-10 py-4 my-4 transition duration-150 bg-white rounded-full shadow-md hover:shadow-lg active:scale-90">
          <span className="text-sm font-bold text-transparent lg:text-lg bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            I&apos;m flexible
          </span>
        </button>
      </div>
    </div>
  );
};

export default HeroImg;
