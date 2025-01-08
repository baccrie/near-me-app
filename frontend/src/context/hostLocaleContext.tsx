import { createContext, useReducer, useContext, ReactNode } from "react";

interface HostLocaleState {
  name: string;
  description: string;
  category: string;
  location: string;
  host: {
    name: string;
    about: string;
    image: string;
  };
  amenities: string;
  gallery: {
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    image5: string;
  };
}

interface Action {
  type: string;
  payload?: Partial<HostLocaleState>;
}

const initialState: HostLocaleState = {
  name: "",
  description: "",
  category: "",
  location: {},
  host: {
    name: "",
    about: "",
    image: "",
  },
  amenities: "",
  gallery: {
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
  },
};

const HostLocaleContext = createContext<{
  state: HostLocaleState;
  dispatch: React.Dispatch<Action>;
  updateState: (data: Partial<HostLocaleState>) => void;
  toggleAmenity: (amenity: string) => void;
} | null>(null);

const reducer = (state: HostLocaleState, action: Action): HostLocaleState => {
  const { payload, type } = action;

  switch (type) {
    case "updateState":
      return { ...state, ...payload };

    case "toggleAmenity": {
      if (!payload?.amenities) return state;

      const amenity = payload.amenities;
      const amenitiesArray = state.amenities.split(",").filter(Boolean);

      return {
        ...state,
        amenities: amenitiesArray.includes(amenity)
          ? amenitiesArray.filter((a) => a !== amenity).join(",")
          : [...amenitiesArray, amenity].join(","),
      };
    }

    default:
      return state;
  }
};

function HostLocaleProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function updateState(data: Partial<HostLocaleState>) {
    dispatch({ type: "updateState", payload: data });
  }

  function toggleAmenity(amenity: string) {
    dispatch({ type: "toggleAmenity", payload: { amenities: amenity } });
  }

  return (
    <HostLocaleContext.Provider
      value={{ state, dispatch, updateState, toggleAmenity }}
    >
      {children}
    </HostLocaleContext.Provider>
  );
}

function useHostLocale() {
  const context = useContext(HostLocaleContext);
  if (!context) {
    throw new Error("useHostLocale must be used within a HostLocaleProvider");
  }
  return context;
}

export { useHostLocale, HostLocaleProvider };
