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
  amenities: string[];
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
  payload?: Partial<HostLocaleState> | string;
}

const initialState: HostLocaleState = {
  name: "",
  description: "",
  category: "",
  location: "", // Fixed: Changed from {} to an empty string
  host: {
    name: "",
    about: "",
    image: "",
  },
  amenities: [],
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
      return { ...state, ...(payload as Partial<HostLocaleState>) };

    case "toggleAmenity": {
      const amenity = payload as string; // Ensure payload is treated as a string
      const isPresent = state.amenities.includes(amenity);

      return {
        ...state,
        amenities: isPresent
          ? state.amenities.filter((item) => item !== amenity) // Remove if exists
          : [...state.amenities, amenity], // Add if not exists
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
    dispatch({ type: "toggleAmenity", payload: amenity });
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
