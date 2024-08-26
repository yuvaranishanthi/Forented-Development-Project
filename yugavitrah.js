
const toggleButton = document.querySelector('.toggle-button');
const mobileMenu = document.querySelector('.mobile-menu');
const closeButton = document.querySelector('.close-button');

toggleButton.addEventListener('click', function () {
  mobileMenu.style.display = 'flex';
});

closeButton.addEventListener('click', function () {
  mobileMenu.style.display = 'none';
  console.log("yes");
});

function checkScreenWidth() {
  if (window.innerWidth > 750) {
    mobileMenu.style.display = 'none'; 
  }
}
checkScreenWidth();

window.addEventListener('resize', checkScreenWidth);
function animateCounter(targetNumber) {
  const counterElement = document.getElementById('counter');
  const duration = 2000; // Animation duration in milliseconds
  const start = 0;
  const increment = targetNumber / duration * 10; // Increment calculation
  
  let current = 0;
  const timer = setInterval(() => {
    current += increment;
    if (current >= targetNumber) {
      clearInterval(timer);
      current = targetNumber;
    }
    counterElement.textContent = Math.floor(current);
  }, 10); // Update every 10 milliseconds
}

animateCounter(1200);

document.getElementById('whatsapp').addEventListener('change', function() {
  var alternateNumber = document.getElementById('alternateNumber');
  var lab = document.getElementById('showalter');
  if (this.checked) {
     alternateNumber.style.display = 'block';
     lab.style.display = "block"
  } else {
     alternateNumber.style.display = 'none';
     lab.style.display = "none"
  }
 });
