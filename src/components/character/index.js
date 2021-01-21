import React from 'react';
import {
  Card,
  Image,
  Label,
  SectionInfo,
  Subtitle,
  Title,
  Text,
  Circle,
} from './style';

export default function Character({
  id,
  name,
  species,
  origin,
  location,
  status,
  image,
}) {
  return (
    <Card>
      <Image src={image} />
      <SectionInfo>
        <Title>{name}</Title>
        <Subtitle>
          <Circle status={status} />
          {status} - {species}
        </Subtitle>
        <Label>Last known location:</Label>
        <Text>{location.name}</Text>
        <Label>First seen in:</Label>
        <Text>{origin.name}</Text>
      </SectionInfo>
    </Card>
  );
}
