import PropTypes from 'prop-types';

function CardPizza({ pizza, incrementQuantity, decrementQuantity }) {
  return (
    <div className="card">
      <img src={pizza.img} alt={pizza.name} />
      <h3>{pizza.name}</h3>
      <p>{pizza.ingredients.join(', ')}</p>
      <p>Precio: ${pizza.price}</p>
      <div className="btn-group">
        <button onClick={() => incrementQuantity(pizza.id)}>+</button>
        <button onClick={() => decrementQuantity(pizza.id)}>-</button>
      </div>
    </div>
  );
}

CardPizza.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  incrementQuantity: PropTypes.func.isRequired,
  decrementQuantity: PropTypes.func.isRequired,
};

export default CardPizza;
