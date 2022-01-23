import { useEffect, useState } from 'react';
import './App.css';
import Speedometer from './components/speedometer/speedometer';

function App() {

  const [data, setData] = useState([180, 60, 120, 20, 40, 160])
  // const [data, setData] = useState([120])
  const [randomCount, setRandomCount] = useState(0)
  const [maxSpeed, setMaxSpeed] = useState(0)
  const [speedsNumCount, setSpeedsNumCount] = useState(0)

  const changeNum = () => {
    setRandomCount(data[Math.floor(Math.random() * data.length)])
  }

  useEffect(() => {
    changeNum()
  }, [randomCount])

  return (
    <>
    <div className='container'>
    <label>Максимальная скорость <br/>
      <input type="number" min="20" onChange={(e) => setMaxSpeed(+e.target.value)} />
    </label> <br/>
    <label>Количество ячеек для спидометра <br/>
      <input type="number" min="2" onChange={(e) => setSpeedsNumCount(+e.target.value)} />
    </label>
      <Speedometer
        speeds={data}
        randomCount={randomCount}
        changeNum={changeNum}
        maxSpeed={maxSpeed}
        speedsNumCount={speedsNumCount}
      />
    </div>
      

    </>
  );
}

export default App;
