import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./styles-highcharts-component.scss";

const HighchartsComponent = (props) => {
  return (
    <div className={"highcharts-component-wrapper " + props.className}>
      <HighchartsReact highcharts={Highcharts} options={props.options} />
    </div>
  );
};

export default HighchartsComponent;
