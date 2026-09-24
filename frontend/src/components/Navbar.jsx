import {
  FaBrain,
  FaGithub
} from "react-icons/fa";

function Navbar() {
  return (
    <nav className="border-b border-[#B9D175]/40 bg-[#450C3F]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#B9D175] text-[#450C3F]">
            <FaBrain size={21} />
          </div>

          <div>
            <h1 className="font-bold tracking-tight text-[#F5FBDA]">
              ResumeAI
            </h1>

            <p className="text-xs text-[#D9EFBD]">
              Intelligent Job Matching
            </p>
          </div>

        </div>

        <div className="flex items-center gap-5">

          <span className="hidden text-sm text-[#D9EFBD] sm:block">
            AI Resume Intelligence
          </span>

          <a
            href="#"
            aria-label="GitHub repository"
            className="rounded-lg p-2 text-[#F5FBDA] transition hover:bg-[#B9D175] hover:text-[#450C3F]"
          >
            <FaGithub size={21} />
          </a>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;