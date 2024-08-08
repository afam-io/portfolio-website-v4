import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';

const arr = [{ title: 'Title1', description: 'Desc1', id: 1 }];
const Grid = () => {
  return (
    <section id='about'>
      <BentoGrid>
        {arr.map((item) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
