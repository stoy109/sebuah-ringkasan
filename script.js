const tips = [
  "Kalau kau malas baca, mungkin baca *tip ini* saja sudah berat.",
  "Ringkasan ini dibuat supaya kau nggak perlu mikir, jadi jangan lupa ngocok.",
  "Kalau kamu nggak mau baca, kok ada di sini? Silahkan.",
  "Jika tip ini muncul selamat... selamat aja",
  "Jangan terlalu malas, nanti orang yang buat ringkasan ini juga jadi malas.",
  "Hidupmu pasti sangat sibuk. Luar biasa",
  "Membaca ringkasan saja masih berat? Tenang, ada apa? yes ChatGPT.",
  "Ini adalah website khusus untuk yang malas tapi sok sibuk. Nikmati.",
  "Kalau ringkasan ini masih terlalu panjang, silahkan keluar lalu tidor joh.",
  "Malas itu manusiawi, tapi ingat, kamu masih harus klik sesuatu di sini."
];

// Get DOM elements
const percentage = document.querySelector('.percentage');
const loader = document.querySelector('.loader');
const gradientBg = document.querySelector('.gradient-background');
const tunnel = document.querySelector('.tunnel');
const scene = document.querySelector('.scene');
const stars = document.querySelector('.stars');
const welcomeContent = document.querySelector('.welcome-content');
const tipText = document.querySelector('.tip-text');
const tipContainer = document.querySelector('.tip-container');

let progress = 0;

// Display random tip with animation
function updateTip() {
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  tipText.classList.remove('changing');
  void tipText.offsetWidth; // Trigger reflow
  tipText.classList.add('changing');
  tipText.textContent = randomTip;
}

// Initial tip
updateTip();

// Change tip every 3 seconds
const tipInterval = setInterval(updateTip, 3000);

// Progress animation
const updateProgress = setInterval(() => {
  progress += 1;
  percentage.textContent = `${progress}%`;
  
  if (progress >= 100) {
    clearInterval(updateProgress);
    clearInterval(tipInterval);
    startAnimation();
  }
}, 20);

function startAnimation() {
  setTimeout(() => {
    percentage.classList.add('fade');
    loader.classList.add('complete');
    tunnel.classList.add('active');
    scene.classList.add('active');
    stars.classList.add('active');
    tipContainer.classList.add('fade');
    
    setTimeout(() => {
      gradientBg.classList.add('visible');
      setTimeout(() => {
        welcomeContent.classList.add('visible');
      }, 500);
    }, 2000);
  }, 500);
}

// Learn button click handler
document.querySelector('.learn-button').addEventListener('click', () => {
  welcomeContent.classList.add('hide');
  
  const scheduleContainer = document.querySelector('.schedule-container');
  const infoText = document.querySelector('.info-text');
  scheduleContainer.classList.add('visible');
  
  setTimeout(() => {
    infoText.classList.add('show');
  }, 1000);
  
  startCountdown();
});

function startCountdown() {
  let countdown = 5;
  const countdownEl = document.querySelector('.countdown');
  
  const countdownInterval = setInterval(() => {
    countdown--;
    countdownEl.textContent = countdown;
    
    if (countdown <= 0) {
      clearInterval(countdownInterval);
      showFinalView();
    }
  }, 1000);
}

function showFinalView() {
  const scheduleContainer = document.querySelector('.schedule-container');
  scheduleContainer.classList.remove('visible');
  
  setTimeout(() => {
    document.body.style.background = 'linear-gradient(135deg, #3498db 0%, #2c3e50 100%)';
    const finalButtons = document.querySelector('.final-buttons');
    finalButtons.classList.add('visible');
    document.querySelector('.schedule-btn').classList.add('visible');
  }, 500);
}

// Navigation button handlers
document.querySelector('.schedule-btn').addEventListener('click', () => {
  document.querySelector('.final-buttons').classList.remove('visible');
  document.querySelector('.schedule-btn').classList.remove('visible');
  
  document.querySelector('.schedule-container').classList.add('visible');
  document.querySelector('.back-btn').classList.add('visible');
});

document.querySelector('.back-btn').addEventListener('click', () => {
  document.querySelector('.schedule-container').classList.remove('visible');
  document.querySelector('.back-btn').classList.remove('visible');
  
  document.querySelector('.final-buttons').classList.add('visible');
  document.querySelector('.schedule-btn').classList.add('visible');
});

// Button click handlers
document.querySelector('.final-button').addEventListener('click', () => {
  window.location.href = 'https://summerymaybe.my.canva.site/';
});

document.querySelector('.see-more').addEventListener('click', () => {
  alert('Ntar blm ada');
});