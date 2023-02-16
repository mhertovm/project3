import Data from '.././data/Data';

function Home () {
    return(
        <>
        { 
            Data.map((value, index)=>(
                <div key={index}>
                    <img src={value.img}/>
                    <h2>{value.name}</h2>
                    <p>{value.price}</p>
                </div>
            ))
        }
        </>
    )
    }

export default Home;
  