import React, { useState } from 'react'
import ItemList from './ItemList'
import ItemTotal from './ItemTotal'



const ItemComponent = ({arr}) => {

    const [items, setItems] = useState(arr)

    const [total, setTotal] = useState(0)

    const changeItem = (pno, amount) => {
        console.log("changeItem.......",pno,amount);
        const target = items.filter(item => item.pno === pno)[0]
        target.amount =  parseInt(amount)   
        setItems(items)
        
        let sum = 0;
        items.forEach(item => sum += item.amount * item.price)
        setTotal(sum)
    }



    return (
        <div>
            <h1>Item Component</h1>
            <hr></hr>
            <ItemList arr={items} changeItem={changeItem}></ItemList>
            <hr></hr>
            <ItemTotal total={total}></ItemTotal>
        </div>
    )
}
export default ItemComponent