import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";
// import PropTypes from "prop-types";

const CountryPicker = ({handleCountryChange}) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    console.log("CountryPicker.js useEffect called");
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedCountries]);
  
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect onChange={(e)=>{handleCountryChange(e.target.value)}}>
        <option value="">Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country} >
            {country} 
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

// CountryPicker.propTypes = {};

export default CountryPicker;
