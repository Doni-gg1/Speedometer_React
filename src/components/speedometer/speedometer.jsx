import React, { useState, useEffect } from "react";
import Arrow from "../arrow/arrow";
import "./style.css";

function Speedometer({ randomCount, changeNum, maxSpeed, speedsNumCount }) {
  const [value, setValue] = useState(0);
  const [randomNum, setRandomNum] = useState(randomCount);
  const [progressDeg, setProgressDeg] = useState(0)
  const [arrowDeg, setArrowDeg] = useState(0)

  let mid = document.querySelector("#mid");

  const showSpeedNums = (data, countOfData) => {
    let rangeOfNums = 180 / countOfData
    let count = -90;
    data.forEach((item) => {
      let h3 = document.createElement("h3");
      h3.style.transform = `rotate(${count}deg)`
      h3.innerHTML = item;
      mid.append(h3);
      count = count + rangeOfNums;
    });
  };

  const countRange = () => {
    let range = 0;
    if (maxSpeed && speedsNumCount) {
      if (maxSpeed >= speedsNumCount) {
        let sum = 0;
        let arrRange = [];
        range = maxSpeed / speedsNumCount;
        mid.innerHTML = "";
        for (let i = 1; i < speedsNumCount; i++) {
          sum += range;
          arrRange.push(Math.ceil(sum));
        }
        arrRange.unshift(0);
        arrRange.push(maxSpeed);
        const number = arrRange.length;
        showSpeedNums(arrRange, number - 1);
      } else
        return console.log(
          "Кол-во ячеек не должено превышать максимальную скорость"
        );
    }
  };

  const counter = () => {
    if (maxSpeed >= 20) {
      if (value < randomNum) {
        setTimeout(() => {
          setValue(value + 1);
        }, 10);
      } else if (value === randomNum) {
        changeNum();
        setValue(0);
      }
    } else {
      setValue(0);
    }
    setArrowDeg(value <= maxSpeed ? value / (maxSpeed / 180) - 90: -90)
    setProgressDeg(value <= maxSpeed ? value / (maxSpeed / 180): 0)
  };

  useEffect(() => {
    countRange();
    setRandomNum(randomCount);
    counter();
  }, [value, randomNum, randomCount, maxSpeed, speedsNumCount]);

  return (
    <div>
      <div className="block">
        <div className="speedometer">
          <svg
            id="first"
            width="104"
            height="162"
            viewBox="0 0 52 81"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
             
            </defs>

            <path
              d="M2 79.5L22.9999 80V76L23.4999 71L23.9999 68L24.4999 64L25.4999 59.5L26.9999 54L28.4999 49.5L30.4999 45L32.5 41L34.5 37L37 33L39 30L41.5 27L43.5 24.5L46.5 21L49 18.5L51 16.5L35.5 1L33 3.5L30.4999 6L28.9999 7.5L27.4999 9L25.4999 11.5L23.4999 14L21.4999 17L19.4999 19.5L15.4999 26L11.9999 32.5L8.99995 39L6.99995 44L5.49995 48.5L3.99995 54L2.49994 61L1.99994 64L1.49995 67L0.999939 70L0.499939 73V73.5V74V74.5V75V75.5V76.5V77.5V79.5H2Z"
              stroke=""
            />
            <foreignObject x="0" y="50" width="50" height="50">
              <span>0</span>
              <span>1</span>
            </foreignObject>
          </svg>

          <svg
            id="second"
            width="152"
            height="94"
            viewBox="0 0 76 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
           
            <path
              d="M1 30.5L16.5 46L21 42L25 39L29 36.5L34 33.5L37 32L41.5 30L46.5 28L51 26.5L57 25L62 24L67 23.5L72 23H75.5V1L64 1.5L57 2.5L52 3.5L46 5L42.5 6L38 7.5L32 10L28.5 11.5L23 14.5L18.5 17L13 20.5L10.5 22.5L8 24.5L5.5 26.5L3 28.5L1 30.5Z"
              stroke=""
            />
          </svg>

          <svg
            id="third"
            width="154"
            height="94"
            viewBox="0 0 77 47"
            // fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M75.5 30.5L60 46L55.5 42L51.5 39L47.5 36.5L42.5 33.5L39.5 32L35 30L30 28L25.5 26.5L19.5 25L14.5 24L9.5 23.5L4.5 23H1V1L12.5 1.5L19.5 2.5L24.5 3.5L30.5 5L34 6L38.5 7.5L44.5 10L48 11.5L53.5 14.5L58 17L63.5 20.5L66 22.5L68.5 24.5L71 26.5L73.5 28.5L75.5 30.5Z"
              stroke=""
            />
          </svg>

          <svg
            id="fourth"
            width="104"
            height="162"
            viewBox="0 0 52 81"
            // fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M49.9999 79.5L29 80V76L28.5 71L28 68L27.5 64L26.5 59.5L25 54L23.5 49.5L21.5 45L19.5 41L17.5 37L15 33L13 30L10.5 27L8.49998 24.5L5.49998 21L2.99998 18.5L0.999985 16.5L16.5 1L19 3.5L21.5 6L23 7.5L24.5 9L26.5 11.5L28.5 14L30.5 17L32.5 19.5L36.5 26L40 32.5L43 39L45 44L46.5 48.5L48 54L49.5 61L50 64L50.5 67L51 70L51.5 73V73.5V74V74.5V75V75.5V76.5V77.5V79.5H49.9999Z"
              stroke=""
            />
          </svg>

          <svg className="progress" width="480" height="242" style={{transform: `rotate(${ progressDeg }deg)`, transition: "0.1s"}} viewBox="0 0 224 111" fill="none"  xmlns="http://www.w3.org/2000/svg">
            <path d="M7 126H37.5V100.5L43.5 86.5L51.5 71L62 60.5L77.5 48L99 41.5L114.5 35H126.5L145 39.5L173.5 67.5L194 150.5L200 250V119.5L203.5 119L238.5 117.5L239 95.5L224 25.5L206.5 37L188.5 26L164.5 6L128.5 1H90.5L51.5 17.5L22 44L7 69.5L0.5 80.5V106L7 206Z   " fill="white" />
          </svg>


          <svg className='borders' width="304" height="94" viewBox="0 0 152 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.5 32.5L2 31L1.5 30.5L2.5 29.5L8.5 35.5L17.5 44.5L16.5 45.5L7.5 36.5L6 35L4.5 33.5L3.5 32.5Z" stroke="black"/>
            <path d="M148 33.5L149.5 32L151 30.5L150 29.5L143 36.5L134.5 45L135.5 46L144 37.5L145.5 36L147 34.5L148 33.5Z" stroke="black"/>
            <path d="M77.3049 4.23589L77.2852 2.11466L77.2852 0.897659L75.9432 0.897665L75.9432 9.90563L76.0614 22.633L77.4755 22.6199L77.3574 9.8925L77.3377 7.77127L77.318 5.65004L77.3049 4.23589Z" stroke="black"/>
          </svg>

          <svg className='borders_2' width="442" height="6" viewBox="0 0 221 3" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M198 1L216 0.59574L220.5 0.7" stroke="black"/>
            <path d="M0.5 0.5L24 1" stroke="black"/>
          </svg>

          <div id="mid"></div>
          <div>
            <Arrow setProgressDeg={setProgressDeg} arrowDeg={arrowDeg} value={value} maxSpeed={maxSpeed} />
            <h1>{value}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Speedometer;
