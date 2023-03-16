import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';
const currentTime = localStorage.getItem(STORAGE_KEY)
    ? localStorage.getItem(STORAGE_KEY)
    : 0;


player.on('timeupdate', throttle(updateTime(), 1000));

player.setCurrentTime(currentTime);

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

function updateTime(e) {
    localStorage.setItem(STORAGE_KEY);
}



