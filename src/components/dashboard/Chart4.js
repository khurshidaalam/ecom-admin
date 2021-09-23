import React, { PureComponent } from 'react';
import { AreaChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area } from 'recharts';
import { format, parseISO, subDays } from "date-fns";

const data = [];

for (let num = 10; num >= 0; num--){
  data.push({
    Date: subDays(new Date(), num).toISOString().substr(0,10),
    value: 1 + Math.random(),
  })
}



export default function Chart4 () {

  
  return(
      <ResponsiveContainer width="100%" height={100}>
      <AreaChart data={data}
      margin={{
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
      >
      <Area dataKey="value" stroke="#192a56" fill="#7f8fa6"/>
      {
    //     <XAxis 
    //   dataKey="date" 
    //   className=" d-none" 
    //   axisLine="false" 
    //   tickLine="false" 
    //   tickCount={10}
    //   tickFormatter={str => {const date = parseISO(str);
    //   if (date.getDate() % 7 === 0){
    //     return format(date, "MMM,d");
    //   }
    //   return "";
    // }}
    //   />
      
      //   <YAxis 
      // datakey="value" 
      // className="none" 
      // axisLine="false" 
      // tickLine="false" 
      // tickCount={10}
      // tickFormatter={(number) => `$${number.toFixed(2)}`}
      // />
    }
      <Tooltip content={<CustomTooltip/>}/>
      </AreaChart>
      </ResponsiveContainer>
    );
  }


  function CustomTooltip  ({active, payload ,label})  {
    if (active) {
      return(
        <div className=" bg-gray-700 text-white p-1 rounded-sm shadow-sm text-xs text-center">
      {//<h4>{format(parseISO(label),"eeee, d MMM, yyyy")}</h4>
      }
      <p>${payload[0].value.toFixed(2)}</p>
      </div>
      );
      
    }
    return null;
  }
