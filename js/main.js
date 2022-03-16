import {acc} from './modules/acc.js';
import {countdownTimer} from './modules/countdownTimer.js';


{
  const init = () => {
    countdownTimer();
    acc();
  };

  init();
}
