import { ChatAltIcon } from "@heroicons/react/solid";
import {
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
} from "@heroicons/react/solid";
import Head from "next/head";
import Link from "next/link";
import useOnScrolled from "../hooks/useOnScrolled";
import Plx from "react-plx";
import cityPic from "../public/assets/img/pexel-room.jpg";
import Image from "next/image";
import Navigation from "../components/navigation";

type Props = {};

const Index = () => {
  const galaxy = [
    {
      start: 300,
      end: 800,
      properties: [
        {
          startValue: 0.75,
          endValue: 1,
          property: "scale",
        },
      ],
    },
    {
      start: 800,
      end: 1500,
      properties: [
        {
          startValue: 1,
          endValue: 5,
          property: "scale",
        },
        {
          startValue: 1,
          endValue: 0.0,
          property: "opacity",
        },
      ],
    },
  ];
  const earth = [
    {
      start: 1350,
      end: 2200,
      properties: [
        {
          startValue: 0.05,
          endValue: 1,
          property: "scale",
        },
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
      ],
    },
    {
      start: 3000,
      end: 3600,
      properties: [
        {
          startValue: 1,
          endValue: 5,
          property: "scale",
        },
        {
          startValue: 1,
          endValue: 0,
          property: "opacity",
        },
      ],
    },
  ];
  const earthText = [
    {
      start: 1900,
      end: 2200,
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
      ],
    },
    {
      start: 1900,
      end: 3000,
      properties: [
        {
          startValue: 0,
          endValue: -50,
          property: "translateY",
        },
      ],
    },
    {
      start: 3000,
      end: 3200,
      properties: [
        {
          startValue: 1,
          endValue: 0,
          property: "opacity",
        },
      ],
    },
  ];
  const cloud = [
    {
      start: 3000,
      end: 3600,
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
      ],
    },
    {
      start: 3600,
      end: 3900,
      properties: [
        {
          startValue: 1,
          endValue: 0,
          property: "opacity",
        },
      ],
    },
  ];
  const city = [
    {
      start: 3500,
      end: 4500,
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
        {
          startValue: 1,
          endValue: 1.5,
          property: "scale",
        },
      ],
    },
    {
      start: 5500,
      end: 6500,
      properties: [
        {
          startValue: 1.5,
          endValue: 10,
          property: "scale",
        },
      ],
    },
    {
      start: 6100,
      end: 6500,
      properties: [
        {
          startValue: 1,
          endValue: 0,
          property: "opacity",
        },
      ],
    },
  ];
  const cityText = [
    {
      start: 4400,
      end: 4600,
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
      ],
    },
    {
      start: 4500,
      end: 5600,
      properties: [
        {
          startValue: 0,
          endValue: -50,
          property: "translateY",
        },
      ],
    },
    {
      start: 5500,
      end: 5900,
      properties: [
        {
          startValue: 1,
          endValue: 0,
          property: "opacity",
        },
      ],
    },
  ];
  const room = [
    {
      start: 6000,
      end: 6700,
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
        {
          startValue: 0.7,
          endValue: 1.2,
          property: "scale",
        },
      ],
    },
    {
      start: 7500,
      end: 8200,
      properties: [
        {
          startValue: 1.2,
          endValue: 7,
          property: "scale",
        },
      ],
    },
    {
      start: 7900,
      end: 8200,
      properties: [
        {
          startValue: 1,
          endValue: 0,
          property: "brightness",
        },
      ],
    },
  ];
  const roomText = [
    {
      start: 6500,
      end: 6700,
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
        {
          startValue: 0.7,
          endValue: 1,
          property: "scale",
        },
      ],
    },
    {
      start: 6500,
      end: 7900,
      properties: [
        {
          startValue: 0,
          endValue: -50,
          property: "translateY",
        },
      ],
    },
    {
      start: 7900,
      end: 8200,
      properties: [
        {
          startValue: 1,
          endValue: 0,
          property: "opacity",
        },
        {
          startValue: 1,
          endValue: 2.5,
          property: "scale",
        },
      ],
    },
  ];
  const computer = [
    {
      start: 8100,
      end: 9000,
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
      ],
    },
  ];
  const ComputerText1 = [
    {
      start: 8300,
      end: 9000,
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
        {
          startValue: 0.7,
          endValue: 1,
          property: "scale",
        },
      ],
    },
    {
      start: 8600,
      end: 9000,
      properties: [
        {
          startValue: 0,
          endValue: -50,
          property: "translateY",
        },
      ],
    },
    {
      start: 9800,
      end: 10500,
      properties: [
        {
          startValue: 1,
          endValue: 0,
          property: "opacity",
        },
        {
          startValue: 1,
          endValue: 2.5,
          property: "scale",
        },
      ],
    },
  ];
  const ComputerText2 = [
    {
      start: 10600,
      end: 12000,
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
        {
          startValue: 0.7,
          endValue: 1,
          property: "scale",
        },
      ],
    },
    {
      start: 8600,
      end: 9000,
      properties: [
        {
          startValue: 0,
          endValue: -50,
          property: "translateY",
        },
      ],
    },
  ];

  const scrolled = useOnScrolled();

  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <header
        className={`bg-zinc-800 z-10 fixed left-0 top-0 w-full h-full duration-500 overflow-hidden ${
          scrolled && "h-16"
        }`}
      >
        <Navigation></Navigation>
        <section
          className={`flex flex-col items-center justify-center h-full pb-20 duration-500 ${
            scrolled && " opacity-0 pointer-events-none"
          }`}
        >
          <h1 className="text-4xl md:text-6xl text-center leading-normal md:leading-normal font-Poppins w-full px-12">
            My name is <span className=" text-sky-400 font-medium">Tato</span>
            <br /> I{" "}
            <span className=" overflow-hidden inline-block relative h-12">
              <span className=" text-transparent select-none"> develop </span>
              <span className="absolute left-0 bottom-0 animate-[updown_linear_6s_infinite_-1s] text-sky-400 ml-4">
                design
              </span>
              <span className="absolute left-0 bottom-0 animate-[updown_linear_6s_infinite_-4s] text-sky-400">
                develop
              </span>
            </span>{" "}
            modern web app by ❤️
          </h1>
          <button className="group flex items-center justify-center px-6 py-2 mt-24 rounded-md bg-sky-600 hover:text-sky-700 hover:bg-white duration-300">
            <ChatAltIcon className="w-6 h-6 inline-block mr-2 group-hover:-rotate-[25deg] group-hover:scale-150 duration-300" />
            <span>Contact me</span>
          </button>
          <ChevronDoubleDownIcon
            className="absolute w-11 h-11 bottom-8 animate-bounce cursor-pointer p-2"
            onClick={() => {
              window.scrollTo(0, 10);
            }}
          />
        </section>
      </header>
      <div className="bg-[#000813]  h-[13000px] w-full ">
        <Plx
          parallaxData={galaxy}
          className="fixed top-0 left-0 w-full h-full scale-75"
        >
          <video
            autoPlay
            playsInline
            muted
            loop
            data-video-player-target="player"
            className="h-full w-full object-cover"
          >
            <source
              src="https://static.vecteezy.com/system/resources/previews/005/160/780/mp4/flying-star-fields-through-hyper-space-warp-free-video.mp4"
              type="video/mp4"
            />
            <source
              src="https://static.vecteezy.com/system/resources/previews/005/160/780/flying-star-fields-through-hyper-space-warp-free-video.webm"
              type="video/webm"
            />
          </video>
          <div className="w-full h-full fixed top-0 left-0 flex items-center justify-center">
            <div className=" text-6xl text-center leading-normal mx-8">
              Black holes are better understood than the human brain
            </div>
          </div>
        </Plx>
        <Plx
          parallaxData={earth}
          className="fixed top-0 left-0 w-full h-full scale-0"
        >
          <video
            autoPlay
            playsInline
            muted
            loop
            data-video-player-target="player"
            className="h-full w-full object-cover"
          >
            <source
              src="https://static.vecteezy.com/system/resources/previews/001/623/456/mp4/the-planet-earth-rotates-in-space-free-video.mp4"
              type="video/mp4"
            />
            <source
              src="https://static.vecteezy.com/system/resources/previews/001/623/456/the-planet-earth-rotates-in-space-free-video.webm"
              type="video/webm"
            />
          </video>
        </Plx>
        <Plx
          parallaxData={earthText}
          className="fixed top-0 left-0 w-full h-full opacity-0"
        >
          <div className="w-full h-full fixed top-0 left-0 flex items-center justify-center z-10">
            <div className=" text-6xl text-center leading-normal mx-8">
              When you trying to enter it
            </div>
          </div>
        </Plx>
        <Plx
          parallaxData={cloud}
          className="fixed top-0 left-0 w-full h-full opacity-0 mix-blend-screen"
        >
          <video
            autoPlay
            playsInline
            muted
            loop
            data-video-player-target="player"
            className="h-full w-full object-cover"
          >
            <source
              src="https://static.vecteezy.com/system/resources/previews/001/940/546/mp4/atmospheric-white-smoke-fog-effect-from-left-to-right-free-video.mp4"
              type="video/mp4"
            />
            <source
              src="https://static.vecteezy.com/system/resources/previews/001/940/546/atmospheric-white-smoke-fog-effect-from-left-to-right-free-video.webm"
              type="video/webm"
            />
          </video>
        </Plx>
        <Plx
          parallaxData={city}
          className="fixed top-0 left-0 w-full h-full opacity-0 mix-blend-screen scale-1"
        >
          <video
            autoPlay
            playsInline
            muted
            loop
            data-video-player-target="player"
            className="h-full w-full object-cover"
          >
            <source
              src="https://static.vecteezy.com/system/resources/previews/003/399/576/mp4/beautiful-building-and-architecture-around-hong-kong-city-skyline-free-video.mp4"
              type="video/mp4"
            />
            <source
              src="https://static.vecteezy.com/system/resources/previews/003/399/576/beautiful-building-and-architecture-around-hong-kong-city-skyline-free-video.webm"
              type="video/webm"
            />
          </video>
        </Plx>
        <Plx
          parallaxData={cityText}
          className="fixed top-0 left-0 w-full h-full opacity-0"
        >
          <div className="w-full h-full fixed top-0 left-0 flex items-center justify-center z-10">
            <div className=" text-6xl text-center leading-normal mx-8">
              You will find out ...
            </div>
          </div>
        </Plx>
        <Plx
          parallaxData={room}
          className="fixed top-0 left-0 w-full h-full opacity-0 scale-75"
        >
          <video
            autoPlay
            playsInline
            muted
            loop
            data-video-player-target="player"
            className="h-full w-full object-cover"
          >
            <source
              src="https://static.vecteezy.com/system/resources/previews/002/014/619/mp4/computer-room-mock-up-scene-office-animation-free-video.mp4"
              type="video/mp4"
            />
            <source
              src="https://static.vecteezy.com/system/resources/previews/002/014/619/computer-room-mock-up-scene-office-animation-free-video.webm"
              type="video/webm"
            />
          </video>
        </Plx>
        <Plx
          parallaxData={roomText}
          className="fixed top-0 left-0 w-full h-full opacity-0 scale-75"
        >
          <div className="w-full h-full fixed top-0 left-0 flex items-center justify-center z-10 ">
            <div className=" text-6xl text-center leading-normal mx-8 px-4 text-gray-200 bg-black/70">
              Unlimited possibility
            </div>
          </div>
        </Plx>
        <Plx
          parallaxData={computer}
          className="fixed top-0 left-0 w-full h-full opacity-0"
        >
          <video
            autoPlay
            playsInline
            muted
            loop
            data-video-player-target="player"
            className="h-full w-full object-cover"
          >
            <source
              src="https://static.vecteezy.com/system/resources/previews/005/166/520/mp4/man-hand-with-smartphone-and-futuristic-virtual-3d-interface-free-video.mp4"
              type="video/mp4"
            />
            <source
              src="https://static.vecteezy.com/system/resources/previews/005/166/520/man-hand-with-smartphone-and-futuristic-virtual-3d-interface-free-video.webm"
              type="video/webm"
            />
          </video>
        </Plx>
        <Plx
          parallaxData={ComputerText1}
          className="fixed top-0 left-0 w-full h-full opacity-0 scale-75"
        >
          <div className="w-full h-full fixed top-0 left-0 flex items-center justify-center z-10 ">
            <div className=" text-6xl text-center leading-normal mx-8 px-4 ">
              Work with me. <br /> We find the possibilities{" "}
              <span className=" text-sky-400">together</span>.
            </div>
          </div>
        </Plx>
        <Plx
          parallaxData={ComputerText2}
          className="fixed top-0 left-0 w-full h-full opacity-0 scale-75"
        >
          <div className="w-full h-full fixed top-0 left-0 flex items-center justify-center z-10 ">
            <div className=" text-6xl text-center leading-normal mx-8 px-4 ">
              <span className=" text-sky-400">Contact me</span> <br />I know you
              will.
            </div>
          </div>
          <div className=" absolute right-2 bottom-0 text-xs">
            All videos are licensed by Vecteezy
          </div>
          <ChevronDoubleUpIcon
            className="absolute z-20 left-1/2 -translate-x-1/2 w-11 h-11 bottom-8 animate-bounce cursor-pointer p-2"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          />
        </Plx>
      </div>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  return { props: { page: "index" } };
};
