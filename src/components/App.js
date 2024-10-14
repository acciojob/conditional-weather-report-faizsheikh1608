import React, { useEffect, useState } from "react";
import "./../styles/App.css";
import WhetherDisplay from "./WhetherDisplay";

const App = () => {
  const [data, setData] = useState({ temprature: 0, conditions: "cool" });

  useEffect(() => {
    setTimeout(() => {
      setData({ temprature: 25, conditions: "Sunny" });
    }, 1000);
  }, []);

  return (
    <div>
      {/* Do not remove the main div */}
      <WhetherDisplay data={data} />
    </div>
  );
};

export default App;
