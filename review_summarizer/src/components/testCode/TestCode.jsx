import { useState, useEffect } from "react";
import Data from "./../../assets/Final_Dataset.csv";
import Papa from "papaparse";

function Test() {
  const [data, setData] = useState([]);

  // parse CSV data & store it in the component state

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        setData(results.data);
      },
    });
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(Data);
  //     const reader = response.body.getReader();
  //     const result = await reader.read();
  //     const decoder = new TextDecoder("utf-8");
  //     const csvData = decoder.decode(result.value);
  //     const parsedData = Papa.parse(csvData, {
  //       header: true,
  //       skipEmptyLines: true,
  //     }).data;
  //     setData(parsedData);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="App">
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      {data.length ? (
        <table className="table">
          <thead>
            <tr>
              <th>Restaurant</th>
              <th>Result</th>
              <th>Summary</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.Restaurant}</td>
                <td>{row.Result}</td>
                <td>{row.Summary}</td>
                <td>{row.Rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
      <br />
      <br />~ webstylepress ~
    </div>
  );
}

export default Test;
