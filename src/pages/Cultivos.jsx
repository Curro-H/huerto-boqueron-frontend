import { useEffect, useState } from 'react';
import Parse from '../parseConfig';

export default function Cultivos() {
  const [cultivos, setCultivos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCultivos = async () => {
      const Cultivo = Parse.Object.extend('Cultivo');
      const query = new Parse.Query(Cultivo);
      const results = await query.find();
      setCultivos(results);
      setLoading(false);
    };
    fetchCultivos();
  }, []);

  if (loading) return <p>Cargando cultivos...</p>;

  return (
    <div>
      <h1>Cultivos</h1>
      <ul>
        {cultivos.length === 0 && <li>No hay cultivos aún.</li>}
        {cultivos.map(cultivo => (
          <li key={cultivo.id}>{cultivo.get('nombre')}</li>
        ))}
      </ul>
    </div>
  );
}

