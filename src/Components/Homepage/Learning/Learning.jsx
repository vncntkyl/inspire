import UNlogo from "../../../assets/Learning/UNlogo.png";
import PLI from "../../../assets/Learning/PLI.webp";
import ideas from "../../../assets/Learning/ideas.png";

const Learning = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 p-5 bg-white max-md:px-5">
      <div className="text-xl font-bold text-center text-black whitespace-nowrap">
        OUR LEARNING PARTNERS
      </div>

      <div className="flex gap-3 max-sm:gap-1 justify-center items-center w-full max-h-[4.25rem]">
        <img
          src={UNlogo}
          alt="UN logo"
          className=" h-[40px] w-auto max-sm:h-[30px] max-sm:ml- "
        />
        <img src={PLI} alt="PLI" className=" h-[50px] w-auto " />
        <img src={ideas} alt="" className=" h-[50px] w-auto" />
      </div>
      <hr className="mt-5 border-gray-400 w-full max-w-[1300px] mx-auto" />
    </div>
  );
};

export default Learning;
