import React from 'react';
import marketplaceSVG from '../img/marketplace.svg';
import { UserContext } from './context/UserContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const userItemsJSON = React.useContext(UserContext);
  const gamesInCart = JSON.parse(userItemsJSON.gamesInCart);
  const gamesInLibrary = JSON.parse(userItemsJSON.gamesInLibrary);
  const total = JSON.parse(userItemsJSON.total);
  const backToStore = useNavigate();

  const buttonBuyNow = React.useRef();

  function handleBuyNow(event) {
    let libraryGames = [];
    if (Object.keys(gamesInLibrary).length > 0) {
      gamesInLibrary.forEach((element) => {
        libraryGames.push(element);
      });
    }
    if (Object.keys(gamesInCart).length > 0) {
      gamesInCart.forEach((game) => {
        libraryGames.push(game);
      });
    }
    userItemsJSON.setGamesInLibrary(JSON.stringify(libraryGames));
    userItemsJSON.setGamesInCart(JSON.stringify([]));
    userItemsJSON.setTotal(JSON.stringify('00.00'));
    setTimeout(() => {
      backToStore('/store');
    }, 800);
  }

  return (
    <>
      <h2>Cart</h2>
      <section className="games-container-cart">
        {Object.keys(gamesInCart).length > 0 &&
          gamesInCart.map((game) => {
            return (
              <div key={game[0]} className="game-card">
                <h3 className="name">{game[1]}</h3>
                <p className="price-library">$ {game[2]}</p>
              </div>
            );
          })}
      </section>
      {Object.keys(gamesInCart).length > 0 && (
        <section>
          <div className="total">
            <h3 className="name">Total</h3>
            <p className="price-library">$ {total}</p>
          </div>
          <button
            ref={buttonBuyNow}
            onClick={() => {
              handleBuyNow();
            }}
            id="button-buy-now-cart"
          >
            <img src={marketplaceSVG} alt="Buy Now SVG" />
            Buy Now
          </button>
        </section>
      )}
    </>
  );
};

export default Cart;
