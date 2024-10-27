import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import './components/components.js';
import restaurants from './restaurants.js';

console.log('Hello Coders! :)');

document.addEventListener('DOMContentLoaded', () => {
  restaurants();
});