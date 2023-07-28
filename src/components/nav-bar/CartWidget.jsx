import { useState, useEffect } from 'react';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import Button from '@mui/material/Button';
import "./index.css"

function CartWidget() {
    const [number, setNumber] = useState(0)
    useEffect(() => {

    }, [])

    function counter1() {
        setNumber(number + 1)
    }
    function counter2() {
        if (setNumber > 0) {
            setNumber(number - 1)
        } else {
            return number
        }

    }
    return (
        <div style={{ position: "relative" }} className='cart-wrapper'>
            <Button variant="dark">
                <ShoppingCartSharpIcon style={{ marginRight: 5 }} />
                <span style={{ position: "absolute", left: 14, right: 14, backgroundColor: "white", width: 14, height: 14, borderRadius: 7, textAlign: "center", fontSize: 12, fontWeight: 400 }}>{number}</span>
                <span>Cart</span>
            </Button>
        </div>
    );
};

export default CartWidget;
