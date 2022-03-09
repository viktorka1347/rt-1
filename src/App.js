import './App.css';
import ShopItemFunc from './components/ShopItemFunc';
import ShopItemClass from './components/ShopItemClass';
import ShopItem from './types/ShopItem';
import Calendar from './components/Calendar';
import moment from 'moment';
import initMoment from './utils/initMoment';

function App() {
  const item = new ShopItem(
    'Tiger of Sweden',
    'Leonard coat',
    'Minimalistic coat in cotton-blend',
    'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    399,
    '£'
  );

  initMoment();
  const now = moment();
  
  return (
    <div>
      <div className="container">
        <div className="background-element">
        </div>
        <div className="highlight-window">
          <div className='highlight-overlay'>
          </div>
        </div>
        <div className="window">
          <ShopItemFunc item={item} />
        </div>
      </div>
      <div className="container">
        <div className="background-element">
        </div>
        <div className="highlight-window">
          <div className='highlight-overlay'>
          </div>
        </div>
        <div className="window">
          <ShopItemClass item={item} />
        </div>
      </div>
      <div className="container-calendar">
        <Calendar date={now} />
      </div>
    </div>
  );
}

export default App;