'use strict';

import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'es6-promise';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import teamImage from './modules/teamImage';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

// Timer
countTimer('30 september 2019');

// Menu
toggleMenu();

// Popup
togglePopup();

// Tabs
tabs();

// Slider
slider();

// Team
teamImage();

// Calc
calc(100);

// send-ajax-form
sendForm();