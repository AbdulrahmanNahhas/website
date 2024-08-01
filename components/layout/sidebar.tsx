"use client";

import Navbar from "./navbar";
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

const SidebarLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col lg:flex-row h-full">
      <TooltipProvider delayDuration={100}>
        <div
          className={ny(
            "fixed bottom-0 z-[100] flex flex-row  transition-all duration-300 backdrop-blur w-full justify-center py-1 border-t",
            "sm:border sm:w-min sm:mb-2 sm:left-1/2 sm:-translate-x-1/2 sm:rounded-[40px] sm:gap-0 sm:p-1",
            "group lg:translate-x-0 lg:left-0 lg:mx-4 lg:h-min lg:w-[70px] lg:p-2 lg:flex-col lg:justify-between lg:top-1/2 lg:-translate-y-1/2 lg:fixed",
            "bg-[#333333]/50 lg:!w-[76px] lg:hover:!w-[200px] lg:gap-1 lg:items-start lg:justify-start lg:hover:rounded-3xl"
          )}
        >
          <div className="flex lg:flex-col gap-1 lg:gap-2 items-start justify-start relative lg:w-full">
            <Link
              href="/"
              className={ny(
                "flex items-center justify-start relative hover:bg-[#67605630] lg:w-full rounded-full cursor-pointer duration-300",
                pathname === "/" ? "bg-[#67605660] border border-border" : ""
              )}
            >
              <div
                className={ny(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "text-xl rounded-full w-14 h-14 p-1 lg:w-15 lg:h-15 lg:p-2 duration-300 hover:bg-transparent"
                )}
              >
                <FaHouse className="w-5 h-5 lg:w-6 lg:h-6" />
              </div>
              <span className="absolute left-12 group-hover:left-14 text-xl opacity-0 duration-500 group-hover:opacity-100 hidden lg:flex">
                <p>Home</p>
              </span>
            </Link>
            <Link
              href="/control"
              className={ny(
                "flex items-center justify-start relative hover:bg-[#67605630] lg:w-full rounded-full cursor-pointer duration-300",
                pathname === "/control"
                  ? "bg-[#67605660] border border-border"
                  : ""
              )}
            >
              <div
                className={ny(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "text-xl rounded-full  w-14 h-14 p-1 lg:w-15 lg:h-15 lg:p-2 duration-300 hover:bg-transparent"
                )}
              >
                <FaCarRear className="w-5 h-5 lg:w-6 lg:h-6" />
              </div>
              <span className="absolute left-12 group-hover:left-14 text-xl opacity-0 duration-500 group-hover:opacity-100 hidden lg:flex">
                <p>Control</p>
              </span>
            </Link>
            <Link
              href="/map"
              className={ny(
                "flex items-center justify-start relative hover:bg-[#67605630] lg:w-full rounded-full cursor-pointer duration-300",
                pathname === "/map" ? "bg-[#67605660] border border-border" : ""
              )}
            >
              <div
                className={ny(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "text-xl rounded-full  w-14 h-14 p-1 lg:w-15 lg:h-15 lg:p-2 duration-300 hover:bg-transparent"
                )}
              >
                <FaMapLocationDot className="w-5 h-5 lg:w-6 lg:h-6" />
              </div>
              <span className="absolute left-12 group-hover:left-14 text-xl opacity-0 duration-500 group-hover:opacity-100 hidden lg:flex">
                <p>Map</p>
              </span>
            </Link>
          </div>
          <div className="flex lg:flex-col gap-1 lg:gap-2 items-start justify-start relative lg:w-full">
            <Link
              href="https://www.youtube.com/@nahhas909?sub_confirmation=1"
              target="_blank"
              className={
                "flex items-center justify-start relative hover:bg-[#67605630] lg:w-full rounded-full cursor-pointer duration-300"
              }
            >
              <div
                className={ny(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "text-xl rounded-full  w-14 h-14 p-1 lg:w-15 lg:h-15 lg:p-2 duration-300 hover:bg-transparent"
                )}
              >
                <FaYoutube className="w-5 h-5 lg:w-6 lg:h-6" />
              </div>
              <span className="absolute left-12 group-hover:left-14 text-xl opacity-0 duration-500 group-hover:opacity-100 hidden lg:flex">
                <p>Demo</p>
              </span>
            </Link>
            <Link
              href="https://github.com/AbdulrahmanNahhas/Wifi-ESP32-Car"
              target="_blank"
              className={
                "flex items-center justify-start relative hover:bg-[#67605630] lg:w-full rounded-full cursor-pointer duration-300"
              }
            >
              <div
                className={ny(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "text-xl rounded-full  w-14 h-14 p-1 lg:w-15 lg:h-15 lg:p-2 duration-300 hover:bg-transparent"
                )}
              >
                <FaGithub className="w-5 h-5 lg:w-6 lg:h-6" />
              </div>
              <span className="absolute left-12 group-hover:left-14 text-xl opacity-0 duration-500 group-hover:opacity-100 hidden lg:flex">
                <p>Repo</p>
              </span>
            </Link>
            <Link
              href="/settings"
              className={ny(
                "flex items-center justify-start relative hover:bg-[#67605630] lg:w-full rounded-full cursor-pointer duration-300",
                pathname === "/settings"
                  ? "bg-[#67605660] border border-border"
                  : ""
              )}
            >
              <div
                className={ny(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "text-xl rounded-full  w-14 h-14 p-1 lg:w-15 lg:h-15 lg:p-2 duration-300 hover:bg-transparent"
                )}
              >
                <FaGear className="w-5 h-5 lg:w-6 lg:h-6" />
              </div>
              <span className="absolute left-12 group-hover:left-14 text-xl opacity-0 duration-500 group-hover:opacity-100 hidden lg:flex">
                <p>Settings</p>
              </span>
            </Link>
          </div>
        </div>
      </TooltipProvider>

      <main className="w-[calc(100%-16px)] sm:w-[calc(100%-24px)] lg:w-full h-[calc(100vh-100px)] sm:h-[calc(100vh-60px)] lg:h-[calc(100vh-40px)] my-4 bg-[#33333380] backdrop-blur border flex flex-col items-center justify-start rounded-3xl border overflow-y-scroll mx-2 sm:mx-3 lg:ml-16 lg:mr-4">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default SidebarLayout;
