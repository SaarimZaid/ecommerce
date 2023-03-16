import { useCallback, useContext } from "react"
import { CartContext } from "../../context/cart-context"
import useRazorpay from "react-razorpay"
import Header from "../headers/Hearder"
import './cart.css'

const Cart = () => {
    const {cartData} = useContext(CartContext)
    var total = 0;
    function totalCost(){
        cartData.map((item)=>{
            total += item.price
        })
        return total
    }
    const RazorPay = useRazorpay()
    const razorPayDisplay = useCallback(async(total) => {
        const options={
            key:'rzp_test_8Skp6S1L66aM4E',
            amount:total,
            currency:'INR',
            name:'E commerce clone site',
            description:'paying for my games',
            handler:(res)=>{
                console.log(res)
            },
            prefill:{
             name:'Saarim Zaid',
             email:'saarimzaid@gmail.com',
             contact:'123435'
            },
            notes:{
                address:'Office'
            },
            theme:{
                color:'#3399cc'
            }
        }
        const rzpl = new RazorPay(options);
        rzpl.open()
    })

    return <> <Header />
        <section className="kart">
            <section>
                {cartData.map((item)=>{
                    return (
                        <article>
                            <article><b>{item.title}</b></article>
                            <article>Rs {item.price}/-</article>
                            <button style={{marginBottom:'10px'}}>Remove game</button>
                        </article>
                    )
                })}
            </section>
            <section >
                <article className="details">Billing Details</article>
                <article className="details">Total number of game purchasing 
                    <span style={{color:'red'}}> {cartData.length}
                    </span>
                </article>
                <article className="details">Rs {totalCost()}/-</article>
                <button className="paymentBtn" onClick={()=>{razorPayDisplay(total*100)}}>Proceed to payment</button>
            </section>
        </section>
    </>
}

export default Cart