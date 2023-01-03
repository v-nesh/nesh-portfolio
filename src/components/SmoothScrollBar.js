// import React, { useEffect, useRef } from "react";
// import { useLocation } from "react-router-dom";
// import ScrolBar from "react-smooth-scrollbar";

// export default function SmoothScrollBar({ children }) {
//   const ref = useRef(null);
//   const { pathname } = useLocation();

//   useEffect(() => {
//     const { scrollbar } = ref.current;
//     scrollbar.setPosition(0, 0);
//   }, [pathname]);

//   return (
//     <ScrolBar ref={ref} damping={0.09}>
//       {children}
//     </ScrolBar>
//   );
// }
