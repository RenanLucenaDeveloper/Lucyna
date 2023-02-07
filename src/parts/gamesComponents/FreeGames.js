import React from 'react';
import useFetch from '../customHooks/useFetch';
import { Link } from 'react-router-dom';

const FreeGames = () => {
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
      <div>
        <div>
          <div id="free-games-title-container">
            <h2>Free Games</h2>
            <Link to="/allfreegames">See All</Link>
          </div>

          {freeGames.map((element, index) => {
            if (index < 4)
              return (
                <div key={element.id}>
                  <Link to={`${element.name}`}>
                    <img
                      src={element.thumbnail}
                      alt={element.title + ' image'}
                    />
                    <div>
                      <h3>{element.title}</h3>
                      <p>Free</p>
                    </div>
                  </Link>
                </div>
              );
            else return undefined;
          })}
        </div>
      </div>
    );
  if (error) return <p>An error ocurred</p>;
};

export default FreeGames;
