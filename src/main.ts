import './style.css';
import * as G from './game';
import './online';
import { App } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';

// The game's buttons call these functions from inline onclick handlers.
Object.assign(window, G);

if (Capacitor.isNativePlatform()) {
  App.addListener('backButton', () => {
    if (G.isInGame()) {
      if (window.confirm('Leave this game? Your progress will be lost.')) G.home();
    } else if (!G.isHome()) {
      G.home();
    } else {
      App.exitApp();
    }
  });
}

// Loading screen: show for ~2.2s while fonts load, then fade out.
const bt = document.getElementById('bt');
setTimeout(() => { if (bt) bt.textContent = 'Warming up the pitch…'; }, 800);
setTimeout(() => { if (bt) bt.textContent = 'Kick-off!'; }, 1600);
Promise.all([document.fonts.ready, new Promise((r) => setTimeout(r, 2200))]).then(() => {
  const b = document.getElementById('boot');
  if (b) { b.classList.add('out'); setTimeout(() => b.remove(), 700); }
});
