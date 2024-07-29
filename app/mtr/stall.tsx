'use client'

import Image from 'next/image'
import imgStall from '/public/img/mtr/stall.png'
import { toiletInfo, StallStruct } from "./zustand";

export default function Stall({ area, id }: { area: string, id: string }) {
  const { stalls } = toiletInfo();
  var ndx: number = parseInt(id) - 1;
  var myStall: StallStruct = (area === 'male') ? stalls.male[ndx] : (area === 'female') ? stalls.female[ndx] : (area === 'accessible') ? stalls.accessible[ndx] : stalls.baby[ndx];

  var className = "stallState badge "
  className += (myStall.state === 'unknown') ? "bg-secondary" : (myStall.state === 'occupied') ? "bg-danger" : (myStall.state === 'idle') ? "bg-success" : "bg-primary";
  return (
    <div className="stall">
      <div className="stallText">
        {myStall.name}
      </div>
      <div>
        <Image className="stallImg" src={imgStall} alt="" />
      </div>
      <div className={className}>
        {myStall.state}
      </div>
    </div>
  );
}
