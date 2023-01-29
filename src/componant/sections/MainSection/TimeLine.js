import { React, useRef, useEffect } from "react";
import classes from "./Styles/TimeLine.module.css";


const TimeLine = () => {
  // -------------------------------
  const path= useRef(null);

    const animation = (scrollPercentage) => {

      var pathLength = path.current.getTotalLength();
      path.current.style.strokeDasharray = pathLength;
      path.current.style.strokeDashoffset = pathLength;
      
      var drawLength = pathLength * scrollPercentage;
      path.current.style.strokeDashoffset = pathLength - drawLength;
    };
  
    useEffect(()=>{
      const draw=()=>{
      var scrollPercentage =
        (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
          animation(scrollPercentage)
  
    }
    window.addEventListener("scroll", draw);
  
  },[]);

// -------------------------------

  return (
    <div className={classes.timeLine}>
      <span className={classes.mText}>Let me show you</span>
      <span className={classes.text}>SCROLL</span>
      <svg
        viewBox="0 0 10 500"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        <g id="Frame 2">
          <rect width="10" height="500" fill="none" />
          <g id="Group 1">
            <path
              id="movingStrock"
              d="M5 122V496"
              stroke="#1e8bf0"
              stroke-width="0.2"
              ref={path}
            />
            <path
              id="staticU"
              d="M5 86V122"
              stroke="#1e8bf0"
              stroke-width="0.2"
            />
            <path
              id="staticD"
              d="M5 4V72"
              stroke="#1e8bf0"
              stroke-width="0.2"
            />
            <circle
              id="topNot"
              cx="2"
              cy="2"
              r="1.9"
              transform="matrix(-1 0 0 1 7 0)"
              stroke="#1e8bf0"
              stroke-width="0.2"
            />
            <path
              id="mouse"
              d="M4.16664 72C3.67248 72 3.24665 72.1374 2.89415 72.4051C2.54582 72.6694 2.29665 73.0404 2.11915 73.4621C1.76916 74.2916 1.66666 75.3941 1.66666 76.5386V76.9796L1.15166 77.25C0.805611 77.4317 0.514578 77.7109 0.311169 78.0565C0.10776 78.4021 1.315e-05 78.8003 0 79.2065V81.4605C0 83.9516 1.84999 86 4.16664 86H5.8333C8.14995 86 9.99994 83.9508 9.99994 81.4605V78.5713C10 78.5654 10 78.5596 9.99994 78.5537V76.5377C9.99994 75.549 9.77328 74.7493 9.37661 74.1123C8.98161 73.477 8.43495 73.0316 7.83579 72.721C6.65079 72.1076 5.21664 72 4.16664 72ZM6.24996 77.3366V73.078C6.67496 73.1742 7.08996 73.3116 7.46662 73.5068C7.96329 73.7631 8.38245 74.114 8.67912 74.5917C8.97495 75.0669 9.16661 75.696 9.16661 76.5386V78.0174L6.24996 77.3366ZM5.41663 72.9398V77.1424L2.49999 76.4616C2.50499 75.3749 2.61165 74.4553 2.88082 73.8156C3.01582 73.4954 3.18331 73.2644 3.38248 73.1148C3.57665 72.9669 3.82748 72.875 4.16664 72.875C4.55664 72.875 4.9833 72.8907 5.41663 72.9398ZM2.49999 77.3585L9.16661 78.9125V81.4605C9.16661 83.5019 7.65829 85.125 5.8333 85.125H4.16664C2.34165 85.125 0.833328 83.5019 0.833328 81.4605V79.2065C0.833336 78.9626 0.898055 78.7236 1.02023 78.5162C1.1424 78.3088 1.31719 78.1412 1.52499 78.0323L1.68082 77.9509C1.68916 78.1828 1.70082 78.4584 1.71999 78.7559C1.77166 79.5766 1.87832 80.6109 2.10499 81.3257C2.12068 81.3822 2.14707 81.4348 2.18257 81.4804C2.21807 81.5259 2.26196 81.5635 2.31161 81.5908C2.36125 81.6181 2.41564 81.6346 2.47151 81.6393C2.52737 81.6441 2.58357 81.6369 2.63675 81.6183C2.68992 81.5997 2.73897 81.57 2.78096 81.531C2.82295 81.492 2.85702 81.4446 2.88113 81.3914C2.90524 81.3383 2.91889 81.2806 2.92127 81.2218C2.92365 81.163 2.91471 81.1043 2.89498 81.0493C2.70582 80.4516 2.60332 79.518 2.55082 78.6972C2.52303 78.2521 2.50636 77.8063 2.50082 77.3602L2.49999 77.3585Z"
              fill="#1e8bf0"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default TimeLine;
