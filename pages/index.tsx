import Image from "next/image";
import { LinkButton } from "../components/LinkButton";

export default function Home() {
  return (
    <div className={`relative w-full h-screen flex flex-col items-center justify-center font-serif`}>
      <div className="fixed inset-0 -z-10">
        <Image
          src="/assets/ink_tree.png"
          alt="Background"
          style={{
            position: 'absolute',
            left: '20%',
            top: '60%',
            transform: 'translate(-50%, -50%)',
            objectFit: 'none'
          }}
          width={500}
          height={500}
          priority
        />
      </div>
      <div className="text-center flex flex-col items-center gap-2 bg-white/50 backdrop-blur-[2px] p-4">
        <h1 className="text-5xl font-bold font-mono text-black">Jefferson Chen</h1>
        <h2 className="text-2xl font-mono text-gray-700">Software Engineer</h2>
        <p className="text-lg font-mono text-gray-600">
          Currently working on the future of education at Art of Problem Solving
        </p>
        <div className="flex gap-3 justify-center">
          <LinkButton href="/blog">Blog</LinkButton>
          <LinkButton href="/about">About</LinkButton>
          <LinkButton href="https://github.com">GitHub</LinkButton>
          <LinkButton href="https://linkedin.com">LinkedIn</LinkButton>
          <LinkButton href="mailto:email@example.com">Email</LinkButton>
        </div>
      </div>
    </div>
  );
}
