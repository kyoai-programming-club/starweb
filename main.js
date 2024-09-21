'use strict';

{
  let snowContainer = document.querySelector('.snow-container');

  const createSnow = () => {
    let snow = document.createElement('span');
    snow.className = 'snow';

    // 雪の大きさをランダムに決める
    let snowSize = Math.random() * 5 + 5;

    snow.style.height = snowSize + "px";
    snow.style.width = snowSize + "px";

    // 雪の降り始めの位置を決定する
    snow.style.left = Math.random() * 100 + "%";

    snowContainer.appendChild(snow);

    // 10秒後に雪を消す
    setTimeout(() => {
      snow.remove();
    }, 10000);
  };

  setInterval(createSnow, 100);
}