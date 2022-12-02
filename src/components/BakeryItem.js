import "./BakeryItem.css"


function BakeryItem(props){
    
    return(<div>
        
        <div className={props.cartItems.includes(props.item) ? "BakeryItem InCart" : "BakeryItem"} key={props.item.id}>
            <img src={props.item.image} />
            <h1>{props.item.name}</h1>
            <p>Type: {props.item.type}</p>
            <p>Dietary Restrictions: {props.item.diet}</p>
            <p>{props.item.description} </p>
            <p>Price:{props.item.price} </p>
            <button className="btn" onClick={()=> { props.addToCart(props.item)}} >{props.cartItems.includes(props.item) ? "Remove from Favorites" : "Add to Favorites"}</button>
        </div>

    </div>)
}

export default BakeryItem;