// import Image from "next/image";
// import face from "./assets/face.jpg"

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black flex">
      <div className=" flex items-center h-screen w-[400px]">
        <div className="w-64 h-[500px] ml-7 flex justify-center">
        
        <div className="flex items-center flex-col w-full">
        <h1 className="text-white text-xl">My projects</h1>
        <div className="border border-white h-12 w-full mt-8 rounded-xl justify-center items-center flex cursor-pointer">

        </div>
        <div className="border border-white h-12 w-full mt-4 rounded-xl justify-center items-center flex cursor-pointer">
        
        </div>
        <div className="border border-white h-12 w-full mt-4 rounded-xl justify-center items-center flex cursor-pointer">
        
        </div>
        <div className="border border-white h-12 w-full mt-4 rounded-xl justify-center items-center flex cursor-pointer">
        
        </div>
      
        </div>
        </div>
        <div className="h-[600px] w-0.5 bg-white ml-auto">
        </div>
      </div>
      <div className="flex flex-col bg-black-500 w-full h-screen ">
        <div className=" h-[140px] flex items-center justify-center">
        {/* <Badge variant="outline">Outline</Badge> */}
        
        </div>
        <h1 className="headTxt">Hi,I'm <span className="text-yellow-500 font-bold font-mono">Kavindu Perera</span></h1>
        
         {/* <Image
              className="absolute right-28 top-60 rounded-full"
              src="./assets/face.jpg"
              alt="kavindu perera"
              width={250}
              height={250}
            /> */}
        {/* <h1 className="text-white mt-5 ml-40 text-5xl font-mono"><span className="text-yellow-500 font-bold font-mono">Kavindu Perera</span>/&gt;</h1> */}
        {/* <div className="h-[150px] md:w-[600px] ml-20 mt-10">
          <p className="text-white text-lg font-mono">&lt;"I’m dedicated to honing my skills and delivering high-quality work. I believe in the power of persistence and focus, always striving to improve with each project I take on. Without gibbering on more, let me show you what I’ve done."/&gt;</p>
        </div> */}
        <div className="para">
          <p className="text-white text-lg font-mono">I’m passionate about crafting innovative solutions and constantly improving my skills. With every project, I aim for excellence and growth. Ready to explore my work?</p>
        </div>
        <div id="buttonBox" className="md:w-[700px] h-[100px] flex items-center justify-center">
          <div className="justify-center items-center bg-slate-700">
          
          </div>
        </div>
      </div>
    </div>
  );
}
