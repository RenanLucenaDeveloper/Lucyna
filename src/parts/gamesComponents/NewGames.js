import React from 'react';
import useFetch from '../customHooks/useFetch';
import { Link } from 'react-router-dom';

const NewGames = () => {
  const [newGames, setNewGames] = React.useState(null);
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const { json } = await request(
        'https://renanlucenadeveloper.github.io/Lucyna-API/new-games.json',
      );
      setNewGames(await json);
    }
    fetchData();
  }, [request]);

  if (loading) return <div className="loading"></div>;
  if (data)
    return (
      <div className="games-container">
        {newGames.map((element) => {
          return (
            <Link key={element.id} to={`${element.name}`}>
              <div>
                <img src={element.thumbnail} alt={element.title + ' image'} />
                <div className="linear-filter"></div>
                <h3>{element.title}</h3>
                <p>Free</p>
              </div>
            </Link>
          );
        })}
      </div>
    );
  if (error) return <p>An error ocurred</p>;
};

export default NewGames;
