// Smooth scroll for "View My Work" button
document.addEventListener('DOMContentLoaded', function() {
  const viewWorkBtn = document.querySelector('.btn');
  viewWorkBtn.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
  });
});

// Simple Dark Mode Toggle Example
const toggleBtn = document.createElement('button');
toggleBtn.textContent = 'Toggle Dark Mode';
toggleBtn.style.position = 'fixed';
toggleBtn.style.bottom = '20px';
toggleBtn.style.right = '20px';
toggleBtn.style.padding = '10px 15px';
toggleBtn.style.background = '#333';
toggleBtn.style.color = 'white';
toggleBtn.style.border = 'none';
toggleBtn.style.borderRadius = '5px';
toggleBtn.style.cursor = 'pointer';
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});

const about =document.getElementsByClassName('show-off');

for(i = 0; i < about.length; 1++){
about[i].addEventListener('click', function(){
  this.classList.toggle('active');
})
};

// Optional: Alert when user clicks any project link
document.querySelectorAll('.project a').forEach(function(link) {
  link.addEventListener('click', function(e) {
    alert('This project link will open in a new tab!');
  });
});
 

