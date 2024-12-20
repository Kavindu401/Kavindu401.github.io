// import Image from "next/image";
// import face from "./assets/face.jpg"
"use client";
import face from "./assets/face.jpg"
import Image from "next/image";
import "./page.css";
import { Button } from "@/components/ui/button";


import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { MoveDown } from 'lucide-react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export default function Home() {
  return (
    <div className="w-screen h-[1500px] bg-black flex">
      <div className="sticky top-0 flex items-center h-screen w-[400px]">
        <div className="w-64 h-[500px] ml-7 flex justify-center">
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
        <div className="h-[600px] w-0.5 bg-white ml-auto">
        </div>
      </div>
      <div className="flex flex-col bg-black-500 w-full">
        <div className=" h-[140px] flex items-center justify-center mt-5">
          <Menubar className="bg-black">
            <MenubarMenu>
              <MenubarTrigger className="bg-black text-white hover:underline cursor-pointer">HOME</MenubarTrigger>
              <MenubarTrigger className="bg-black text-white hover:underline cursor-pointer">EDUCATION</MenubarTrigger>
              <MenubarTrigger className="bg-black text-white hover:underline cursor-pointer">PROJECTS</MenubarTrigger>
              <MenubarTrigger className="bg-black text-white hover:underline cursor-pointer">SOCIALS</MenubarTrigger>
            </MenubarMenu>
          </Menubar>
        </div>
        <h1 className="headTxt">&lt;Hi,I'm <span className="text-yellow-500 font-bold font-mono">Kavindu Perera</span>/&gt;</h1>
        <Image
        src={face}
        id="faceImage"
        className="absolute right-28 top-60 rounded-full"
        alt="Kavindu Perera"
        height={250}
        width={250}
        />
        <div className="para">
          <p className="text-white text-lg font-mono">I’m passionate about crafting innovative solutions and constantly improving my skills. With every project, I aim for excellence and growth. Ready to explore my work?</p>
        </div>
        <div id="buttonBox" className="md:w-[700px] h-[100px] flex items-center justify-center mt-12">
          <div className="justify-center items-center bg-slate-700">
            <Button variant="secondary">
              <MoveDown/> Let Me Show You!
            </Button>
          </div>
        </div>

        <div className="flex flex-col w-full h-screen mt-20">
          <h1 className="text-white text-3xl ml-24">College education</h1>
            <li className="text-white ml-32 mt-10">Royal College</li>

          <h1 className="text-white text-3xl mt-20 ml-24">University education</h1>
            <li className="text-white ml-32 mt-10">Informatics Institute Of Technology , Colombo</li>
        </div>
      </div>
    </div>
  );
}
