"use client";

import { buttonVariants } from "@/components/ui/button";
import { ny } from "@/lib/utils";
import Link from "next/link";
import {
  FaCarRear,
  FaGear,
  FaGithub,
  FaHouse,
  FaMapLocationDot,
  FaYoutube,
} from "react-icons/fa6";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { usePathname } from "next/navigation";
import Navbar from "./navbar";

const SidebarLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-80px)]">
      <TooltipProvider delayDuration={100}>
        <div className="bg-[#80808030] w-full px-0 sm:border sm:w-[400px] h-[65px] sm:mb-2 sm:left-1/2 sm:-translate-x-1/2 md:translate-x-0 md:left-0 md:mx-4 md:h-min sm:rounded-full md:w-[70px] md:p-2 flex flex-row md:flex-col gap-1 items-center justify-center md:justify-between fixed md:top-1/2 md:-translate-y-1/2 md:relative bottom-0 z-[100] duration-300 transition-all backdrop-blur">
          <div className="flex md:flex-col gap-2 items-center justify-start">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/"
                  className={ny(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "text-xl rounded-full hover:bg-[#67605630]  w-14 h-14 p-1 md:w-15 md:h-15 md:p-2 duration-300",
                    pathname === "/" ? "bg-[#67605660] border" : ""
                  )}
                >
                  <FaHouse className="w-5 h-5 md:w-6 md:h-6" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" variant="secondary">
                <p>Home</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/control"
                  className={ny(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "text-xl rounded-full hover:bg-[#67605630]  w-14 h-14 p-1 md:w-15 md:h-15 md:p-2 duration-300",
                    pathname === "/control" ? "bg-[#67605660] border" : ""
                  )}
                >
                  <FaCarRear className="w-5 h-5 md:w-6 md:h-6" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" variant="secondary">
                <p>Control</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/map"
                  className={ny(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "text-xl rounded-full hover:bg-[#67605630]  w-14 h-14 p-1 md:w-15 md:h-15 md:p-2 duration-300",
                    pathname === "/map" ? "bg-[#67605660] border" : ""
                  )}
                >
                  <FaMapLocationDot className="w-5 h-5 md:w-6 md:h-6" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" variant="secondary">
                <p>Map</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="flex md:flex-col gap-2 items-center justify-start">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="https://www.youtube.com/@nahhas909?sub_confirmation=1"
                  target="_blank"
                  className={ny(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "text-xl rounded-full hover:bg-[#67605630]  w-14 h-14 p-1 md:w-15 md:h-15 md:p-2 duration-300"
                  )}
                >
                  <FaYoutube className="w-5 h-5 md:w-6 md:h-6" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" variant="secondary">
                <p>YouTube</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="https://github.com/AbdulrahmanNahhas/Wifi-ESP32-Car"
                  target="_blank"
                  className={ny(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "text-xl rounded-full hover:bg-[#67605630]  w-14 h-14 p-1 md:w-15 md:h-15 md:p-2 duration-300"
                  )}
                >
                  <FaGithub className="w-5 h-5 md:w-6 md:h-6" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" variant="secondary">
                <p>GitHub</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/settings"
                  className={ny(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "text-xl rounded-full hover:bg-[#67605630]  w-14 h-14 p-1 md:w-15 md:h-15 md:p-2 duration-300",
                    pathname === "/settings" ? "bg-[#67605660] border" : ""
                  )}
                >
                  <FaGear className="w-5 h-5 md:w-6 md:h-6" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" variant="secondary">
                <p>Settings</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </TooltipProvider>

      <main className="w-full h-[calc(100vh-40px)] my-5 bg-[#33333380] backdrop-blur border flex flex-col items-center justify-center rounded-3xl border overflow-y-scroll mx-2 sm:mx-3 md:ml-0 md:mr-4">
        <Navbar />
        
        {children}
      </main>
    </div>
  );
};

export default SidebarLayout;
