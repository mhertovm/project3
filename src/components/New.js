
function New () {
    const art = [
        {
            img: "photo/1.jpg",
            name: "Art 1",
            price : "1 մլն ֏",
        },
        {
            img: "photo/2.jpg",
            name: "Art 2",
            price : "1 մլն ֏",
        },
        {
            img: "photo/3.jpg",
            name: "Art 3",
            price : "1 մլն ֏",
        },
    ]
    return(
        <>
        {
            art.map((value, index)=>(
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


export default New;