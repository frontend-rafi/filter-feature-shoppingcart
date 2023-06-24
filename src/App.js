
import { useState } from 'react';
import './App.css';
import Nav from './components/navigation/Nav';
import Products from './product/Product'
import Recommended from './Recommended/Recommended'
import Sidebar from './sidebar/Sidebar';

import Card from './components/Card';
import {data} from './db';
function App() {

const [selectedCategory,setSelectedCategory] = useState(null)

//input search function
const [query, setQuery] = useState("");

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };
  //filtered item for search function
const filtereditems = data.filter((item)=>(
  item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
));

// filter for radio 
const handleRadioChange=(e)=>{
setSelectedCategory(e.target.value)
}
// buttons filter
const handleButtonChange=(e)=>{
  setSelectedCategory(e.target.value)
  }

  const filteredData=(query,data,selectedCategory)=>{
    let filteredProducts = data;


    // filtering input items
    if(query){
      filteredProducts = filtereditems;
      console.log(filtereditems);
    }
    // selected filter
if(selectedCategory){
  filteredProducts=filteredProducts.filter(({ category, color, company, newPrice, title})=>(
category === selectedCategory ||
color === selectedCategory ||
company === selectedCategory ||
newPrice === selectedCategory ||
title === selectedCategory
))
}

return filteredProducts.map(
  ({ img, title, star, reviews, prevPrice, newPrice }) => (
    <Card
      key={Math.random()}
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      prevPrice={prevPrice}
      newPrice={newPrice}
    />
  )
)

  }
const result=filteredData(query,data,selectedCategory)

return (
    <div className="App">
      <Sidebar handleRadioChange={handleRadioChange}/>
      <Nav handleSearchChange={handleSearchChange}/>
      <Recommended handleButtonChange={handleButtonChange}/>
      <Products result={result}/>

    </div> 
  );
}

export default App;
