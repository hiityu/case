import React from 'react';
import Form from 'react-bootstrap/Form';


const Dropdown = (Props) =>{
      
    return(
        <div className={Props.class}>
      <label>
        {Props.label}
        </label>
        <Form.Select aria-label="" onChange={Props.onChange}>
      {Props.arr.map( x => {return <option key={x} value={x}>{x}</option>})}

    </Form.Select>

    </div>
    )
}
export default Dropdown