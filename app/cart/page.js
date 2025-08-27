import { Cute_Font } from "next/font/google"
import { age, name } from "./data.js"
import Hello from "./hello.js"

export default function Cart() {
    let cart = ['Tomatoes', 'Pasta']
    return (
        <div>
            <Hello></Hello>
            <h4 className="title">Cart</h4>
            <CartItem item={cart[0]} />
            <CartItem item={cart[1]} />
            <Banner content='신한카드' />
            <Banner content='현대카드' />
            <Btn color='red' />
            <Btn color='blue' />
        </div>
    )
}

function CartItem(props) {
    return (
        <div className="cart-item">
            <p>{props.item}</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    )
}

function Banner(props) {
    return <h5>{props.content} 할인 행사중</h5>
}

function Btn(props) {
    return <button style={{ background: props.color }}>버튼</button>
}