import Form from 'react-bootstrap/Form';

const Radio = (Props) => {
  return (
    <Form>
      
        {Props.arr.map(x => <div key={Props.rkey} className="mb-3">
          <Form.Check 
            type={'radio'}
            id={x}
            label={x}
            onClick={Props.click}
          />
        </div>)
        }
    </Form>
  );
}

export default Radio;