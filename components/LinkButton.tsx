export const LinkButton = ({ href, children }: { href: string; children: React.ReactNode; }) => (
  <a
    href={href}
    className="text-gray-700 px-1.5 py-0.5 hover:text-gray-600 transition-colors duration-150 relative after:absolute after:bottom-0 after:right-0 after:w-full after:h-[1px] after:bg-gray-400 after:origin-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-150 tracking-wide"
  >
    {children}
  </a>
);
