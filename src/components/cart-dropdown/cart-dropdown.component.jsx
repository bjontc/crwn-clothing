import { CartDropdownContainer,EmptyMessage,CartItems } from './cart-dropdown.styles';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../contexts/cart.context';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    };

    return(
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)) 
                : (<EmptyMessage> Your cart is empty</EmptyMessage>)
                }
            </CartItems>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={goToCheckoutHandler}>Go to Checkout </Button>
        </CartDropdownContainer>
    )

};

export default CartDropdown;