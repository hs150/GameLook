import React from 'react'
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
        </div>
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
    </section>
  )
}
// BC kal karunga kaam ispe
export default Features
