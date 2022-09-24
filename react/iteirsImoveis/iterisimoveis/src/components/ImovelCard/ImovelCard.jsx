import React from 'react';
import { Card, CardContent, CardMedia, CardActionArea, Typography } from '@material-ui/core';
import './ImovelCard.css'

function ImovelCard(props) {

  let formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const valorFormatado = formatter.format(props.imovel.price);

  return (
    <Card className="imovelCard">
        <CardActionArea>
            <CardMedia
                component="img"
                image={props.imovel.image}
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.imovel.address}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                    {valorFormatado}
                </Typography>
                <div className="linhaPrincipal">
                    <Typography component="span">{props.imovel.owner}</Typography>
                    <Typography component="h3">{props.imovel.type}</Typography>
                </div>
            </CardContent>
        </CardActionArea>
    </Card>
  );
}

export default ImovelCard;
