import {Data, Box} from '../data/Data';

function Home () {
    return(
        <div>
            {Data.map((value)=><Box key={value.id} name={value.name} price={value.price} img={value.img}/>)}
        </div>
    )
}

export default Home;
  