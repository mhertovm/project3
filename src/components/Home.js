import Box from './Box';
import './Home.css'
import Data from '../data/Data';



function Home (props) {
    const data = Data()
    console.log(data);
    return(
        <div className="home">
            {data.map((value)=><Box id={value.sports_shoes_id} key={value.sports_shoes_id} name={value.name} price={value.price} img={value.img} handleClick={props.handleClick}/>)}
        </div>
    )
}

export default Home;
  