import {Label, Row} from '../styles/styles';
import PriceGrade from './PriceGrade';

export default(props) => {
    return (
      <Row>
        <Label>Price Range:</Label>
        <PriceGrade grade={1} checked={props.checked[0]} onChange={props.onChangeSet}/>      
        <PriceGrade grade={2} checked={props.checked[1]} onChange={props.onChangeSet}/> 
        <PriceGrade grade={3} checked={props.checked[2]} onChange={props.onChangeSet}/>      
      </Row>
    );
}