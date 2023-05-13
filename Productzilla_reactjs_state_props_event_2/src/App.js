import React, { useState } from "react";
import PropTypes from "prop-types";

function Counter(props) {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const resetCount = () => {
    setCount(0);
  };

  let countColor;
  if (count === 0) {
    countColor = 'blue';
  } else if (count % 2 === 0) {
    countColor = 'blue';
  } else {
    countColor = 'red';
  }

  return (
    <div style={{ backgroundColor: 'black', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'black', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
        <div style={{ width: '130px', height: '40px', backgroundColor: countColor, borderRadius: '10px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ fontSize: '36px', color: 'white', margin: 0 }}>Count:{count}</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <button style={{ margin: '0 1px' }} onClick={incrementCount}>Tambah</button>
          <button style={{ margin: '0 1px' }} onClick={decrementCount} disabled={count <= 0}>Kurang</button>
        </div>
        <button style={{ margin: '20px 0 0', alignSelf: 'center' }} onClick={resetCount}>Reset</button>
      </div>
    </div>
  );
}

Counter.propTypes = {
  count: PropTypes.number,
};

export default Counter;
