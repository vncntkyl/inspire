import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import useExperts from "../Context/ExpertsContext";

function Expert() {
  const { id } = useParams();
  console.log(id);
  let host = "http://localhost/inspiredb";
  host = "https://new.inspireleaders.com.ph/api";
  const { retrieveExperts } = useExperts();
  const [experts, setExperts] = useState([]);
  const [expert, setExpert] = useState();

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    const setup = async () => {
      let results = await retrieveExperts();
      results = results.map((result) => {
        return {
          ...result,
          images: JSON.parse(result.images),
        };
      });
      setExperts(shuffle(results.filter((exp) => exp.name !== id)));
      setExpert(results.find((exp) => exp.name === id));
    };
    setup();
  }, [id]);

  return (
    expert && (
      <div className="flex flex-col justify-between h-full mt-4 lg:mt-8">
        <div className="w-full lg:max-w-7xl mx-auto px-4 lg:px-0">
          <Link
            to={`/Experts`}
            className="flex items-center w-fit"
          >
            <IoArrowBackCircle className="text-3xl lg:text-4xl 2xl:-ml-[35rem]" />
            <div className="ml-2 lg:ml-3 font-semibold text-base lg:text-lg">Back</div>
          </Link>
          <div className="lg:block mt-4 lg:mt-0">
            <h1 className="flex justify-center font-bold text-[#DF0000] text-xl lg:text-7xl">
              {expert.name}
            </h1>
            <div className="flex justify-center mt-6 lg:mt-10 mx-auto flex-col lg:flex-row lg:items-start">
              <div className="w-full lg:w-[47%] mb-4 lg:mb-0 lg:mr-5 flex justify-center lg:justify-end">
                <img
                  src={`${host}${expert.images[1]}`}
                  alt=""
                  className="w-full max-w-[18rem] lg:max-w-[20rem] rounded-lg"
                />
              </div>
              <div className="flex w-full lg:w-[53%] lg:ml-5 text-justify lg:mr-10">
                <span className="whitespace-pre-wrap text-xs sm:text-sm lg:text-base leading-relaxed lg:leading-normal px-2 sm:px-4 lg:px-0">
                  {expert.biography}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 pb-4 mt-6 lg:mt-10">
          <div className="flex font-bold text-lg ml-4">VIEW OTHER EXPERTS</div>
          <div className={`relative overflow-hidden ${window.innerWidth > 3840 ? 'mb-0' : 'mb-4'}`}>
            <div className="flex space-x-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4">
              {experts.map((exp, idx) => (
                <div
                  key={idx}
                  className="snap-center flex-shrink-0 w-64 sm:w-80 lg:w-96 shadow-sm hover:shadow-2xl transition-all rounded-lg bg-white p-4"
                >
                  <div className="flex flex-col items-center gap-4 text-black">
                    <img
                      src={`${host}${exp.images[0]}`}
                      alt=""
                      className="max-w-full border-gray-200 border-solid aspect-square w-[100px] sm:w-[120px] rounded-lg"
                    />
                    <div className="text-lg sm:text-xl font-bold text-center whitespace-nowrap">
                      {exp.name}
                    </div>
                    <div className="self-stretch mt-2 text-xs sm:text-sm leading-5 text-center">
                      {exp.description}
                    </div>
                    <Link
                      to={`/Experts/${exp.name}`}
                      className="flex items-center mt-auto"
                    >
                      <span className="grow">Read more</span>
                      <FaArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Expert;
