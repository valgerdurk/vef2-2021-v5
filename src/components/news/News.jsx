import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

import { NotFound } from '../../pages/NotFound';

const apiUrl = process.env.REACT_APP_API_URL;

News.propTypes = {
  category: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  expandable: PropTypes.bool,
}

export function News({ category, quantity, expandable }) {
    const routes = {
      "Allar fréttir": "allar",
      Innlent: "innlent",
      "Erlendar fréttir": "erlent",
      Íþróttir: "ithrottir",
      Menning: "menning",
    };

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(false);

    useEffect(() => {
      async function fetchData() {
        setLoading(true);
        setError(null);

        let json;

        try {
          const result = await fetch(`${apiUrl}${category}`);

          if (!result.ok) {
            if(result.status === 404) {
              setError('404');
              return;
            }
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
    }, [category]);

    if (error) {
      if (error === '404') {
        return (
          <NotFound></NotFound>
        );
      } else {
        return (
          <p>Villa kom upp: {error}</p>
        );
      }
    }

    if (loading) {
      return (
        <p>Sæki gögn...</p>
      );
    }

    if (data) {
      const nextPath = expandable ? `/${routes[data.title]}` : "/";
      let headlines = data.items;
      console.log(headlines);

      if (quantity) {
        headlines = headlines.slice(0, quantity);
      }

      return (
        <div>
          <h2>{data.title}</h2>
          <div>
            {headlines.map((item) => {
              return (
                <p><a href={item.link}>{item.title}</a></p>
              )
            })}
          </div>
          <Link to={{ pathname: nextPath, }}>
            {expandable ? "Allar fréttir" : "Til baka"}
          </Link>
        </div>
      );
    }

    return (
      <div>
        <h2>Villa kom upp</h2>
      </div>
    );
  }