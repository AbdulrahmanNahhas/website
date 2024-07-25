"use client";

import { useEffect, useState } from "react";
import ShinyButton from "../ui/shiny-button";
import { FaGithub, FaStar } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import config from "@/config/config";

const Navbar = () => {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );
  const [stars, setStars] = useState(0);

  const owner = config.github.owner;
  const repo = config.github.repo;

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 60000); // Update every 60 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${owner}/${repo}`
        );
        if (response.ok) {
          const data = await response.json();
          setStars(data.stargazers_count);
        } else {
          console.error("Failed to fetch stars");
        }
      } catch (error) {
        console.error("Error fetching stars:", error);
      }
    };

    fetchStars();
  }, [owner, repo]);

  return (
    <nav className="h-20 p-4 flex items-center justify-between w-full">
      <div className="flex md:gap-5 items-center">
        <div className="px-3">
          <Image
            src="/logo-black.png"
            alt="Logo"
            height={200}
            width={200}
            className="w-10 h-10 md:w-11 lg:w-12 md:h-11 lg:h-12 rounded-full filter invert"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="font-semibold sm:text-lg">{config.title}</h1>
          <h1 className="font-normal text-base">{time}</h1>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2">
        <Link
          href={`https://github.com/${config.github.owner}/${config.github.repo}/stargazers`}
          target="_blank"
        >
          <ShinyButton className="flex items-center gap-1">
            <>
              <FaGithub className="hidden sm:block" />
              <span className="hidden sm:block">Star on Github</span>
              <p className="flex items-center sm:pl-3 gap-1">
                <FaStar />
                {stars ? stars : "0"}
              </p>
            </>
          </ShinyButton>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
