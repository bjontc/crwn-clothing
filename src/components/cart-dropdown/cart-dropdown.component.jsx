import { CartDropdownContainer,EmptyMessage,CartItems } from './cart-dropdown.styles';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
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