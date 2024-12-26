import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  const appDiv = document.createElement('div');
  appDiv.textContent = 'Hello, this is a sample NPM website!';
  appDiv.className = 'app';
  document.body.appendChild(appDiv);
});

