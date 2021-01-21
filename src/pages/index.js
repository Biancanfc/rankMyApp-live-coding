import React, { useState } from 'react';
import useEffectAsync from '../useEffectAsync';
import api from '../app/api';
import Character from '../components/character';

export default function Home() {
  const [characters, setCharacters] = useState([]);

  useEffectAsync(async () => {
    const { data } = await api.get(`character`);
    setCharacters(data.results);
  }, []);

  return (
    <ul className='list'>
      {characters.map((item) => (
        <li>
          <Character {...item} />
        </li>
      ))}
    </ul>
  );
}
