import React from "react";

import {
  Card,
  CardImage,
  CardDescription,
  CardLink,
  CardAuthor,
  CardName,
} from "./PlaylistCard.style";

import { randomColors } from "../../style/colors";

function PlaylistCard(props: {
  name: string;
  image: string;
  description: string;
  uri: string;
}): React.ReactElement {
  const { name, image, description, uri } = props;
  const randomNumber: number = Math.floor(Math.random() * 10);

  return (
    <Card backgroundColor={randomColors[randomNumber]}>
      <CardImage backgroundImage={image} />
      <CardName>{name}</CardName> <CardAuthor>by Autor</CardAuthor>
      <CardDescription>{description}</CardDescription>
      <CardLink href={uri} target="_blanck" title="Abrir playlist ">
        Abrir
      </CardLink>
    </Card>
  );
}

export default PlaylistCard;
