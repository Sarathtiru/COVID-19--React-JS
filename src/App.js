import React, { useEffect, useState } from "react";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import styles from "./App.module.css";
import { fetchData } from "./api";
import coronaImage from "./images/COVID.png";

function App() {
  const [data, setData] = useState({
    data: {},
    country: "",
  });
  useEffect(() => {
    console.log("App.js useEffect called");
    (async () => {
      const result = await fetchData();
      setData((data) => ({
        ...data,
        data: result,
      }));
    })();
  }, []);

  
  const handleCountryChange = async (country) => {

    const fetchedData = await fetchData(country);

    setData((data) => ({
      ...data,
      data: fetchedData,
      country: country,
    }));
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src={coronaImage} alt="COVID-19" />
      {Object.keys(data.data).length > 0 ? (
        <Cards data={data.data} />
      ) : (
        "Loading..."
      )}
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data.data} country={data.country} />
    </div>
  );
}

export default App;
