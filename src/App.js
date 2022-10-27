import './App.css';
import React ,{useState} from 'react'
import data from './components/data'
import Categories from './components/categories';

const allCaterories = ['all',...new Set(data.map((item) => item.category))]
 console.log(allCaterories);
function App() {

  const [menu,setMenu] = useState(data);

  const fillterItems = (category) => {
    if(category === 'all') {
      setMenu(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category)
     setMenu(newItems);
  };
 
 
  return (
    <div className="main">
      <Categories fillterItems = {fillterItems}/>
      <section className='menu'>
       {menu.map((menuItem) => {
        const {id,title,price,img,desc} = menuItem;
        
        return(
          <div key={id} className="menu-item">
            <img  className='img' src={img}/>
            <header className='info'>
             <h3 className='title'>{title}</h3>
             <h3 className='price'>${price}</h3>
            
            </header>
            <div className='clear'></div>
             <p className='desc'>{desc}</p>
             
          </div>
        )
       })}
      </section>
    </div>
  );
}

export default App;
