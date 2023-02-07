import React from 'react';
import useFetch from '../customHooks/useFetch';
import { Link } from 'react-router-dom';

const ComingSoon = () => {
  const [comingSoon, setComingSoon] = React.useState(null);
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const { json } = await request(
        'https://renanlucenadeveloper.github.io/Lucyna-API/coming-soon-min.json',
      );
      setComingSoon(await json);
    }
    fetchData();
  }, [request]);

  if (loading) return <div className="loading"></div>;
  if (data)
    return (
      <div>
        <div>
          <div>
            <h2>Coming Soon</h2>
          </div>
          <div>
            {comingSoon.map((element) => {
              return (
                <Link to={`${element.name}`} key={element.name}>
                  <img src={element.thumbnail} alt={element.title + ' image'} />
                  <div>
                    <h3>{element.title}</h3>
                    <p>Soon</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  if (error) return <p>An error ocurred</p>;
};

export default ComingSoon;
