import React, {useEffect, useState} from "react";

function Arrow({ value, maxSpeed, arrowDeg }) {
    const [totalDeg, setTotalDeg] = useState(-90)

    useEffect(() => {
        // console.log(arrowDeg)
        if(arrowDeg) setTotalDeg(arrowDeg)
    }, [arrowDeg])
    return (
    <>
      <svg
        id="arrow"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: `rotate(${
              totalDeg 
          }deg)`,
          transition: "0.1s"
        }}
        viewBox="0 0 25 84"
        width="50px"
      >
        <path
          d="M10.7531 83.0602C11.3389 83.6459 12.2887 83.6459 12.8744 83.0602L22.4204 73.5142C23.0062 72.9284 23.0062 71.9787 22.4204 71.3929C21.8346 70.8071 20.8848 70.8071 20.2991 71.3929L11.8138 79.8782L3.3285 71.3929C2.74271 70.8071 1.79296 70.8071 1.20718 71.3929C0.621389 71.9787 0.621389 72.9284 1.20718 73.5142L10.7531 83.0602ZM10.3138 78L10.3138 81.9995L13.3138 81.9995L13.3138 78L10.3138 78Z"
          fill="black"
        />
        <path
          d="M1.47098 71.8898C1.47098 71.8898 10.0676 0.0417854 11.7534 1.4995"
          stroke="black"
        />
        <path
          d="M22.3375 71.8362C22.3375 71.8362 15.5 9.07717e-09 12.5 1.5"
          stroke="black"
        />
        <path
          d="M14 78.0103C13.9999 78.5626 13.0293 79.0111 11.6486 79.0108C10.2679 79.0105 9.49988 78.5626 9.5 78.0103C9.50012 77.4581 12.1645 3.01335 12.1647 2.01339C12.1648 1.5134 14.0001 77.4581 14 78.0103Z"
          fill="black"
        />
      </svg>
    </>
  );
}

export default Arrow;
