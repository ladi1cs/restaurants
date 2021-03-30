import {Label, Row, Frame, Button} from '../styles/styles';

import RestaurantCard from './RestaurantCard';
import MenuItem from './MenuItem';

export default(props) => {
    return (
      <Row style={{paddingTop: 50, paddingLeft: 70}}>
        <div>
          <Label>Menu</Label>
          <Frame>
            {props.menu.map(m => (<MenuItem name={m.name} price={m.price}/>))}
          </Frame>
          <Row><Label float='right'>Total</Label></Row>
          <Row style={{float: 'right'}}><Button>Order Now</Button></Row>
        </div>
        <RestaurantCard 
            name={props.name} 
            range={props.priceRange} 
            image={props.imageSmallUrl} 
            description={props.description}/>
      </Row>
       
    );
}