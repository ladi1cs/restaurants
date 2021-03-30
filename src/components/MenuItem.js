import {Label, Button} from '../styles/styles';
import {useState} from 'react';

export default(props) => {
    const [count, setCount] = useState(0);
    
    const increase = () => {
      const val = count+1;
      setCount(val);
    }
    const decrease = () => {
      const val = count > 0 ? count - 1 : 0;
      setCount(val);
    }

    return (
      <div>
        <Label>{`$${props.price}`}</Label>
        <Label>{props.name}</Label>
        <Button onClick={()=>decrease()}>-</Button>
        <Label>{count}</Label>
        <Button onClick={()=>increase()}>+</Button>
      </div>
    );
}