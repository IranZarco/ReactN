import React, { useEffect, useState } from 'react';
import moment from 'moment';

const Horascreen: React.FC = () => {
  const [horaActual, setHoraActual] = useState<string>('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = moment();
      const formattedHoraActual = now.format('HH:mm:ss');
      setHoraActual(formattedHoraActual);
    }, 1000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>{horaActual}</p>
    </div>
  );
};

export default Horascreen;
