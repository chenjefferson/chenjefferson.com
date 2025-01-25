import Image from "next/image";
import { LinkButton } from "../components/LinkButton";
import { useState } from "react";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div 
      className={`relative w-full h-screen flex flex-col items-center justify-center font-serif cursor-pointer`}
      onClick={() => setShowContent(true)}
      onWheel={() => setShowContent(true)}
    >
      <div className="fixed inset-0 -z-10">
        <Image
          src="/assets/ink_tree.png"
          alt="Background"
          className="absolute left-[20%] top-[60%] -translate-x-1/2 -translate-y-1/2 object-none animate-[sway_10s_ease-in-out_infinite]"
          width={500}
          height={500}
          priority
        />
        <Image
          src="/assets/birds.png"
          alt="Background Birds"
          style={{
            position: 'absolute',
            right: '10%',
            top: '10%',
            objectFit: 'contain'
          }}
          width={100}
          height={100}
          priority
        />
        <Image
          src="/assets/grass1.png"
          alt="Grass"
          style={{
            position: 'absolute',
            bottom: "-10%",
            left: "-5%",
            objectFit: 'contain'
          }}
          width={400}
          height={400}
          priority
        />
      </div>
      <div 
        className={`
          fixed inset-0
          w-screen h-screen
          text-center
          flex flex-col justify-center items-center
          gap-2
          bg-white/80
          backdrop-blur-[2px]
          p-4
          relative
          transition-opacity duration-500
          ${showContent ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        onClick={(e) => {e.stopPropagation(); setShowContent(false)}}
      >
        <h1 className="text-5xl font-bold font-mono text-black">Jefferson Chen</h1>
        <h2 className="text-2xl font-mono text-gray-700">Software Engineer</h2>
        <p className="text-lg font-mono text-gray-600">
          Currently working on the future of education at Art of Problem Solving
        </p>
        <div className="flex gap-3 justify-center">
          <LinkButton href="/blog">Blog</LinkButton>
          <LinkButton href="/about">About</LinkButton>
          <LinkButton href="https://github.com/chenjefferson">GitHub</LinkButton>
          <LinkButton href="https://linkedin.com/jeffwilliamchen">LinkedIn</LinkButton>
          <LinkButton href="mailto:me@chenjefferson.com">Contact</LinkButton>
        </div>
      </div>
    </div>
  );
}
