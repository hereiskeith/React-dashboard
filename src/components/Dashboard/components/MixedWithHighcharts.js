import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./styles-mixed-with-highcharts.scss";

const MixedWithHighcharts = (props) => {
  return (
    <div className={"mixed-with-highcharts-wrapper " + props.className}>
      {/*Title*/}
      <div className="text-title">{props.title}</div>

      {/*Numbers and the chart*/}
      <div className="mixed-with-highcharts-content">
        <div className="mixed-with-highcharts-text">
          <h3 className="text-number">{props.number}</h3>

          <h6
            className={
              "text-sub-number " +
              (props.subNumber.indexOf("-") > -1 ? "" : "text-sub-number-rise")
            }
          >
            {props.subNumber.indexOf("-") > -1
              ? props.subNumber.replace("-", "↓")
              : `↑${props.subNumber}`}
          </h6>
        </div>

        <div className="mixed-with-highcharts ">
          <HighchartsReact highcharts={Highcharts} options={props.options} />
        </div>
      </div>
    </div>
  );
};

export default MixedWithHighcharts;
