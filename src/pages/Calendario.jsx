import { useEffect, useState } from 'react';
import { getCalendario } from '../api';

const ordenMeses = [
  'Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'
];

export default function Calendario() {
  const [meses, setMeses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCalendario().then(data => {
      data.sort((a, b) => ordenMeses.indexOf(a.mes) - ordenMeses.indexOf(b.mes));
      setMeses(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Cargando calendario...</p>;

  return (
    <div>
      <h1>Calendario del Huerto</h1>
      {meses.map(mes => (
        <div key={mes.objectId} style={{border: '1px solid #ccc', borderRadius: 8, margin: '18px 0', padding: 16}}>
          <h2>{mes.mes}</h2>
          <p><b>Preparación:</b> {mes.preparacion}</p>
          <p><b>Siembra:</b> {mes.siembra?.join(', ') || '-'}</p>
          <p><b>Trasplante:</b> {mes.trasplante?.join(', ') || '-'}</p>
          <p><b>Cosecha:</b> {mes.cosecha?.join(', ') || '-'}</p>
          <p><b>Tareas:</b> {mes.tareas}</p>
        </div>
      ))}
    </div>
  );
}
