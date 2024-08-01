"use client";

import { useEffect, useRef, useState } from "react";
import { api } from "@/lib/api";
import { toast } from "@/components/ui/use-toast";
import axios, { AxiosError } from "axios";
import Error from "next/error";
import { Button } from "@/components/ui/button";
import {
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight,
  FaAngleUp,
} from "react-icons/fa6";
import { ny } from "@/lib/utils";
import DistanceCard from "@/components/distance-card";
import { useMediaQuery } from "@/lib/hooks/use-media-query";

const Control = () => {
  const [activeButton, setActiveButton] = useState("");
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const upRef = useRef<HTMLButtonElement>(null);
  const leftRef = useRef<HTMLButtonElement>(null);
  const rightRef = useRef<HTMLButtonElement>(null);
  const downRef = useRef<HTMLButtonElement>(null);

  const handleDirections = async (
    direction: "forward" | "backward" | "left" | "right" | "stop"
  ) => {
    try {
      const response = await api.post("/control", {
        action: "move",
        direction: direction,
      });

      // console.log("Response:", response.data);
    } catch (error: Error | AxiosError | any) {
      if (axios.isAxiosError(error)) {
        // Access to config, request, and response
        toast({
          title: error.name,
          description: error.message,
        });
      } else {
        console.error("Error:", error);
        // Just a stock error
      }
    }
  };

  const handleStop = () => {
    handleDirections("stop");
    setActiveButton("");
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case "AngleUp":
        setActiveButton("up");
        handleDirections("forward");
        break;
      case "AngleLeft":
        setActiveButton("left");
        handleDirections("left");
        break;
      case "AngleRight":
        setActiveButton("right");
        handleDirections("right");
        break;
      case "AngleDown":
        setActiveButton("down");
        handleDirections("backward");
        break;
      default:
        break;
    }
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    switch (event.key) {
      case "AngleUp":
      case "AngleLeft":
      case "AngleRight":
      case "AngleDown":
        handleStop();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div className="flex flex-col h-full">
      <div className="h-full flex items-center justify-center text-6xl font-semibold">
        <div className="flex flex-col items-center justify-center gap-4">
          <Button
            ref={upRef}
            variant={"outline"}
            size={"icon"}
            onMouseDown={() => handleDirections("forward")}
            onMouseUp={handleStop}
            onTouchStart={() => handleDirections("forward")}
            onTouchEnd={handleStop}
            className={ny(
              "text-4xl md:text-5xl !font-semibold uppercase py-2 px-4 w-24 h-24 sm:h-28 sm:w-28 rounded-full border-border focus:bg-secondary hover:bg-secondary bg-background/90 backdrop-blur",
              activeButton === "up" && "bg-secondary"
            )}
          >
            <FaAngleUp />
          </Button>
          <div className="flex gap-4 items-center">
            <Button
              ref={leftRef}
              variant={"outline"}
              size={"icon"}
              onMouseDown={() => handleDirections("left")}
              onMouseUp={handleStop}
              onTouchStart={() => handleDirections("left")}
              onTouchEnd={handleStop}
              className={ny(
                "text-4xl md:text-5xl !font-semibold uppercase py-2 px-4 w-24 h-24 sm:h-28 sm:w-28 rounded-full border-border focus:bg-secondary hover:bg-secondary bg-background/90 backdrop-blur",
                activeButton === "left" && "bg-secondary"
              )}
            >
              <FaAngleLeft />
            </Button>
            <DistanceCard />
            <Button
              ref={rightRef}
              variant={"outline"}
              size={"icon"}
              onMouseDown={() => handleDirections("right")}
              onMouseUp={handleStop}
              onTouchStart={() => handleDirections("right")}
              onTouchEnd={handleStop}
              className={ny(
                "text-4xl md:text-5xl !font-semibold uppercase py-2 px-4 w-24 h-24 sm:h-28 sm:w-28 rounded-full border-border focus:bg-secondary hover:bg-secondary bg-background/90 backdrop-blur",
                activeButton === "right" && "bg-secondary"
              )}
            >
              <FaAngleRight />
            </Button>
          </div>
          <Button
            ref={downRef}
            variant={"outline"}
            size={"icon"}
            onMouseDown={() => handleDirections("backward")}
            onMouseUp={handleStop}
            onTouchStart={() => handleDirections("backward")}
            onTouchEnd={handleStop}
            className={ny(
              "text-4xl md:text-5xl !font-semibold uppercase py-2 px-4 w-24 h-24 sm:h-28 sm:w-28 rounded-full border-border focus:bg-secondary hover:bg-secondary bg-background/90 backdrop-blur",
              activeButton === "down" && "bg-secondary"
            )}
          >
            <FaAngleDown />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Control;
