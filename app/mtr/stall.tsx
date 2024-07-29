'use client'

import Image from 'next/image'
import imgStall from '/public/img/mtr/stall.png'
import { toiletInfo, StallStruct } from "./zustand";

export default function Stall({ area, id }: { area: string, id: string }) {
  const { stalls } = toiletInfo();
  var ndx: number = parseInt(id) - 1;
  var myStall: StallStruct = (area === 'male') ? stalls.male[ndx] : (area === 'female') ? stalls.female[ndx] : (area === 'accessible') ? stalls.accessible[ndx] : stalls.baby[ndx];

  var classNameStallState = "stallState badge "
  var classNameMotionState = "motionState badge "
  classNameStallState += (myStall.state === 'unknown') ? "bg-secondary" : (myStall.state === 'occupied') ? "bg-danger" : (myStall.state === 'vacant') ? "bg-success" : "bg-primary";
  classNameMotionState += (myStall.motion === 'unknown') ? "bg-secondary" : (myStall.motion === 'idle') ? "bg-dark" : (myStall.motion === 'motion') ? "bg-success" : "bg-primary";

  return (
    <div className="stall">
      <div className="stallText">
        {myStall.name}
      </div>
      <div>
        <Image className="stallImg" src={imgStall} alt="" />
      </div>
      <div className={classNameStallState}>
        {myStall.state}
      </div>
      <div className={classNameMotionState}>
        {myStall.motion}
      </div>
    </div>
  );
}
