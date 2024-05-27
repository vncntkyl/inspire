import UNlogo from "../../../assets/Learning/UNlogo.png";
import PLI from "../../../assets/Learning/PLI.webp";
import ideas from "../../../assets/Learning/ideas.png";

const Learning = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 p-5 bg-white max-w-full">
      <div className="text-xl font-bold text-center text-black whitespace-nowrap">
        OUR LEARNING PARTNERS
      </div>

      <div className="flex flex-wrap justify-center items-center gap-3 w-full max-w-full">
        <img
          src={UNlogo}
          alt="UN logo"
          className="h-10 sm:h-8 md:h-10 lg:h-12 xl:h-14 max-w-none"
        />
        <img
          src={PLI}
          alt="PLI"
          className="h-12 sm:h-10 md:h-12 lg:h-14 xl:h-16 max-w-none"
        />
        <img
          src={ideas}
          alt="Ideas"
          className="h-12 sm:h-10 md:h-12 lg:h-14 xl:h-16 max-w-none"
        />
      </div>
      <hr className="mt-5 border-gray-400 w-full max-w-full" />
    </div>
  );
};

export default Learning;
