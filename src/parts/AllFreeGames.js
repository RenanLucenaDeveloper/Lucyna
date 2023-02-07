import React from 'react';
import useFetch from './customHooks/useFetch';
import { Link } from 'react-router-dom';

const AllFreeGames = () => {
  const [freeGames, setFreeGames] = React.useState(null);
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const { json } = await request(
        'https://renanlucenadeveloper.github.io/Lucyna-API/free-games-min.json',
      );
      setFreeGames(await json);
    }
    fetchData();
  }, [request]);

  if (loading) return <div className="loading"></div>;
  if (data)
    return (
      <>
        <h2>All Free Games</h2>

        <section id="all-free-games-content">
          {freeGames.map((element) => {
            return (
              <div key={element.id}>
                <Link to={`/store/${element.name}`}>
                  <img src={element.thumbnail} alt={element.title + ' image'} />
                  <h3>{element.title}</h3>
                  <p>Free</p>
                </Link>
              </div>
            );
          })}
        </section>
      </>
    );
  if (error) return <p>An error ocurred</p>;
};

export default AllFreeGames;
