import { ReactComponent as MainImage } from 'assets/images/car.svg';
import ButtonIcon from 'components/ButtonIcon';
import Navbar from '../Navbar';
import './styles.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-card">
          <div className="home-image-container">
            <MainImage />
          </div>
          <div className="home-content-container">
              <h1>O carro perfeito para você</h1>
              <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
          </div>
        </div>
        <div className="home-card-button">
        <ButtonIcon />
        </div>
      </div>
    </>
  );
};
export default Home;
