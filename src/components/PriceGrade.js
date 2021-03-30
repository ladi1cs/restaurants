import {Label} from '../styles/styles';
import { gradeToText } from '../utils/utils';

export default(props) => {
    return (
      <div>
        <input type='checkbox' defaultChecked={props.checked || false} onChange={(e)=>{props.onChange && props.onChange(props.grade-1, e.target.checked)}}/>
        <Label>{gradeToText(props.grade)}</Label>
      </div>
    );
}