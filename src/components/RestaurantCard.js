import {Label} from '../styles/styles';
import { gradeToText } from '../utils/utils';

export default(props) => {
    return (
        <div style={{padding: 20 }}>
            <div>
                <Label float='left'>{props.name}</Label>
                <Label float='right'>{gradeToText(props.range+1)}</Label>
            </div>
            <div style={{padding: 10}}>
                <img  style={{width: 400}} src={props.image}/>
            </div>
            <Label float='left'>{props.description}</Label>
        </div>
    );
  }