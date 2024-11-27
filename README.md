<svg xmlns="http://w3.org/2000/svg" xmlns:xlink="http://w3.org/1999/xlink" viewBox="0 0 500 300">
  <style>
    @keyframes gradientShift {
      0% { stop-color: #ff6b6b; }
      25% { stop-color: #4ecdc4; }
      50% { stop-color: #45b7d1; }
      75% { stop-color: #f9d5e5; }
      100% { stop-color: #ff6b6b; }
    }

    @keyframes textPulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }

    @keyframes textGlow {
      0%, 100% { text-shadow: 0 0 10px rgba(255,255,255,0.5); }
      50% { text-shadow: 0 0 20px rgba(255,255,255,1); }
    }

    #gradientBackground {
      animation: gradientShift 10s ease infinite;
    }

    #helloText {
      font-family: 'Arial', sans-serif;
      font-size: 100px;
      font-weight: bold;
      animation: 
        textPulse 2s ease-in-out infinite,
        textGlow 3s infinite;
      fill: white;
    }
  </style>

  <defs>
    <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ff6b6b" id="gradientBackground"/>
      <animate 
        attributeName="stop-color" 
        values="#ff6b6b; #4ecdc4; #45b7d1; #f9d5e5; #ff6b6b" 
        dur="10s" 
        repeatCount="indefinite"/>
    </linearGradient>
  </defs>

  <rect width="500" height="300" fill="url(#backgroundGradient)"/>

  <text 
    x="50%" 
    y="50%" 
    text-anchor="middle" 
    id="helloText"
    dominant-baseline="middle">
    Hello
  </text>
</svg>
