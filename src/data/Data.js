import {Link} from 'react-router-dom';

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
        <div>
        <Link to={props.key}>
            <><img src={props.img}/></>
            <p>{props.name}</p>
            <p>{props.price}</p>
        </Link>
        </div>
    )
}

export {Data, Box}
