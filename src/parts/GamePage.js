import React from 'react';
import Head from './Head';
import { useParams, useNavigate } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import useFetch from './customHooks/useFetch';

import cartSVG from '../img/cart.svg';
import marketplaceSVG from '../img/marketplace.svg';

const GamePage = () => {
  const userItemsJSON = React.useContext(UserContext);

  const gamesInLibrary = JSON.parse(userItemsJSON.gamesInLibrary);
  const gamesInCart = JSON.parse(userItemsJSON.gamesInCart);
  const total = JSON.parse(userItemsJSON.total);

  const buttonCart = React.useRef();
  const buttonBuyNow = React.useRef();
  //console.log(userItemsJSON);

  const params = useParams();
  const redirect = useNavigate();
  const [gameData, setGameData] = React.useState(null);
  const { request, data, loading, error } = useFetch();

  // Makes the Fetch
  React.useEffect(() => {
    async function fetchData() {
      const { json } = await request(
        `https://renanlucenadeveloper.github.io/Lucyna-API/${params.id}.json`,
      );
      setGameData(await json);
    }
    fetchData();
  }, [request, params, gamesInCart.game, gamesInLibrary.game]);

  // Disables the buttons if the game was already bought
  React.useEffect(() => {
    function alreadyHasGame() {
      if (gameData !== null) {
        if (
          gameData.price === 'soon' &&
          buttonCart.current &&
          buttonBuyNow.current
        ) {
          disableButtons.current('Wait For Release');
        }
      }
      if (
        Object.keys(gamesInLibrary).length > 0 ||
        Object.keys(gamesInCart).length > 0
      ) {
        if (gameData !== null) {
          const alreadyHasLibrary = gamesInLibrary.some((game) => {
            return game[0] === params.id;
          });

          const alreadyHasCart = gamesInCart.some((game) => {
            return game[0] === params.id;
          });

          if (buttonCart.current && buttonBuyNow.current) {
            if (alreadyHasLibrary || alreadyHasCart) {
              disableButtons.current('Already in Library');
            }
          }
        }
      }
    }
    alreadyHasGame();
  }, [gamesInCart, gamesInLibrary, params.id, gameData]);

  // Creates a ref to the function that will activate both inside the effect and outside of it
  const disableButtons = React.useRef();
  disableButtons.current = (text) => {
    buttonCart.current.remove();
    buttonBuyNow.current.setAttribute('disabled', '');
    buttonBuyNow.current.innerHTML = text;
  };

  function handleBuyNow() {
    let libraryGames = [];
    if (Object.keys(gamesInLibrary).length > 0) {
      gamesInLibrary.forEach((element) => {
        libraryGames.push(element);
      });
    }
    libraryGames.push([params.id, gameData.title, gameData.price]);
    userItemsJSON.setGamesInLibrary(JSON.stringify(libraryGames));
    setTimeout(() => {
      redirect('/library');
    }, 1000);
  }

  function handleAddToCart() {
    let cartGames = [];
    if (Object.keys(gamesInCart).length >= 1) {
      gamesInCart.forEach((element) => {
        cartGames.push(element);
      });
    }
    cartGames.push([params.id, gameData.title, gameData.price]);
    userItemsJSON.setGamesInCart(JSON.stringify(cartGames));
    userItemsJSON.setTotal(
      JSON.stringify(Number(total) + Number(gameData.price)),
    );
    setTimeout(() => {
      redirect('/cart');
    }, 1000);
  }

  if (loading) return <div className="loading"></div>;
  if (data)
    return (
      <>
        <Head
          title={`Lucyna | ${gameData.title}`}
          description="Buy the game to test the cart system"
        />
        <section>
          <h3 id="game-title">{gameData.title}</h3>
          <img
            src={gameData.thumbnail}
            alt={`${gameData.title} img`}
            id="game-image"
          />
          <p id="price">$ {gameData.price}</p>
          <p id="offer-data">Offer ends in 06/07/2023</p>
          <div id="buttons-container">
            <button
              ref={buttonCart}
              id="cart-button"
              onClick={() => {
                handleAddToCart();
              }}
            >
              <img src={cartSVG} alt="Cart SVG" />
            </button>
            <button
              ref={buttonBuyNow}
              id="buy-now-button"
              onClick={() => {
                handleBuyNow();
              }}
            >
              <img src={marketplaceSVG} alt="Buy Now SVG" />
              Buy Now
            </button>
          </div>

          <div id="genres">
            <h3>Genres:</h3>
            <p>{gameData.genres.join(', ')}</p>
          </div>

          <ul id="thecnical-container">
            <li>
              <p>Developer</p>
              <p className="response">{gameData.developer}</p>
            </li>
            <li>
              <p>Publisher</p>
              <p className="response">{gameData.publisher}</p>
            </li>
            <li>
              <p>Release Date</p>
              <p className="response">{gameData.release_date}</p>
            </li>
          </ul>

          <p id="short-description">{gameData.short_description}</p>
        </section>
      </>
    );
  if (error) return <p>An error ocurred</p>;
};

export default GamePage;
