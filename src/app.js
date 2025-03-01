import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  const appDiv = document.getElementById('app');
  appDiv.textContent = 'Hello, this is a sample NPM website!';
  appDiv.className = 'app';
  appDiv.innerHTML += '<p>Explore the features of our DevOps bot and see how it can help streamline your development process.</p>';
});

