import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { MobileNav } from "@/components/MobileNav";
import { FaGithub, FaRunning } from "react-icons/fa";

const Navbar = () => {
  // Replace with your auth of choice, e.g. Clerk: const { userId } = auth();
  const isUserSignedIn = false;

  return (
    <nav
      className={cn(
        "sticky inset-x-0 top-0 z-30 h-14 border-b border-gray-200  bg-white/40 backdrop-blur-lg transition-all",
      )}
    >
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link
            href="/"
            className="z-40 flex items-center justify-center gap-1"
          >
            <FaRunning size={30} className="mr-2 text-primary" />
            <span className="text-2xl font-semibold">PersonalPT</span>
          </Link>
          <div className="flex items-center gap-1 sm:gap-4">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={"https://github.com/palmex/personalpt"}
              className="text-black hover:text-neutral"
            >
              <FaGithub size={30} />
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
