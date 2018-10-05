const countdown = document.querySelector('.countdown');

// Set Lauch Date (ms)
const launchDate = new Date('Mar 22, 2019 00:00:01').getTime();

// Update every second
const intvl = setInterval(() => {
  // Get todays date and time (ms)
  const now = new Date().getTime();

  // Distance from now to the launch date
  const distance = launchDate - now;

  // Time Calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //Display result
  countdown.innerHTML = `
    <div>${days}<span>Dias</span></div>
    <div>${hours}<span>Horas</span></div>
    <div>${mins}<span>Minutos</span></div>
    <div>${seconds}<span>Segundos</span></div>
  `;

  // If launch date passed
  if(distance < 0) {
      //Stop countdown
      clearInterval(intvl);
      //Style and output text
      countdown.style.color = '#17a2b8';
      countdown.innerHTML = 'Lauched!';
  }
}, 1000);


