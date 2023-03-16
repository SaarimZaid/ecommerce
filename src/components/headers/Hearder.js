import { useContext } from 'react'
import { CartContext } from '../../context/cart-context'
import './header.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const {cartData} = useContext(CartContext)
    const navigate = useNavigate()
    let cartLength = cartData.length
    function dataLength(){
        if(cartLength === 0) return 
        return cartLength
    }
    return <>
        <nav className="navbar">
            <section className="logo" onClick={()=>{navigate('/')}}>
                Ecommerce
            </section>
            <section className="cart" onClick={()=>{navigate('/cart')}}>
                Cart<sup style={{color:'white', backgroundColor:'red', borderRadius:'50%'}}>{dataLength()}</sup>
            </section>
        </nav>
    </>
}

export default Header