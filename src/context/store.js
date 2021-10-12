import react from "react";
import { setDataCalon, setFilterDataCalon, setUser } from "./type";
let initialDataCalone = {
  calon1: {
    total: 0,
    user: {
      tps1: {
        namaTps: "tps1",
        suara: 0,
        total: 0,
      },
      tps11: {
        suara: 0,
      },
      tps2: {
        namaTps: "tps2",
        suara: 0,
        total: 0,
      },
      tps3: {
        namaTps: "tps3",
        suara: 0,
        total: 0,
      },
      tps4: {
        namaTps: "tps4",
        suara: 0,
        total: 0,
      },
      tps5: {
        namaTps: "tps5",
        suara: 0,
        total: 0,
      },
      tps6: {
        namaTps: "tps6",
        suara: 0,
        total: 0,
      },
      tps7: {
        namaTps: "tps7",
        suara: 0,
        total: 0,
      },
      tps8: {
        namaTps: "tps8",
        suara: 0,
        total: 0,
      },
      tps9: {
        namaTps: "tps9",
        suara: 0,
        total: 0,
      },
    },
  },
  calon2: {
    total: 0,
    user: {
      tps1: {
        namaTps: "tps1",
        suara: 0,
        total: 0,
      },
      tps10: {
        suara: 0,
      },
      tps11: {
        suara: 0,
      },
      tps2: {
        namaTps: "tps2",
        suara: 0,
        total: 0,
      },
      tps3: {
        namaTps: "tps3",
        suara: 0,
        total: 0,
      },
      tps4: {
        namaTps: "tps4",
        suara: 0,
        total: 0,
      },
      tps5: {
        namaTps: "tps5",
        suara: 0,
        total: 0,
      },
      tps6: {
        namaTps: "tps6",
        suara: 0,
        total: 0,
      },
      tps7: {
        namaTps: "tps7",
        suara: 0,
        total: 0,
      },
      tps8: {
        namaTps: "tps8",
        suara: 0,
        total: 0,
      },
      tps9: {
        namaTps: "tps9",
        suara: 0,
        total: 0,
      },
    },
  },
  calon3: {
    total: 0,
    user: {
      tps1: {
        namaTps: "tps1",
        suara: 0,
        total: 0,
      },
      tps10: {
        suara: 0,
      },
      tps2: {
        namaTps: "tps2",
        suara: 0,
        total: 0,
      },
      tps3: {
        namaTps: "tps3",
        suara: 0,
        total: 0,
      },
      tps4: {
        namaTps: "tps4",
        suara: 0,
        total: 0,
      },
      tps5: {
        namaTps: "tps5",
        suara: 0,
        total: 0,
      },
      tps6: {
        namaTps: "tps6",
        suara: 0,
        total: 0,
      },
      tps7: {
        namaTps: "tps7",
        suara: 0,
        total: 0,
      },
      tps8: {
        namaTps: "tps8",
        suara: 0,
        total: 0,
      },
      tps9: {
        namaTps: "tps9",
        suara: 0,
        total: 0,
      },
    },
  },
  calon4: {
    total: 0,
    user: {
      tps1: {
        namaTps: "tps1",
        suara: 0,
        total: 0,
      },
      tps11: {
        suara: 0,
      },
      tps2: {
        namaTps: "tps2",
        suara: 0,
        total: 0,
      },
      tps3: {
        namaTps: "tps3",
        suara: 0,
        total: 0,
      },
      tps5: {
        namaTps: "tps5",
        suara: 0,
        total: 0,
      },
      tps6: {
        namaTps: "tps6",
        suara: 0,
        total: 0,
      },
      tps7: {
        namaTps: "tps7",
        suara: 0,
        total: 0,
      },
      tps8: {
        namaTps: "tps8",
        suara: 0,
        total: 0,
      },
      tps9: {
        namaTps: "tps9",
        suara: 0,
        total: 0,
      },
    },
  },
  tidakSah: {
    total: 0,
    user: {
      tps1: {
        namaTps: "tps1",
        suara: 0,
        total: 0,
      },
      tps10: {
        suara: 0,
      },
      tps11: {
        suara: 0,
      },
      tps2: {
        namaTps: "tps2",
        suara: 0,
        total: 0,
      },
      tps3: {
        suara: 0,
      },
      tps5: {
        namaTps: "tps5",
        suara: 0,
        total: 0,
      },
      tps8: {
        namaTps: "tps8",
        suara: 0,
        total: 0,
      },
      tps9: {
        namaTps: "tps9",
        suara: 0,
        total: 0,
      },
    },
  },
};
const ContextReact = react.createContext(),
  initialState = {
    dataCalon: initialDataCalone,
    filterDataCalon: false,
    listUser: {},
  },
  reducers = (state, action) => {
    switch (action.type) {
      case setDataCalon: {
        return { ...state, dataCalon: action.payload };
      }
      case setFilterDataCalon: {
        return { ...state, filterDataCalon: action.payload };
      }
      case setUser: {
        return { ...state, listUser: action.payload };
      }
      default:
        throw new Error();
    }
  };
export { initialState, reducers, ContextReact };
