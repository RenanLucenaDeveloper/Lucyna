import React from 'react';
import Head from './Head';
import NewGames from './gamesComponents/NewGames';
import Bestsellers from './gamesComponents/Bestsellers';
import FreeGames from './gamesComponents/FreeGames';
import ComingSoon from './gamesComponents/ComingSoon';

const Store = () => {
  return (
    <>
      <Head
        title="Store"
        description="Here you can test my React skills for stores"
      />
      <section id="new">
        <h2 className="title-adjusted">New</h2>
        <NewGames />
      </section>
      <section id="bestsellers">
        <h2 className="title-adjusted">Bestsellers</h2>
        <div>
          <Bestsellers />
        </div>
      </section>
      <section id="free-coming-soon-section">
        <div id="div-scroll-container">
          <FreeGames />
          <div className="separator"></div>
          <ComingSoon />
        </div>
      </section>
    </>
  );
};

export default Store;
