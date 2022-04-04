import {countdownTimer} from './modules/countdownTimer.js';
import {acc} from './modules/acc.js';
import {burger} from './modules/burger.js';


{
  const init = () => {
    countdownTimer();
    acc();
    burger();
  };

  init();
}
