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

const SidebarLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-80px)]">
      <TooltipProvider delayDuration={100}>
        <div className="bg-background w-full sm:border border-border/50 md:border-none sm:w-[400px] h-[70px] sm:mb-2 sm:left-1/2 sm:-translate-x-1/2 md:translate-x-0 md:left-0 md:m-0 sm:rounded-full md:w-28 md:h-full p-2 flex flex-row md:flex-col gap-4 items-center justify-center md:justify-between fixed md:relative bottom-0 z-[100] duration-300 transition-all">
          <div className="flex md:flex-col gap-2 items-center justify-start">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/"
                  className={ny(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "text-xl rounded-full hover:bg-secondary  w-14 h-14 p-1 md:w-16 md:h-16 md:p-2 duration-300",
                    pathname === "/" ? "bg-secondary border" : ""
                  )}
                >
                  <FaHouse className="w-5 h-5 md:w-7 md:h-7" />
                </Link>
              </TooltipTrigger>
              <TooltipContent variant="secondary">
                <p>Home</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/control"
                  className={ny(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "text-xl rounded-full hover:bg-secondary  w-14 h-14 p-1 md:w-16 md:h-16 md:p-2 duration-300",
                    pathname === "/control" ? "bg-secondary border" : ""
                  )}
                >
                  <FaCarRear className="w-5 h-5 md:w-7 md:h-7" />
                </Link>
              </TooltipTrigger>
              <TooltipContent variant="secondary">
                <p>Control</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/map"
                  className={ny(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "text-xl rounded-full hover:bg-secondary  w-14 h-14 p-1 md:w-16 md:h-16 md:p-2 duration-300",
                    pathname === "/map" ? "bg-secondary border" : ""
                  )}
                >
                  <FaMapLocationDot className="w-5 h-5 md:w-7 md:h-7" />
                </Link>
              </TooltipTrigger>
              <TooltipContent variant="secondary">
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
                    "text-xl rounded-full hover:bg-secondary  w-14 h-14 p-1 md:w-16 md:h-16 md:p-2 duration-300"
                  )}
                >
                  <FaYoutube className="w-5 h-5 md:w-7 md:h-7" />
                </Link>
              </TooltipTrigger>
              <TooltipContent variant="secondary">
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
                    "text-xl rounded-full hover:bg-secondary  w-14 h-14 p-1 md:w-16 md:h-16 md:p-2 duration-300",
                  )}
                >
                  <FaGithub className="w-5 h-5 md:w-7 md:h-7" />
                </Link>
              </TooltipTrigger>
              <TooltipContent variant="secondary">
                <p>GitHub</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/settings"
                  className={ny(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "text-xl rounded-full hover:bg-secondary  w-14 h-14 p-1 md:w-16 md:h-16 md:p-2 duration-300",
                    pathname === "/settings" ? "bg-secondary border" : ""
                  )}
                >
                  <FaGear className="w-5 h-5 md:w-7 md:h-7" />
                </Link>
              </TooltipTrigger>
              <TooltipContent variant="secondary">
                <p>Settings</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </TooltipProvider>
      <main className="w-full h-[calc(100%-70px)] sm:h-full">{children}</main>
    </div>
  );
};

export default SidebarLayout;
