import React from 'react';
import useFetch from '../customHooks/useFetch';
import { Link } from 'react-router-dom';

const Bestsellers = () => {
  const [bestsellers, setBestsellers] = React.useState(null);
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const { json } = await request(
        'https://renanlucenadeveloper.github.io/Lucyna-API/bestsellers.json',
      );
      setBestsellers(await json);
    }
    fetchData();
  }, [request]);

  if (loading) return <div className="loading"></div>;
  if (data)
    return (
      <div className="games-container">
        {bestsellers.map((element) => {
          return (
            <Link key={element.id} to={`${element.name}`}>
              <img src={element.thumbnail} alt={element.title + ' image'} />
              <h3>{element.title}</h3>
              <p>$ {element.price}</p>
            </Link>
          );
        })}
      </div>
    );
  if (error) return <p>An error ocurred</p>;
};

export default Bestsellers;
