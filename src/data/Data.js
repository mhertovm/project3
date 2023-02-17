
const Data = [
    {
        id: 0,
        img: "img/images(1).jpg",
        name: "shoes 1",
        price : "1 մլն ֏",
        info: "bla bla bla",
    },
    {
        id: 1,
        img: "img/images(2).jpg",
        name: "shoes 2",
        price : "1 մլն ֏",
        info: "bla bla bla",
    },
    {
        id: 2,
        img: "img/images(3).jpg",
        name: "shoes 3",
        price : "1 մլն ֏",
        info: "bla bla bla",
    },
]

function Box (props) {
    return (
        <button key={props.key}>
            <li><img src={props.img}/></li>
            <li>{props.name}</li>
            <li>{props.price}</li>
        </button>
    )
}

export {Data, Box}
