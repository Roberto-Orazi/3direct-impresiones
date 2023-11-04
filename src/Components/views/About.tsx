import React from 'react';
import Apolo from '../../assets/images/apolo.png'
import Magna from '../../assets/images/magna500.png'
import Nebula from '../../assets/images/nebula.png'
export const About = () => {

  const printers = [
    {
      name: 'Hellbot Apolo Pro',
      description: 'Esta es nuestra impresora de resina, tiene un volumen maximo de impresion',
      imageUrl: Apolo,
    },
    {
      name: 'Hellbot magna II 500',
      description: 'Gracias a esta impresora podemos ofrecerles impresiones de hasta 50 centimetros cubicos',
      imageUrl: Magna,
    },
    {
      name: 'Trimaker nebula cloud',
      description: 'Esta maquian es la que usamos en ',
      imageUrl: Nebula,
    },

  ];

  const services = [
    'Prototipado',
    'Diseño 2D',
    'Diseño 3D',
    'Impresiones FDM',
    'Impresiones DLP',
  ];

  return (
    <section className="about-us">
      <div className="printers">
        <h2>Nuestras Impresoras 3D</h2>
        <ul>
          {printers.map((printer, index) => (
            <li key={index}>
              <strong>{printer.name}</strong>: {printer.description}
              <br />
              <img src={printer.imageUrl} width={500} height={400} alt={printer.name} />
            </li>
          ))}
        </ul>
      </div>
      <div className="services">
        <h2>Nuestros Servicios</h2>
        <ul>
          {services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};