import React from 'react'
import { TiLocationArrow } from 'react-icons/ti'
const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  )
}

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">Into the MetaGames</p>

          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Immerse yourself in a rich and ever-expanding universe of games, where each title offers unique experiences and challenges. Our platform is designed to bring together a diverse range of games, from action-packed adventures to strategic puzzles, ensuring that there's something for every type of gamer. Join our community and explore the endless possibilities that await in the world of MetaGames.
          </p>
        </div>
        <div className="border-hsla relative mb-7 h-96 w-full overflowh-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={<>radi<b>n</b>t</>}
            description="A cross-platform metagame app, tuning your activities across Web2 and Web3 games into a rewarding adventure."

          />
        </div>

        <div className=" grid h-[120vh] grid-cols-1 gap-7 md:h-[140vh] md:grid-cols-2 lg:h-[135vh] lg:grid-cols-2 lg:grid-rows-3">

          <div className="bento-tilt_1 col-span-1 row-span-1 lg:col-span-1 lg:row-span-2">
            <BentoCard
              src="/videos/feature-2.mp4"
              title={<>zig<b>m</b>a</>}
              description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            />
          </div>



          <div className=" bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/feature-3.mp4"
              title={<>nex<b>u</b>s</>}
              description="A cross-platform metagame app, tuning your activities across Web2 and Web3 games into a rewarding adventure."
            />
          </div>

          <div className=" bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="videos/feature-4.mp4"
              title={<>az<b>u</b>re</>}
              description="A cross-platform metagame app, tuning your activities across Web2 and Web3 games into a rewarding adventure."
            />
          </div>

        

         
          <div className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-15">
              <h1 className="bento-title special-font max-w-64 text-black">Mor<b>e</b> C<b>o</b>mi<b>n</b>g <b>s</b>o<b>o</b>n !</h1>
              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </div>

          // code ab yaha hoga

        </div>





        {/* <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <div className="col-span-1 row-span-2 bg-red-500">
            TEST
          </div> 
        </div>*/}


      </div>
    </section>
  )
}
// BC kal karunga kaam ispe

// 1:57:30 sec se bento-tilt_2 se
export default Features
