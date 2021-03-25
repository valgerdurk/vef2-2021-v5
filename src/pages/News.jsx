import React from 'react';
import { useParams } from 'react-router-dom';
import { News } from '../components/news/News';

export function NewsPage() {
    const id = useParams().id;
  return (
    <News category={id}/>
  );
}