import React from 'react';
import { useLayoutEffect } from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg, CardSubtitle, CardGroup, Button } from 'reactstrap';

const CardGroupExample = () => {
  return (
<Card className="my-2">
    
    <CardImg
      alt="Card image cap"
      src="https://www.palco23.com/thumb/eyJ0IjoiZCIsInciOjEyMDAsImgiOjY3NSwibSI6MSwidiI6IjEuMS43MSJ9/files/2021/17_clubes/manchester-city/manchester-etihad-980.png"
      style={{
        height: 370
      }}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Conoce nuestro Stadium y todas sus instalaciones
      </CardTitle>
      <CardText>
        Unete a los miembros VIP de los Sky Blues y disfruta de los partidos en nuestro estadio, y de todas las instalaciones que tenemos para ti. Concursa por entradas gratis y mucho mas.
      </CardText>
    </CardBody>
    
  </Card>
  );
};

export default CardGroupExample;