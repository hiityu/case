import React, { useState, useEffect } from 'react';

import { VictoryPie, VictoryChart, VictoryAxis} from 'victory';

const PieChart = (Props) => {
  return ( 

      <VictoryPie  data={Props.data} x={Props.xaxis} y={Props.yaxis}  style={{tickLabels: {fontSize: 3,angle: 45},data: { fill: "#c43a31" }}}
      width={1000}
      height={500}
      domainPadding={10}  
      padding={{ top: 75, bottom: 75, left: 25, right: 20 }}/>

  );
};

export default PieChart