import Image from "next/image";

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
      <div className="text-center flex flex-col items-center gap-2">
        <h1 className="text-5xl font-bold font-mono text-black px-3 py-1.5 bg-white">Jefferson Chen</h1>
        <h2 className="text-2xl font-mono text-gray-700 px-2 py-1 bg-white">Software Engineer</h2>
        <p className="text-lg font-mono text-gray-600 px-2 py-1 bg-white">
          Currently working on the future of education at Art of Problem Solving
        </p>
        <div className="flex gap-3 justify-center">
          <a href="/blog" className="text-gray-700 px-1.5 py-0.5 hover:text-gray-400 transition-colors bg-white">
            Blog
          </a>
          <a href="/about" className="text-gray-700 px-1.5 py-0.5 hover:text-gray-400 transition-colors bg-white">
            About
          </a>
          <a href="https://github.com" className="text-gray-700 px-1.5 py-0.5 hover:text-gray-400 transition-colors bg-white">
            GitHub
          </a>
          <a href="https://linkedin.com" className="text-gray-700 px-1.5 py-0.5 hover:text-gray-400 transition-colors bg-white">
            LinkedIn
          </a>
          <a href="mailto:email@example.com" className="text-gray-700 px-1.5 py-0.5 hover:text-gray-400 transition-colors bg-white">
            Email
          </a>
        </div>
      </div>
    </div>
  );
}
