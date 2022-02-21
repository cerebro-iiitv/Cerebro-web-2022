import { useEffect, useRef } from "react";

const useHorizontalScroll = () => {
  const elRef = useRef();
  useEffect(() => {
    const element = elRef.current;
    if (element) {
      const onWheel = (e) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        element.scrollTo({
          left: element.scrollLeft + e.deltaY,
          // behavior: "smooth",
        });
      };
      element.addEventListener("wheel", onWheel);
      return () => element.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
};
export default useHorizontalScroll;
