import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className="badge badge-pill badge-danger">4</span>
    </div>
  );
};