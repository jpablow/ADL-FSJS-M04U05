import { useState, useEffect } from 'react';

function DatosFeriados() {
  const [bdFeriados, setBdFeriados] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const url = 'https://api.victorsanmartin.com/feriados/en.json';
    const resp = await fetch(url);
    const data = await resp.json();
    setBdFeriados(data.data);
  };
  return (
    <ol>
      {bdFeriados.map((feriado, i) => (
        <>
          <li key={i}>{feriado.title}</li>
          <ul>
            <li>Fecha: {feriado.date}</li>
            <li>Tipo: {feriado.extra}</li>
          </ul>
          <br></br>
        </>
      ))}
    </ol>
  );
}
export default DatosFeriados;
