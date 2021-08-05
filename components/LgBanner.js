import Image from "next/image";
const LgBanner = ({ img, title, description, buttonText, alt }) => {
  return (
    <div className="relative ">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          alt={alt}
          className="rounded-2xl"
        />
      </div>
      <div className="absolute space-y-2 top-32 left-12">
        <h3 className="w-64 mb-3 text-4xl font-medium">{title}</h3>
        <p className="">{description}</p>
        <button className="px-4 py-2 text-white bg-gray-900 rounded-xl">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default LgBanner;
