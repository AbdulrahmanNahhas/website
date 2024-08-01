"use client";

import { APIProvider, AdvancedMarker, Map, Marker } from "@vis.gl/react-google-maps";
import { getSensorData } from '@/lib/api';
import { useEffect, useState } from 'react';

const MyMap = () => {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;
  const [sensorData, setSensorData] = useState({
    lat: 0,
    lon: 0,
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Function to fetch and update sensor data
    async function updateSensorData() {
      try {
        const data = await getSensorData();
        setSensorData({
          lat: data.lat,
          lon: data.lon,
        });
        setError("");
      } catch (err) {
        console.error("Failed to fetch sensor data:", err);
        setError("Failed to fetch sensor data");
      }
    }

    // Fetch data immediately when the component mounts
    updateSensorData();

    // Set up an interval to fetch data every 10 seconds
    const intervalId = setInterval(updateSensorData, 10000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once on mount and sets up the interval

  if (error) return <div>Error: {error}</div>;
  if (!sensorData) return <div className="text-5xl font-bold">Loading...</div>;

  return (
    <APIProvider apiKey={googleMapsApiKey!}>
      <Map
        defaultZoom={18}
        minZoom={15}
        defaultCenter={{ lat: sensorData.lat, lng: sensorData.lon }}
        gestureHandling={"ESP-32-Car"}
        disableDefaultUI={true}
        mapId={"70004112e906483b"}
      >
        {/* <Marker position={{lat: lat, lng: lng}} /> */}
        <AdvancedMarker position={{lat: sensorData.lat, lng: sensorData.lon}}>
          <img src={"https://w7.pngwing.com/pngs/107/197/png-transparent-car-transport-vehicle-yellow-automobile-top-view-thumbnail.png"} width={25} height={25} />
        </AdvancedMarker>
      </Map>
      {/* <ControlPanel /> */}
    </APIProvider>
  );
};

export default MyMap;