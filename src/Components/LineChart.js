import React, { useState, useEffect } from 'react';

import { VictoryLine, VictoryChart, VictoryAxis,VictoryTheme} from 'victory';

const LineChart = (Props) => {
  return ( 
    <VictoryChart
      style={{tickLabels: {fontSize: 3,angle: 45}}}
      theme={VictoryTheme.material}
      width={1000}
      height={450}
      domainPadding={-2}
      animate={{
        duration: 1000,
        onLoad: { duration: 500 }
      }}
      padding={{ top: 10, bottom: 100, left: Props.open, right: 20 }}
    >
      <VictoryLine  data={Props.data} x={Props.xaxis} y={Props.yaxis}  fixLabelOverlap/>
      <VictoryAxis dependentAxis style={{data: { fill: "#c43a31" }, tickLabels: {fontSize:10,padding:1}}} />
  <VictoryAxis style={{ tickLabels: {angle :65,fontSize:10, padding: 25}}}/>
    </VictoryChart>
  );
};

export default LineChart