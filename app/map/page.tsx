"use server";

import MyMap from '@/components/map'

const page = () => {
  const position = {
    lat: 41.103841,
    lng: 28.787149
  }

  return (
    <div className="h-full md:h-[calc(100%-24px)] flex items-center justify-centerrounded-2xl md:rounded-2xl overflow-hidden opacity-[0.8] w-full">
     <MyMap lat={position.lat} lng={position.lng} />
    </div>
  )
}

export default page