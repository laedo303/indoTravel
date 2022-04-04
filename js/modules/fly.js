export const fly = () => {
  const docEl = document.documentElement;
  const fly = document.createElement('div');

  fly.style.cssText = `
  position: fixed;
  width: 50px;
  height: 50px;
  right: 0;
  bottom: 0;
  pointer-events: none;
  background: url('./image/fly.svg') center/contain no-repeat;
  transform: rotate(-90deg)
`;

  if (docEl.clientWidth > 768) {
    document.body.append(fly);
  }

  const calcPositionFly = () => {
    const maxScroll = docEl.scrollHeight - docEl.clientHeight;
    const precentScroll = (window.pageYOffset * 100) / maxScroll;

    const scrollHeightFly =
  (docEl.clientHeight - fly.clientHeight) * precentScroll / 100;

    fly.style.bottom = scrollHeightFly + 'px';
  };

  window.addEventListener('scroll', () => {
    requestAnimationFrame(calcPositionFly);
  });
};
