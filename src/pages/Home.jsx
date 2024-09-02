import { useState, useEffect } from 'react';
import CardPizza from '../components/CardPizza';

function Home() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/pizzas')
      .then(response => response.json())
      .then(data => setPizzas(data))
      .catch(error => console.error('Error fetching pizzas:', error));
  }, []);

  return (
    <div className="container">
      <h2 className="section-title">Nuestras Pizzas</h2> {/* Aplicando la clase `section-title` */}
      <div className="row">
        {pizzas.map(pizza => (
          <div key={pizza.id} className="col-md-4 mb-4">
            <CardPizza pizza={pizza} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
