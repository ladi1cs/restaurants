import Data from  './data/data';
import {useState, useEffect} from 'react';
import {Label, Container, TitleBar, TitleButton, Button, TextBox, ToolBar} from './styles/styles';
import RestaurantView from './components/RestaurantView';
import RestaurantGrid from './components/RestaurantGrid';
import PriceRangeSet from './components/PriceRangeSet';

import {isValidArray} from './utils/utils';

const data = new Data();
const defaultRangeState = [false, false, false];

function App() {
  const [listFeatured, setListFeatured] = useState(data.featuredList);
  const [listAll, setListAll] = useState(data.restaurantList);
  const [listFiltered, setListFiltered] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [restRanges, setRestRanges] = useState(defaultRangeState);
  const [selected, setSelected] = useState(null);


  const onRangeUpdate = (index, checked) => {
    const newSet = [...restRanges];

    newSet[index] = checked;
        
    setRestRanges(newSet);
  }

  const onReset = () =>{
    setListFiltered([]);
    setSearchText('');
    setRestRanges(defaultRangeState);
  } 

  const renderGrid = (title,list) => {
    if(selected){
      return null;
    }
    return (<RestaurantGrid title={title} list={list} onCardClick={(data) => setSelected(data)}/>);
  }

  useEffect(()=>{
    const list = data.getFiltered(searchText,restRanges);
    setListFiltered(list);
  }, [searchText, restRanges]);

  return (
    <Container>
      <TitleBar>
        <Label >Feed Me</Label>
        <TitleButton onClick={()=> setSelected(null)}>Restaurants</TitleButton>
        <TitleButton>Suprise Me</TitleButton>
      </TitleBar>
      { !selected && <ToolBar>
        <Label>Search:</Label>
        <TextBox type='text' value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
        <PriceRangeSet onChangeSet={onRangeUpdate} checked={restRanges}/>
        <Button onClick={()=> onReset()}>Clear</Button>
      </ToolBar>}
      {!isValidArray(listFiltered) && renderGrid('Featured', listFeatured)}
      {!isValidArray(listFiltered) && renderGrid('All Restaurants', listAll)}
      {isValidArray(listFiltered) && renderGrid('Filtered', listFiltered)}
      {selected && <RestaurantView {...selected}/>}
    </Container>
  );
}

export default App;
