import React from 'react';
import Quality from '../Home/Qualities/quality';
import Introduction from './Introduction/introduction';
import Content from './Content/content';

export default function About() {
  return (
    <section>
      <Introduction/>
      <Content/>
      <Quality/>
    </section>
  );
}