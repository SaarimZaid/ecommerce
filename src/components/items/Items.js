import { useContext, useState } from "react"
import { CartContext } from "../../context/cart-context"
import './item.css'

const Items = ({item}) => {
    const [cart, setCart] = useState(false)
    const {addData, removeData} = useContext(CartContext)
    return (<>
        <section className="card">
            <div className="card-header">
                <img className="card-image" style={{width:'230px'}} src={`http://localhost:1337${item?.image?.data?.attributes?.url}`} alt="game"/>
                <div className="title-discription">
                    <article className="card-title" style={{marginBottom:'10px'}}><b>Title-</b>{item.title}</article>
                    <article className="card-description"><b>Despription-</b>{item.description}</article>
                </div>  
                <section className="card-footer">
                        <article className="price"><b>Price Rs </b>{item.price}/-</article>
                        {!cart ? <button className="card-button" onClick={()=>{
                            addData(item)
                            setCart(true)
                        }}>Add to Cart</button>
                        : <button className="card-button" onClick={()=>{
                            removeData(item)
                            setCart(false)
                        }}>Remove from cart</button>} 
                    </section>
            </div>
        </section>
    </>)
}

export default Items