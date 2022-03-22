import {countdownTimer} from './modules/countdownTimer.js';
import {acc} from './modules/acc.js';
import {burger} from './modules/burger.js';
import {fly} from './modules/fly.js';
import {renderTours} from './modules/renderTours.js';
// import './modules/tours.js';


{
  const init = () => {
    countdownTimer();
    acc();
    burger();
    fly();
    renderTours();
  };

  init();
}
