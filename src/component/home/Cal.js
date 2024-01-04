import React, { useState } from "react";

function Cal() {
  let a = 0;
  let b = 0;

  const [values, setvalues] = useState();

  const readValueOfA = (e) => {
    a = parseInt(e.target.value);
  };
  const readValueOfB = (e) => {
    b = parseInt(e.target.value);
  };

  function add() {
    setvalues("addition:" + (a + b));
  }
  function sub() {
    setvalues("Sub:" + (a - b));
  }
  function mul() {
    setvalues("mul:" + a * b);
  }
  function division() {
    setvalues("div:" + a / b);
  }

  return (
    <div>
      <input type="number" onChange={readValueOfA} className="border"/><br /><br />
      <input type="number" onChange={readValueOfB} className="border"/><br /><br />
      <button onClick={add} className="border">add</button>
      <button onClick={sub} className="border">sub</button>
      <button onClick={mul} className="border">mul</button>
      <button onClick={division}className="border">div</button>

      <p>{values}</p>
    </div>
  );
}

export default Cal;
