import { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

function Acordion() {
  const [open, setOpen] = useState('');

  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <Accordion flush open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Origenes</AccordionHeader>
          <AccordionBody accordionId="1">
            <p>
              El club nacio en 1880 como St Mark&apos;s en West Gorton, Manchester.
              El objetivo inicial era social y comunitario.
            </p>
            <p>
              En sus primeros anos, el equipo jugo en campos locales y fue creciendo
              hasta consolidarse como institucion deportiva en la ciudad.
            </p>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">Debut profesional</AccordionHeader>
          <AccordionBody accordionId="2">
            <p>
              A finales del siglo XIX el City entro a la Football League.
              En 1904 gano su primera FA Cup y se convirtio en un referente del
              futbol ingles.
            </p>
            <p>
              En las decadas siguientes alterno etapas de crecimiento con momentos
              de reconstruccion institucional.
            </p>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">La época de oro y años 1970</AccordionHeader>
          <AccordionBody accordionId="3">
            <p>
              Entre finales de los anos 60 y los 70, el club vivio una de sus etapas
              mas destacadas con titulos nacionales e internacionales.
            </p>
            <p>
              Fue un periodo clave para consolidar identidad deportiva y una base
              de aficionados muy fiel.
            </p>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="4">Declive y reconstruccion</AccordionHeader>
          <AccordionBody accordionId="4">
            <p>
              En los anos 80 y 90 hubo descensos y dificultades economicas.
              Aun asi, el equipo consiguio reorganizarse y volver a competir al
              maximo nivel.
            </p>
            <p>
              El paso por Maine Road y luego el traslado al nuevo estadio marcaron
              un cambio estructural importante para el club.
            </p>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="5">Proyecto moderno</AccordionHeader>
          <AccordionBody accordionId="5">
            <p>
              Desde 2008 el City impulso un proyecto deportivo de largo plazo,
              con inversion en plantilla, infraestructura y academia.
            </p>
            <p>
              Los resultados incluyeron titulos de Premier League y una etapa de
              alta competitividad en Europa.
            </p>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="6">Identidad del club</AccordionHeader>
          <AccordionBody accordionId="6">
            <p>
              El escudo actual retoma elementos historicos del club y de la ciudad.
              Tambien destaca el color celeste como senal central de identidad.
            </p>
            <p>
              El Etihad Stadium es la casa moderna del equipo y simboliza su
              evolucion institucional en el siglo XXI.
            </p>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Acordion;