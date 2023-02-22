import Data from '../data/Data';
import Box from './Box';
import './Home.css'



function Home (props) {
    return(
        <div className="home">
            {Data.map((value)=><Box id={value.id} key={value.id} name={value.name} price={value.price} img={value.img} handleClick={props.handleClick}/>)}
        </div>
    )
}

export default Home;
  