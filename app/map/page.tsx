"use server";

import MyMap from '@/components/map'

const page = () => {
  const position = {
    lat: 41.103841,
    lng: 28.787149
  }

  return (
    <div className="h-full flex items-center justify-center bg-secondary/25 rounded-2xl mx-1 sm:mx-2 md:m-0  md:rounded-tl-2xl border-t border-l overflow-hidden">
     <MyMap lat={position.lat} lng={position.lng} />
    </div>
  )
}

export default page