import React, { useState, useEffect } from 'react';

import { VictoryBar, VictoryChart, VictoryAxis} from 'victory';

const BarChart = (Props) => {
  return ( 
    <VictoryChart
      style={{tickLabels: {fontSize: 3,angle: 45}}}
      width={960}
      height={500}
      domainPadding={30}
      animate={{
        duration: 1000,
        onLoad: { duration: 500 }
      }}
      padding={{ top: 10, bottom: 200, left: 100, right: 20 }}
    >
      <VictoryBar  data={Props.data} x={Props.xaxis} y={Props.yaxis} />
      <VictoryAxis dependentAxis style={{ tickLabels: {fontSize:10}}} />
  <VictoryAxis style={{ tickLabels: {angle :65,fontSize:10, padding: 50}}}/>
    </VictoryChart>
  );
};

export default BarChart