import { useEffect, useState } from "react";

export default function ClockExample(){
    // logic for component, functionality
  const [myDate, myDateUpdate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      myDateUpdate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  });

  // UI of component
  return (
    <div>
        <h3>Example React</h3>
        <input/>
        <div>{myDate.toString()}</div>
    </div>
  );
}