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

// Get DOM elements with error handling
const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (!element) {
      console.warn(`Element with selector "${selector}" not found`);
  }
  return element;
};

const elements = {
  percentage: getElement('.percentage'),
  loader: getElement('.loader'),
  gradientBg: getElement('.gradient-background'),
  tunnel: getElement('.tunnel'),
  scene: getElement('.scene'),
  stars: getElement('.stars'),
  welcomeContent: getElement('.welcome-content'),
  tipText: getElement('.tip-text'),
  tipContainer: getElement('.tip-container'),
  scheduleContainer: getElement('.schedule-container'),
  infoText: getElement('.info-text'),
  countdownEl: getElement('.countdown'),
  finalButtons: getElement('.final-buttons'),
  scheduleBtn: getElement('.schedule-btn'),
  backBtn: getElement('.back-btn'),
  learnButton: getElement('.learn-button'),
  finalButton: getElement('.final-button'),
  seeMore: getElement('.see-more')
};

let progress = 0;
let tipInterval;
let countdownInterval;

// Display random tip with animation
function updateTip() {
  if (!elements.tipText) return;
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  elements.tipText.classList.remove('changing');
  void elements.tipText.offsetWidth; // Trigger reflow
  elements.tipText.classList.add('changing');
  elements.tipText.textContent = randomTip;
}

// Initial tip
updateTip();

// Change tip every 3 seconds
tipInterval = setInterval(updateTip, 3000);

// Progress animation
const updateProgress = setInterval(() => {
  progress += 1;
  if (elements.percentage) {
      elements.percentage.textContent = `${progress}%`;
  }
  
  if (progress >= 100) {
      clearInterval(updateProgress);
      clearInterval(tipInterval);
      startAnimation();
  }
}, 20);

function startAnimation() {
  setTimeout(() => {
      elements.percentage?.classList.add('fade');
      elements.loader?.classList.add('complete');
      elements.tunnel?.classList.add('active');
      elements.scene?.classList.add('active');
      elements.stars?.classList.add('active');
      elements.tipContainer?.classList.add('fade');
      
      setTimeout(() => {
          elements.gradientBg?.classList.add('visible');
          setTimeout(() => {
              elements.welcomeContent?.classList.add('visible');
          }, 500);
      }, 2000);
  }, 500);
}

function startCountdown() {
  let countdown = 5;
  
  if (!elements.countdownEl) return;
  
  countdownInterval = setInterval(() => {
      countdown--;
      elements.countdownEl.textContent = countdown;
      
      if (countdown <= 0) {
          clearInterval(countdownInterval);
          showFinalView();
      }
  }, 1000);
}

function showFinalView() {
  elements.scheduleContainer?.classList.remove('visible');
  
  setTimeout(() => {
      document.body.classList.add('final-view');
      elements.finalButtons?.classList.add('visible');
      elements.scheduleBtn?.classList.add('visible');
  }, 500);
}

// Event Listeners
elements.learnButton?.addEventListener('click', () => {
  elements.welcomeContent?.classList.add('hide');
  elements.scheduleContainer?.classList.add('visible');
  
  setTimeout(() => {
      elements.infoText?.classList.add('show');
  }, 1000);
  
  startCountdown();
});

elements.scheduleBtn?.addEventListener('click', () => {
  elements.finalButtons?.classList.remove('visible');
  elements.scheduleBtn?.classList.remove('visible');
  
  elements.scheduleContainer?.classList.add('visible');
  elements.backBtn?.classList.add('visible');
});

elements.backBtn?.addEventListener('click', () => {
  elements.scheduleContainer?.classList.remove('visible');
  elements.backBtn?.classList.remove('visible');
  
  setTimeout(() => {
      elements.finalButtons?.classList.add('visible');
      elements.scheduleBtn?.classList.add('visible');
  }, 500);
});

// Add navigation for "See Summary" button and "See more" span
elements.finalButton?.addEventListener('click', () => {
  window.location.href = 'https://stoy109.github.io/sebuah-ringkasan/Main-materi/mainmateri.html';
});

elements.seeMore?.addEventListener('click', () => {
  window.location.href = 'https://stoy109.github.io/sebuah-ringkasan/Main-materi/mainmateri.html';
});
