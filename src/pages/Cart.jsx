import PropTypes from 'prop-types';

function Cart({ cart, incrementQuantity, decrementQuantity }) {
  // Función para calcular el total de la compra
  const calculateTotal = () => {
    return cart.reduce((total, pizza) => total + pizza.price * pizza.quantity, 0);
  };

  return (
    <div className="cart">
      <h2>Tu Carrito</h2>
      <ul>
        {cart.map((pizza) => (
          <li key={pizza.id}>
            <img src={pizza.img} alt={pizza.name} width="50" />
            <span>{pizza.name} - ${pizza.price.toLocaleString()}</span>
            <span> x {pizza.quantity}</span>
            <div>
              <button onClick={() => incrementQuantity(pizza.id)}>+</button>
              <button onClick={() => decrementQuantity(pizza.id)}>-</button>
            </div>
          </li>
        ))}
      </ul>
      <h3>Total: ${calculateTotal().toLocaleString()}</h3>
      <button className="btn btn-primary">Pagar</button>
    </div>
  );
}

// Define las PropTypes para validar las props que se pasan al componente
Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
      img: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  incrementQuantity: PropTypes.func.isRequired,
  decrementQuantity: PropTypes.func.isRequired,
};

export default Cart;
