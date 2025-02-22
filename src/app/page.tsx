import { fontCantataSerif } from "@/utils/font-constants";

export default function Home() {
  return (
    <div className={`${fontCantataSerif.className} flex flex-col`}>
      <div>
        
        <div className="h-screen w-full relative top-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover h-full w-full"
          >
            <source src={"/videos/pray_state.webm"} type="video/webm" />
            <source src={"/videos/pray_state.mp4"} type="video/mp4" />
          </video>
        </div>
        
        <div className="bg-gray-950 bg-opacity-80 h-screen w-full absolute top-0 z-10 flex flex-row items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-6xl text-white text-end tracking-wide">
              Creando soluciones
              <br />
              que nos definan.
            </h1>
          </div>
        </div>
      
      </div>
    </div>
  );
}
