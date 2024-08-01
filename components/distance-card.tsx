// components/SensorDataComponent.jsx
import { useState, useEffect } from "react";
import { getSensorData } from "@/lib/api";
import { Button } from "./ui/button";
import { FaSpinner } from "react-icons/fa6";

export default function DistanceCard() {
  const [distance, setDistance] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Function to fetch and update sensor data
    async function updateSensorData() {
      try {
        const data = await getSensorData();
        setDistance(data.distance);
        setError("");
      } catch (err) {
        console.error("Failed to fetch sensor data:", err);
        setError("Failed to fetch sensor data");
      }
    }

    // Fetch data immediately when the component mounts
    updateSensorData();

    // Set up an interval to fetch data every 5 seconds
    const intervalId = setInterval(updateSensorData, 5000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once on mount and sets up the interval

  if (error)
    return (
      <>
        <Button
          disabled
          className={
            "text-4xl md:text-5xl !font-semibold uppercase py-2 px-4 w-24 h-24 sm:h-28 sm:w-28 !opacity-0 "
          }
        ></Button>
        <div className="fixed w-[calc(100%-20px)] top-20 lg:top-12 left-1/2 -translate-x-1/2 bg-red-950/50 backdrop-blur p-0 flex flex-col items-center justify-center py-3 px-5 rounded-xl border border-red-600/50 sm:w-[300px]">
          <span className="uppercase text-2xl lg:text-2xl mb-0 font-semibold p-0 m-0">
            Error
          </span>
          <div className="text-base lg:text-lg font-light text-wrap w-full text-center">
            {error}
          </div>
        </div>
      </>
    );
  if (!distance)
    return (
      <Button className="text-4xl md:text-5xl text-foreground cursor-default !font-semibold uppercase py-2 px-4 w-28 h-28 sm:h-32 sm:w-32 rounded-full border border-border bg-secondary/75 hover:bg-secondary">
        <FaSpinner className="animate-spin" />
      </Button>
    );

  return (
    <Button
      variant={"outline"}
      size={"lg"}
      className="text-4xl md:text-5xl text-foreground cursor-default !font-semibold uppercase py-2 px-4 w-28 h-28 sm:h-32 sm:w-32 rounded-full border border-border bg-secondary/75 hover:bg-secondary flex flex-col gap-1"
    >
      <span className="text-xs text-[10px] sm:text-[12px] font-light uppercase">
        Distance
      </span>
      <h1 className="text-xl font-semibol">
        {parseFloat(distance.toString()).toFixed(1)} cm
      </h1>
    </Button>
  );
}
