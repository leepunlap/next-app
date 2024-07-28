import { create } from 'zustand'

type CartStore = {
  messageCnt: number,
  parse: (topic: String, message: String) => void;
  stalls: StallsStruct
}

export type StallStruct = {
  name: string;
  door: string;
  pir: string;
  state: string;
}

export type StallsStruct = {
  male: StallStruct[],
  female: StallStruct[],
  accessible: StallStruct[],
  baby: StallStruct[],
}

export const toiletInfo = create<CartStore>((set, get) => ({
  messageCnt: 0,
  parse: (topic, message) => {
    const messageCnt = get().messageCnt;
    const stalls: StallsStruct = get().stalls;
    const str_array = topic.split('/');
    const deviceId = str_array.length >= 2 ? str_array[1] : '';
    for (var area in stalls) {
      var myStall: StallStruct[] = (area === 'male') ? stalls.male : (area === 'female') ? stalls.female : (area === 'accessible') ? stalls.accessible : stalls.baby;
      myStall.flatMap((x: StallStruct) => {
        if (deviceId === x.door) {
          console.log(messageCnt, deviceId, 'door', x.name, message);
        }
        if (deviceId === x.pir) {
          console.log(messageCnt, deviceId, 'pir', x.name, message);
        }
      });
    }
    set((state) => ({
      messageCnt: state.messageCnt + 1
    }));
  },
  stalls: {
    male: [
      { name: "M1", door: "D1859533", pir: "C5291775", state: "unknown" },
      { name: "M2", door: "C5076557", pir: "D2283443", state: "unknown" },
      { name: "M3", door: "C5076407", pir: "C5272107", state: "unknown" }
    ],
    female: [
      { name: "F1", door: "C5080400", pir: "C5295202", state: "unknown" },
      { name: "F2", door: "D1862081", pir: "D2224163", state: "unknown" },
      { name: "F3", door: "D1862325", pir: "C5295135", state: "unknown" },
      { name: "F4", door: "D1862225", pir: "D2249931", state: "unknown" },
      { name: "F5", door: "D1862213", pir: "D2279188", state: "unknown" },
      { name: "F6", door: "D1859835", pir: "D2248025", state: "unknown" },
      { name: "F7", door: "D1859986", pir: "D2290841", state: "unknown" },
      { name: "F8", door: "D1859613", pir: "D2278925", state: "unknown" },
      { name: "F9", door: "D1866373", pir: "C5279751", state: "unknown" }
    ],
    accessible: [
      { name: "A1", door: "D1866373", pir: "C5279751", state: "unknown" }
    ],
    baby: [
      { name: "B1", door: "D1866373", pir: "C5279751", state: "unknown" }
    ],
  }
}));