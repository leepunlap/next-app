'use client'

import Image from 'next/image'
import imgStall from '/public/img/mtr/stall.png'
import { useCartStore, StallsStruct, StallStruct } from "./zustand";

export default function Stall({ area, id }: { area: string, id: string }) {
  const { stalls } = useCartStore();
  var ndx: number = parseInt(id) - 1;
  var myStall: StallStruct = (area === 'male') ? stalls.male[ndx] : (area === 'female') ? stalls.female[ndx] : (area === 'accessible') ? stalls.accessible[ndx] : stalls.baby[ndx];
  return (
    <div className="stall">
      <div className="stallName">
        {myStall.name}
      </div>
      <Image className="stallImg" src={imgStall} alt="" />
    </div>
  );
}

export function SubmitButton() {
  return <button className="bg-blue-500 hover:ng-blue-700 text-white font-bold py-2 px-4">Button</button>
}