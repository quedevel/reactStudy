import React, {useState} from 'react'
import ItemList from './ItemList'
import ItemTotal from './ItemTotal'

const ItemComponent = () => {



    return(
        <div>
            <h1>Item Component</h1>
            <ItemList></ItemList>
            <hr></hr>
            <ItemTotal></ItemTotal>
        </div>
    )
}
export default ItemComponent