// GGSHEET

// YourComponent.js
import React, { useState, useEffect } from "react";
import fetchSheetData from "../components/sheetsService";

const YourComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const sheetData = await fetchSheetData();
        setData(sheetData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    loadData();
  }, []);

  return (
    <div>
      <h1>Google Sheets Data</h1>
      <ul>
        {data.map((row, index) => (
          <li key={index}>{row.join(", ")}</li>
        ))}
      </ul>
    </div>
  );
};

export default YourComponent;
