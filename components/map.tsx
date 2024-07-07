"use client";

import { APIProvider, AdvancedMarker, Map, Marker } from "@vis.gl/react-google-maps";

const MyMap = ({lat, lng}: {lat: number, lng: number}) => {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;

  return (
    <APIProvider apiKey={googleMapsApiKey!}>
      <Map
        defaultZoom={18}
        minZoom={15}
        defaultCenter={{ lat: lat, lng: lng }}
        gestureHandling={"ESP-32-Car"}
        disableDefaultUI={true}
        mapId={"70004112e906483b"}
      >
        {/* <Marker position={{lat: lat, lng: lng}} /> */}
        <AdvancedMarker position={{lat: lat, lng: lng}}>
          <img src={"https://w7.pngwing.com/pngs/107/197/png-transparent-car-transport-vehicle-yellow-automobile-top-view-thumbnail.png"} width={25} height={25} />
        </AdvancedMarker>
      </Map>
      {/* <ControlPanel /> */}
    </APIProvider>
  );
};

export default MyMap;