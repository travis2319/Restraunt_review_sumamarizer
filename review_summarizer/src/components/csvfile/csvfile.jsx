import React, { useEffect, useRef } from "react";
// import Papa from "papaparse";
import { CSVReader } from "react-papaparse";
import Dataset from "../../../../Dataset/Final_Dataset.csv";
const csvfile = () => {
  //   useEffect(() => {
  //     const fetchParseData = async () => {
  //       Papa.parse(Dataset, {
  //         download: true,
  //         delimiter: ",",
  //         complete: (result) => {
  //           console.log(result.data);
  //         },
  //       });
  //     };
  //     fetchParseData();
  //   }, []);

  const buttonRef = useRef(null);
  const handleOnFileLoad = (data) => {
    console.log(data);
  };
  const onErrorHandler = (err, file, inputElem, reason) => {
    console.log(err);
  };
  return (
    <div>
      <CSVReader
        ref={buttonRef}
        onFileLoad={handleOnFileLoad}
        onError={onErrorHandler}
        onClick
        noDrag
        onRemoveFile={handleOnFileRemove}
      ></CSVReader>
    </div>
  );
};

export default csvfile;
