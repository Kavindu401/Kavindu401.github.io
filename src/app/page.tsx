// import Image from "next/image";
// import face from "./assets/face.jpg"
import "./page.css";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black flex">
      <div className=" flex items-center h-screen w-[400px]">
        <div className="flex items-center flex-col w-full">
          <h1 className="text-white text-xl">My projects</h1>
          <div className="border border-white h-12 w-full mt-8 rounded-xl justify-center items-center flex cursor-pointer">
        <HoverCard>
          <HoverCardTrigger className="text-white">APEX institue payment portal</HoverCardTrigger>
          <HoverCardContent className="bg-slate-300 text-black">
            Payment logg portal for APEX INSTITUTE administrators.
          </HoverCardContent>
        </HoverCard>
        </div>
        <div className="border border-white h-12 w-full mt-4 rounded-xl justify-center items-center flex cursor-pointer">
        <HoverCard>
          <HoverCardTrigger className="text-white">Workout managemant app</HoverCardTrigger>
          <HoverCardContent className="bg-slate-300 text-black">
            Android app that helps keep track of personal workouts.
          </HoverCardContent>
        </HoverCard>
        </div>
        <div className="border border-white h-12 w-full mt-4 rounded-xl justify-center items-center flex cursor-pointer">
        <HoverCard>
          <HoverCardTrigger className="text-white">Music stream app</HoverCardTrigger>
          <HoverCardContent className="bg-slate-300 text-black">
            Music streaming app that stream audio throgh youtube.
          </HoverCardContent>
        </HoverCard>
        </div>
        <div className="border border-white h-12 w-full mt-4 rounded-xl justify-center items-center flex cursor-pointer">
        <HoverCard>
          <HoverCardTrigger className="text-white">Forest Gaurd</HoverCardTrigger>
          <HoverCardContent className="bg-slate-300 text-black">
            Music streaming app that stream audio throgh youtube.
          </HoverCardContent>
        </HoverCard>
        </div>
        </div>
      </div>
      <div className="flex flex-col bg-black-500 w-full h-screen">
        <h1 className="headTxt">&lt;Hi,I'm <span className="text-yellow-500 font-bold font-mono">Kavindu Perera</span>/&gt;</h1>
          <div className="para">
            <p className="text-white text-lg font-mono">I’m passionate about crafting innovative solutions and constantly improving my skills. With every project, I aim for excellence and growth. Ready to explore my work?</p>
          </div>
      </div>
    </div>
  );
}
