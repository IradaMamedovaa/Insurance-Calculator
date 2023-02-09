import React from "react";
import "./style.scss";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const DateSection = ({ handleState, insurancetype }) => {
  const [startValue, setStartValue] = React.useState(null);
  const [endValue, setEndValue] = React.useState(null);

  const handleSelect = (start, end) => {
    if(insurancetype==='Annual insurance' && start != null){
      handleState('Period',1)
    }else if (startValue != null || endValue != null) {
      const period = (end - start) / (1000 * 3600 * 24);
      handleState('Period',period);
    }
  };
  return (
    <div className="DateSection">
      <div className="title">
        <p>Period</p>
      </div>
      <div className="datePickers">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            disablePast
            value={startValue}
            onChange={(newValue) => {
              setStartValue(newValue);
              handleSelect(newValue, endValue);
            }}
            renderInput={(params) => <TextField {...params} />}
            className="datePicker"
            maxDate={endValue}
          />
          <DatePicker
            disablePast
            value={endValue}
            onChange={(newValue) => {
              setEndValue(newValue);
              handleSelect(startValue, newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
            className="datePicker"
            minDate={startValue}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
};

export default DateSection;
