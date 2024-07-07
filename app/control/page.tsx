"use client";

import { useEffect, useRef, useState } from "react";
import api from "@/lib/api";
import { toast } from "@/components/ui/use-toast";
import axios, { AxiosError } from "axios";
import Error from "next/error";
import { Button } from "@/components/ui/button";
import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
} from "react-icons/fa6";
import { ny } from "@/lib/utils";

// {/* <ShinyButton
//         onClick={handleToggle}
//         className="text-3xl !font-semibold uppercase py-2 px-4"
//       >
//         {status ? "Turn Off" : "Turn On"}
//  </ShinyButton> */}

const Control = () => {
  const [distance, setDistance] = useState(0);
  const [activeButton, setActiveButton] = useState("");

  const upRef = useRef<HTMLButtonElement>(null);
  const leftRef = useRef<HTMLButtonElement>(null);
  const rightRef = useRef<HTMLButtonElement>(null);
  const downRef = useRef<HTMLButtonElement>(null);

  const handleDirections = async (
    direction: "forward" | "backward" | "left" | "right" | "stop"
  ) => {
    try {
      console.log("Sending: ", direction);
      const response = await api.post("/control", {action: "move",direction: direction});

      console.log("Response:", response.data);
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
      case "ArrowUp":
        setActiveButton("up");
        handleDirections("forward");
        break;
      case "ArrowLeft":
        setActiveButton("left");
        handleDirections("left");
        break;
      case "ArrowRight":
        setActiveButton("right");
        handleDirections("right");
        break;
      case "ArrowDown":
        setActiveButton("down");
        handleDirections("backward");
        break;
      default:
        break;
    }
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    switch (event.key) {
      case "ArrowUp":
      case "ArrowLeft":
      case "ArrowRight":
      case "ArrowDown":
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
    <div className="h-full flex items-center justify-center bg-secondary/25 rounded-3xl md:rounded-none md:rounded-tl-3xl border md:border-b-0 md:border-r-0 overflow-hidden text-6xl font-semibold sm:pb-[70px] md:pb-0">
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
            "text-3xl !font-semibold uppercase py-2 px-4 w-20 h-20 sm:h-24 sm:w-24 rounded-full border-border focus:bg-secondary hover:bg-secondary",
            activeButton === "up" && "bg-secondary"
          )}
        >
          <FaArrowUp />
        </Button>
        <div className="flex gap-4">
          <Button
            ref={leftRef}
            variant={"outline"}
            size={"icon"}
            onMouseDown={() => handleDirections("left")}
            onMouseUp={handleStop}
            onTouchStart={() => handleDirections("left")}
            onTouchEnd={handleStop}
            className={ny(
              "text-3xl !font-semibold uppercase py-2 px-4 w-20 h-20 sm:h-24 sm:w-24 rounded-full border-border focus:bg-secondary hover:bg-secondary",
              activeButton === "left" && "bg-secondary"
            )}
          >
            <FaArrowLeft />
          </Button>
          <Button
            variant={"outline"}
            size={"lg"}
            className="text-3xl !font-semibold uppercase py-2 px-4 w-24 h-20 sm:h-24 sm:w-28 rounded-3xl border-border bg-secondary cursor-default flex flex-col sm:gap-1"
          >
            <span className="text-xs text-[10px] sm:text-[12px] font-light">
              Distance
            </span>
            <h1>{distance}</h1>
          </Button>
          <Button
            ref={rightRef}
            variant={"outline"}
            size={"icon"}
            onMouseDown={() => handleDirections("right")}
            onMouseUp={handleStop}
            onTouchStart={() => handleDirections("right")}
            onTouchEnd={handleStop}
            className={ny(
              "text-3xl !font-semibold uppercase py-2 px-4 w-20 h-20 sm:h-24 sm:w-24 rounded-full border-border focus:bg-secondary hover:bg-secondary",
              activeButton === "right" && "bg-secondary"
            )}
          >
            <FaArrowRight />
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
            "text-3xl !font-semibold uppercase py-2 px-4 w-20 h-20 sm:h-24 sm:w-24 rounded-full border-border focus:bg-secondary hover:bg-secondary",
            activeButton === "down" && "bg-secondary"
          )}
        >
          <FaArrowDown />
        </Button>
      </div>
    </div>
  );
};

export default Control;
