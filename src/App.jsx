import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/index.css'
import Image from '../src/components/Image.jsx'
import SideBar from './components/SideBar.jsx'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function App() {
  const cardData = [
    { title:"flower1",   price:"29.99", id:1 , category:"flower" },
    { title:"flower2",  price:"12.70", id:2 , category:"flower" },
    { title:"flower3",           price:"40.99", id:3 , category:"flower" },
    { title:"flower4",   price:"55", id:4 , category:"flower" },
    { title:"kerzen1",    price:"39", id:5, category:"kerzen" },
    { title:"kerzen2",  price:"39.99", id:6 , category:"kerzen"},
    { title:"kerzen3",    price:"25.16", id:7 , category:"kerzen"},
    { title:"kerzen4",  price:"50.70", id:8 ,category:"kerzen"},
    { title:"bilder1",    price:"70.00", id:9 ,category:"bilder"},
    { title:"bilder2",          price:"40", id:10 , category:"bilder"},
    { title:"vasen1",   price:"45", id:11 , category:"vasen"},
    { title:"vasen2",    price:"23.69", id:12 , category:"vasen" }
  ]

  const [selectedCategory, setSelectedCategory] = useState(cardData);

  const handleCategorySelect = (category) => {
    if (category === "All") {
      setSelectedCategory(cardData);
    } else {
      const filteredData = cardData.filter((item) => item.category === category);
      setSelectedCategory(filteredData);
    }
  };
  

  return (
    <>
      <h1>Category Shop</h1>
      <main>
        <div className='container-box'>
        <SideBar onCategorySelect={handleCategorySelect}/> 
        {/* onCategorySelect here is a function passed as a prop to the SideBar component. */}
        <Container>
          <Row>
            {selectedCategory.map((item, i) => <Image key={i} {...item}/>)}
          
          </Row>
        </Container>
        
        </div>
      </main>
      
    </>
  )
}

export default App
