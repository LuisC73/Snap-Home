import images from '../helpers/images'


function Home() {
  return (
    <main className="main">
      <section className="home">
        <div className="home__div">
          <h1 className="home__h1">Make <br/> remote work</h1>
          <p className="home__p">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <a href="#" className="home__button">
            Learn more
          </a>
          <div className="home__logos">
            <img src={images.databiz} alt="" className='home__icon'/>
            <img src={images.audiophile} alt="" className='home__icon'/>
            <img src={images.meet} alt="" className='home__icon'/>
            <img src={images.maker} alt="" className='home__icon'/>
          </div>
        </div>
        <figure className="home__figure">
            <img src={images['hero-desktop']} alt="" className="home__img" />
        </figure>
      </section>
    </main>
  );
}

export default Home;
