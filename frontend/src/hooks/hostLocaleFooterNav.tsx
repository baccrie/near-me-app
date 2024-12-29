import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function useFooterNav() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      let timer;

      if (isLoading) {
        timer = setTimeout(function () {
          navigate("/host-your-locale/location");
        }, 3000);
      }

      if (timer) {
        return () => {
          clearTimeout(timer);
        };
      }
    },
    [isLoading, navigate]
  );

  return [isLoading, setIsLoading, navigate];
}
