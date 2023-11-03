import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "../Main/Main";
import MainForUser from "../MainForUser/MainForUser";
import MainForBuyer from "../MainForBuyer/MainForBuyer";
import MainForBreeder from "../MainForBreeder/MainForBreeder";

function App() {
  return (
    <div className="App">
      <div className="page">
        <div className="page__content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/hello-user" element={<MainForUser />} />
            <Route path="/hello-buyer" element={<MainForBuyer />} />
            <Route path="/hello-breeder" element={<MainForBreeder />} />
            <Route path="/" element={<Main />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
