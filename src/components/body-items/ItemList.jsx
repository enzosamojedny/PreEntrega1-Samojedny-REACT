import { useEffect, useState } from "react"
import Item from "./Item"
import { Link } from "react-router-dom"

function ItemList({ items }) {
    return (
        <div className="product-container">{items.map((item, index) => {
            <Link to={`/products/${item.id}`} key={index}>
                <Item item={item} />
            </Link>
        })}</div>
        //agrupa varios Item.js, debe ser incluido dentro de ItemListContainer
        //el componente va a recibir una prop items y va a mapear estos items al componente <Item/>
    )
}

export default ItemList