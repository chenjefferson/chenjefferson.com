export default function Home() {
  return (
    <div className={`relative w-full h-full flex flex-col items-center justify-center`}>
      <h1 className="text-5xl font-bold mb-4">Jefferson Chen</h1>
      <h2 className="text-2xl text-gray-600">Software Engineer</h2>
      <div className="mt-8 flex gap-6">
        <a href="https://github.com" className="hover:text-gray-600 transition-colors">
          GitHub
        </a>
        <a href="https://linkedin.com" className="hover:text-gray-600 transition-colors">
          LinkedIn
        </a>
        <a href="mailto:email@example.com" className="hover:text-gray-600 transition-colors">
          Email
        </a>
      </div>
    </div>
  );
}
