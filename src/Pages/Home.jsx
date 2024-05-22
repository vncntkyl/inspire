import React, { useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import Card from "../Components/Homepage/Card";
import Testimonials from "../Components/Homepage/Testimonials";
import { Carousel, Button, Label, TextInput } from "flowbite-react";
import Banners from "../Components/Homepage/Banners/Banners";
import Learning from "../Components/Homepage/Learning/Learning";
import Clients from "../Components/Homepage/Clients/Clients";
import OurPrograms from "../Components/Homepage/OurPrograms/OurPrograms";
import { SubscriptionProvider } from "../Context/SubscriptionContext";
import { ClientProvider } from "../Context/ClientContext";
import useSubscription from "../Context/SubscriptionContext";
import { ProgramProvider } from "../Context/ProgramsContext";
import { BannerProvider } from "../Context/BannersContext";

export default function Home() {
  return (
    <div>
      <BannerProvider>
        <Banners />
      </BannerProvider>
      <Learning />
      <Testimonial />
      <ProgramProvider>
        <OurPrograms />
      </ProgramProvider>
      <SubscriptionProvider>
        <Speaker />
      </SubscriptionProvider>
      <ClientProvider>
        <Clients />
      </ClientProvider>
    </div>
  );
}
function Testimonial() {
  const [active, setActive] = useState(0);
  const cards = [
    {
      msg: "“This program coaches employees effectively. It is the best leadership seminar i have attended so far because it presented a holistic approach of how to become a true leader.”",
      name: "Jamie Bagang",
      pos: "RCBC Savings Bank - Product Marketing Manager",
    },
    {
      msg: "“This would help to train more leaders and supervisors to handle their people. It gives us more training, enlightening ideas on how to handle people. the whole training/workshop is a good program to become a good leader to his/her people.”",
      name: "Mary Grace Cueva",
      pos: "RCBC Savings Bank - Department Head",
    },
    {
      msg: "“Very data-centric/statistical approach which would be helpul in making objective decisions. the exercises helped validate my understanding and the tools were helpful (5S, 5 Whys, etc).”",
      name: "Charmaine Espinas",
      pos: "Protecter and Gamble - Systems Analyst",
    },
    {
      msg: "“Training was lively and informational at the same time. Speaker pointed out examples applicable and relevant to the type of work we do. Speaker also used different types of media.”",
      name: "Ron De Guzman",
      pos: "Navitaire (Accenture) - Software Dev Senior Analyst",
    },
    {
      msg: "“It helps me become more open minded and more considerate and understanding on others' situation. I realized that i have some of the qualities/values of a leader but i dont know how to show/execute it.”",
      name: "Kristine dela Cruz",
      pos: "Moonyeen Holdings Inc - HR Supervisor",
    },
    {
      msg: "“The program is informative and inspirational. The topics and discussions makes me realize if i am doing the right thing in managing people and if not, what should i do to correct my shortcomings.”",
      name: "Rodgie L. Matias",
      pos: "Moonyeen Holdings Inc - Sales Manager",
    },
    {
      msg: "“The whole program has made a huge impact on me. Now, I think i'm ready to take on a more meaningful leadership role that would add more value to my team members. The program flow was smooth, clear and systematic..”",
      name: "Lou Divina B. Nebres",
      pos: "Generali Philippines - Area Sales Leader",
    },
    {
      msg: "“I really appreciate this training & will use what I have learned. This is very helpful especially for us leaders because we might encounter these different type of scenarios.”",
      name: "Francis Jed Patricio",
      pos: "Reed Elsevier - Operations Supervisor",
    },
    {
      msg: "“Stories are relevant and I can surely make use of my learnings to put my team on the right track.”",
      name: "Tristan Jay Cinco",
      pos: "Cloud Sherpas - Salesforce.com Application Support Lead",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center mb-12">
      <h1 className="text-[#DF0000] font-bold text-3xl md:text-5xl lg:text-7xl">
        TESTIMONIALS
      </h1>
      <Testimonials
        cards={cards.map((card, index) => {
          return {
            key: index,
            content: (
              <Card
                msg={card.msg}
                name={card.name}
                pos={card.pos}
                index={index}
                active={active}
              />
            ),
          };
        })}
        height="350px"
        width="50%"
        margin="auto"
        showArrows={false}
        setActive={setActive}
      />

      <Carousel
        theme={{
          indicators: {
            active: {
              off: "bg-gray-300 hover:bg:gray-200 dark:bg-gray-800/50 dark:hover:bg-gray-800",
              on: "bg-gray-600 dark:bg-gray-400",
            },
            base: "h-3 w-3 rounded-full",
            wrapper:
              "absolute -bottom-7 left-1/2 flex -translate-x-1/2 space-x-3",
          },
        }}
        className="w-full  lg:hidden"
        leftControl=" "
        rightControl=" "
      >
        {cards.map((card, index) => {
          return (
            <Card
              msg={card.msg}
              name={card.name}
              pos={card.pos}
              index={index}
              active={active}
            />
          );
        })}
      </Carousel>
    </div>
  );
}
function Speaker() {
  const { insertNewsletter } = useSubscription();
  const nameRef = useRef();
  const emailRef = useRef();
  const newsletter = async (e) => {
    e.preventDefault();
    if (nameRef === null || emailRef === null) return;
    const response = await insertNewsletter(
      nameRef.current.value,
      emailRef.current.value
    );
    nameRef.current.value = null;
    emailRef.current.value = null;
    alert(response);
  };
  return (
    <div className="w-full bg-black mt-10 mb-10">
      <div className="w-full max-w-7xl mx-auto flex flex-col text-white bg-black gap-4 py-10 px-10 md:min-h-[10vh] items-center lg:flex-row lg:gap-16">
        <h1 className="w-full lg:leading-normal font-bold flex flex-col justify-center items-center lg:items-center">
          <span className="flex flex-wrap gap-2 text-2xl md:text-4xl lg:gap-3 lg:text-5xl text-white lg:items-center">
            Get{" "}
            <span className="flex text-[#DF0000] gap-2">
              Updated{" "}
              <span className="text-white">
                with <span className="">Inspire!</span>
              </span>
            </span>
          </span>
          <span className="flex text-white gap-2 text-sm md:text-lg font-normal mt-5">
            Join our mailing list for updates and special promos!
          </span>
        </h1>
        <form className="w-[80%] lg:w-[50%]">
          <div className="flex flex-col w-full gap-6">
            <TextInput
              theme={{
                field: {
                  input: {
                    base: "w-full border-2 border-t-black border-x-black hover:border-white transition-all duration-300",
                    colors: {
                      gray: "bg-transparent",
                    },
                  },
                },
              }}
              color="gray"
              ref={nameRef}
              sizing="lg"
              className="w-full"
              id="name1"
              type="text"
              placeholder="Name *"
              required
            />
            <TextInput
              theme={{
                field: {
                  input: {
                    base: "w-full border-2 border-t-black border-x-black hover:border-white transition-all duration-300",
                    colors: {
                      gray: "bg-transparent",
                    },
                  },
                },
              }}
              color="gray"
              ref={emailRef}
              sizing="lg"
              className="w-full"
              id="email1"
              type="email"
              placeholder="Email *"
              required
            />
          </div>
          <div className="flex mt-6 justify-center w-auto">
            <Button
              size="lg"
              className="w-full"
              theme={{
                color: {
                  failure:
                    "text-white bg-[#DF0000] border border-[#DF0000] enabled:hover:bg-transparent enabled:hover:text-[#DF0000] focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:text-white dark:border-red-600 dark:enabled:hover:bg-red-700 dark:enabled:hover:border-red-700 dark:focus:ring-red-700",
                },
              }}
              color="failure"
              type="button"
              onClick={newsletter}
            >
              SUBSCRIBE
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
