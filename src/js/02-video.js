import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Vimeo(document.getElementById('vimeo-player'), {
  id: 236203659,
  width: 640,
});
const VCT_KEY = 'videoplayer-current-time';
const onPlay = (evt) => {
  localStorage.setItem(VCT_KEY, JSON.stringify(evt.seconds));
  console.log(evt.seconds);
};
player.on('timeupdate', throttle(onPlay, 1000));
const savedTime = JSON.parse(localStorage.getItem(VCT_KEY)) || 0;
player.setCurrentTime(savedTime);
