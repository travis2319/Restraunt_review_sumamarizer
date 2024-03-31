import { useNavigate } from "react-router-dom";
import Papa from "papaparse";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      output: "json",
      complete: (results) => {
        const res = results.data;
        console.log(res);
        navigate("/home", { state: res });
      },
    });
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      <br />
      <p>Upload the Dataset file which is there in dataset folder</p>
    </div>
  );
}

export default App;
