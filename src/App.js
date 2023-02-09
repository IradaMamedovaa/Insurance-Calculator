import { useReducer, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/style/app.scss";
import ButtonGroup from "./components/ButtonGroup/ButtonGroup";
import Cost from "./components/Cost/Cost";
import CountSection from "./components/CountSection/CountSection";
import DateSection from "./components/DateSection/DateSection";
import Header from "./components/Header/Header";
import { reducer } from "./services/actions/reducer";
import {
  choices,
  packageTypes,
  anyAdditionalCharges,
} from "./services/actions/store";

function App() {
  const [price, setPrice] = useState(0);
  const [state, dispatch] = useReducer(reducer, choices);
  const handleState = (fieldName, value) => {
    dispatch({
      type: "HANDLE_SELECT",
      field: fieldName,
      payload: value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    //validation
    if (state['Insurance type'] === null) notify("Insurance type"); 
    if (state['Package type'] === null) notify("Package type"); 
    if (state['Period'] === null) {
      notify("Period");
    } else {
      let cost = 1;
      // calculation - if user selected short term insurance type 
      if (state["Insurance type"] === "Short term insurance") {
        cost *= state["Number of people"] * state["Period"] * packageTypes[state["Package type"]]["shortTerm"] * anyAdditionalCharges[state["Any additional charges"]]["shortTerm"];
      }
      // calculation - if user selected annual insurance type 
      if (state["Insurance type"] === "Annual insurance") {
        cost *= state["Number of people"] * state["Period"] * packageTypes[state["Package type"]]["annual"] * anyAdditionalCharges[state["Any additional charges"]]["annual"];
      }
      setPrice(Number(cost.toFixed(2)));
    }
  }

  return (
    <div className="App">
      <Header />
      <form className="form">
        <ButtonGroup
          title={"Insurance type"}
          variants={["Annual insurance", "Short term insurance"]}
          required={true}
          handleState={handleState}
        />
        <DateSection
          handleState={handleState}
          insurancetype={state["Insurance type"]}
        />
        <ButtonGroup
          title={"Package type"}
          variants={["Basic", "Extended", "Extra"]}
          required={true}
          handleState={handleState}
        />
        <ButtonGroup
          title={"Any additional charges?"}
          variants={["No", "Cancellation", "Sport activities"]}
          required={false}
          handleState={handleState}
        />
        <CountSection
          handleState={handleState}
          Numberofpeople={state["Number of people"]}
        />
        {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
        <button
          type="submit"
          className="calcBtn"
          onClick={(e) => handleSubmit(e)}
        >
          Calculate
        </button>
        {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
      </form>
      <Cost cost={price} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </div>
  );
}

function notify(field) {
  toast.error(`Please choose an option in "${field}" section`, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}

export default App;
