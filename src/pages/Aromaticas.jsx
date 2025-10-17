import { useEffect, useState } from 'react';
import { getAromaticas } from '../api';

export default function Aromaticas() {
  const [aromaticas, setAromaticas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAromaticas().then(data => {
      setAromaticas(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Cargando aromáticas...</p>;
  return (
    <div>
      <h1>Aromáticas</h1>
      <ul>
        {aromaticas.length === 0 && <li>No hay aromáticas.</li>}
        {aromaticas.map(a => (
          <li key={a.objectId}>{a.nombre} - {a.descripcion}</li>
        ))}
      </ul>
    </div>
  );
}
