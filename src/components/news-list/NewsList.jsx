import React, { useEffect, useState } from 'react';

import { News } from '../news/News';
import s from './NewsList.module.scss';

const apiUrl = process.env.REACT_APP_API_URL;

export function NewsList() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      let json;
        try {
          const result = await fetch(apiUrl);
          console.log(result);
        
          if(!result.ok) {
            throw new Error('Tókst ekki að sækja gögn');
          }
    
          json = await result.json();
        } catch (e) {
          setError('Gat ekki sótt gögn');
          return;
        } finally {
          setLoading(false);
        }

        setData(json); 
      }
      fetchData();
  }, []);

  if (error) {
    return (
      <p>Villa kom upp: {error}</p>
    );
  }

  if (loading) {
    return (
      <p>Sæki gögn...</p>
    );
  }

  const news = Array.from(data);

  return (
    <div className={s.newslist__row}>
      {news.map((item) => {
        return (
            <div className={s.newslist__col}>
              <News category={item.id} quantity={5} expandable={true} />
            </div>
          );
      })}
    </div>
  );
}
