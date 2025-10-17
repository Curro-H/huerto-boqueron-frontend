import { useEffect, useState } from 'react';
import Parse from '../parseConfig';

// Orden MES ESPAÑOL
const ordenMeses = [
  'Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'
];

export default function Calendario() {
  const [meses, setMeses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCalendario = async () => {
      const Calendario = Parse.Object.extend('CalendarioHuerto');
      const query = new Parse.Query(Calendario);
      query.limit(100);
      const results = await query.find();
      // Orden mesi
      results.sort((a, b) => ordenMeses.indexOf(a.get('mes')) - ordenMeses.indexOf(b.get('mes')));
      setMeses(results);
      setLoading(false);
    };
    fetchCalendario();
  }, []);

  if (loading) return <p>Cargando calendario...</p>;

  return (
    <div>
      <h1>Calendario del Huerto</h1>
      {meses.map(mes => (
        <div key={mes.id} style={{border: '1px solid #ccc', borderRadius: 8, margin: '18px 0', padding: 16}}>
          <h2>{mes.get('mes')}</h2>
          <p><b>Preparación:</b> {mes.get('preparacion')}</p>
          <p><b>Siembra:</b> {mes.get('siembra')?.join(', ') || '-'}</p>
          <p><b>Trasplante:</b> {mes.get('trasplante')?.join(', ') || '-'}</p>
          <p><b>Cosecha:</b> {mes.get('cosecha')?.join(', ') || '-'}</p>
          <p><b>Tareas:</b> {mes.get('tareas')}</p>
        </div>
      ))}
    </div>
  );
}

