import React, { useState, useEffect } from 'react';

// eslint-disable-next-line no-unused-vars
const dummy = React;

function Pizza() {
  const [pizza, setPizza] = useState(null);
  const pizzaId = 'p001'; // ID fijo por ahora

  useEffect(() => {
    // Realiza la petición GET a la API para obtener la información de la pizza por ID
    fetch(`http://localhost:5000/api/pizzas/${pizzaId}`)
      .then(response => response.json())
      .then(data => setPizza(data))
      .catch(error => console.error('Error fetching pizza:', error));
  }, [pizzaId]);

  // Maneja el caso en que los datos aún no se han cargado
  if (!pizza) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="pizza-details">
      <h2>{pizza.name}</h2>
      <img src={pizza.img} alt={pizza.name} width="300" />
      <p>Precio: ${pizza.price.toLocaleString()}</p>
      <p>Ingredientes:</p>
      <ul>
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p>{pizza.description}</p>
      <button className="btn btn-primary">Añadir al Carrito</button>
    </div>
  );
}

export default Pizza;
