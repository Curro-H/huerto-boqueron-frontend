import { useEffect, useState } from 'react';
import { getCultivos } from '../api';

export default function Cultivos() {
  const [cultivos, setCultivos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCultivos().then(data => {
      setCultivos(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Cargando cultivos...</p>;
  return (
    <div>
      <h1>Cultivos</h1>
      <ul>
        {cultivos.length === 0 && <li>No hay cultivos.</li>}
        {cultivos.map(c => (
          <li key={c.objectId}>{c.nombre}</li>
        ))}
      </ul>
    </div>
  );
}
