import React from 'react';

const Dropdown = (Props) =>{
    const label =['First' ,'Last','Game','Country','Date Created','Date Updated','Rating','Total','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    
    return(
        <div>
      <label>
        {Props.label}
        <select  onChange={Props.onChange} >
            {label.map( x => {return <option key={x} value={x}>{x}</option>})}
        </select>
      </label>
    </div>
    )
}
export default Dropdown