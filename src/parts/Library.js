import React from 'react';
import Head from './Head';
import { UserContext } from './context/UserContext';
import { Link } from 'react-router-dom';
import emptyLibraryIMG from '../img/empty-library-img.jpg';
import cookieSVG from '../img/cookie.svg';

const Library = () => {
  const userItemsJSON = React.useContext(UserContext);
  const gamesInLibrary = JSON.parse(userItemsJSON.gamesInLibrary);

  return (
    <>
      <Head
        title="Library"
        description="See games that you added to your account"
      />

      <h2>My Games</h2>

      <section>
        {/* Feeded Library container */}
        {Object.keys(gamesInLibrary).length > 0 && (
          <div id="games-container">
            {gamesInLibrary.map((game) => {
              return (
                <Link
                  to={'/store/' + game[0]}
                  key={game[0]}
                  className="game-card"
                >
                  <p id="name">{game[1]}</p>
                  <p id="price-library">$ {game[2]}</p>
                </Link>
              );
            })}
            <button id="button-clear-library">
              <img src={cookieSVG} alt="cookie icon" />
              Clear Library
            </button>
            <p className="advisory">
              This is a fictional project, you didn't bought anything during
              that!
            </p>
          </div>
        )}

        {/* Empty Library container */}
        {Object.keys(gamesInLibrary).length === 0 && (
          <div>
            <div id="empty-card">
              <p>It's kinda empty here</p>
            </div>
            <img
              src={emptyLibraryIMG}
              alt="Ilustration for empty Library"
              id="empty-img"
            />
          </div>
        )}
      </section>
    </>
  );
};

export default Library;
