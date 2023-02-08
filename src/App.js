import { useReducer } from "react";
import "./app.scss";
import ButtonGroup from "./components/ButtonGroup/ButtonGroup";
import Cost from "./components/Cost/Cost";
import CountSection from "./components/CountSection/CountSection";
import DateSection from "./components/DateSection/DateSection";
import Header from "./components/Header/Header";

const choices = {
  Insurancetype: null,
  Period: null,
  Packagetype: null,
  Anyadditionalcharges: null,
  Numberofpeople: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_SELECT":
      return {
        ...state,
        [action.field]: action.payload,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, choices);
  const handleInputChange=(e) => {
    dispatch({
      type: "HANDLE_SELECT",
      field: e.target.name.replace(/ /g,'').replace(/\?/g, ''),
      payload: e.target.id,
    })
  }
  const handleCountPeople=(number) => {
    dispatch({
      type: "HANDLE_SELECT",
      field: "Numberofpeople",
      payload: number,
    })
  }
  const handlePeriod=(number) => {
    dispatch({
      type: "HANDLE_SELECT",
      field: "Period",
      payload: number,
    })
  }

  console.log(state)
  return (
    <div className="App">
      <Header />
      <form className="form">
        <ButtonGroup
          title={"Insurance type"}
          variants={["Annual insurance", "Short term insurance"]}
          onChange={handleInputChange}
        />
        <DateSection handlePeriod={handlePeriod}/>
        <ButtonGroup
          title={"Package type"}
          variants={["Basic", "Extended", "Extra"]}
          onChange={handleInputChange}
        />
        <ButtonGroup
          title={"Any additional charges?"}
          variants={["No", "Cancellation", "Sport activities"]}
          onChange={handleInputChange}

        />
        <CountSection handleCountPeople={handleCountPeople} Numberofpeople={state.Numberofpeople}/>
        {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
        <input type="submit" className="calcBtn" />
        {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
      </form>
      <Cost cost={456} />
    </div>
  );
}

export default App;
