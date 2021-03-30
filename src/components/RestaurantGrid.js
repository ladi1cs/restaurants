import {Label, GridContainer, GridItem} from '../styles/styles';
import RestaurantCard from './RestaurantCard';

export default(props) => {
    return (
      <div style={{paddingTop: 150, paddingLeft: 70}}>
        <Label size={30}>{props.title}</Label>
        <GridContainer>
          {props.list.map(r => {
            return( 
              <GridItem onClick={()=>props.onCardClick(r)}>
                <RestaurantCard 
                  name={r.name} 
                  range={r.priceRange} 
                  image={r.imageSmallUrl} 
                  description={r.description}/>
              </GridItem>);
          })}
        </GridContainer>
      </div>
       
    );
}