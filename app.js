const scrollArea = document.querySelector('.record-scroll');
const progressBar = document.querySelector('.scroll-progress span');
const licenseCard = document.querySelector('.license-card');
const narrowLayout = window.matchMedia('(max-width: 520px)');
const statusValue = document.querySelector('.status-value');
const statusText = document.querySelector('.status-text');
const macWindow = document.querySelector('.mac-window');
const expandButton = document.querySelector('.traffic-light--expand');
const minimizeButton = document.querySelector('.traffic-light--minimize');
const introScreen = document.querySelector('.intro-screen');
const introCopy = document.querySelector('.intro-copy');
const introMessages = [
  "it's my .world, and\nyou're scrolling in it.",
  'art director,\ninternet explorer,\nmusic enthusiast,\nhobby collector,\nclassic virgo.',
  "there's more where this came from.\nvictoriajperez@gmail.com",
];
const narrowThirdMessage = "there's more where this came from.\nvictoriajperez@gmail.com";
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let typingRun = 0;
let introMessageIndex = 0;

function startIntroTyping() {
  const currentRun = ++typingRun;
  const introMessage = introMessageIndex === 2 && narrowLayout.matches
    ? narrowThirdMessage
    : introMessages[introMessageIndex];
  introCopy.textContent = '';
  introCopy.classList.remove('is-complete');
  introScreen.dataset.message = String(introMessageIndex);
  introScreen.setAttribute('aria-label', introMessage.replaceAll('\n', ' '));

  if (reducedMotion.matches) {
    introCopy.textContent = introMessage;
    introCopy.classList.add('is-complete');
    return;
  }

  function typeCharacter(index) {
    if (currentRun !== typingRun) return;
    if (index >= introMessage.length) {
      window.setTimeout(() => {
        if (currentRun === typingRun) introCopy.classList.add('is-complete');
      }, 650);
      return;
    }

    const character = introMessage[index];
    const nextCharacter = introMessage[index + 1] || '';
    introCopy.textContent += character;
    let delay = 52 + Math.random() * 34;
    if (character === ' ') delay = 30 + Math.random() * 30;
    if (character === ',') delay = 210 + Math.random() * 120;
    if (character === '\n') delay = 260 + Math.random() * 150;
    if (character === '?' && nextCharacter === '?') delay = 65 + Math.random() * 30;
    if (character === '?' && nextCharacter !== '?') delay = 320 + Math.random() * 180;
    if (character === '.' && !/[a-z0-9]/i.test(nextCharacter)) delay = 320 + Math.random() * 180;
    window.setTimeout(() => typeCharacter(index + 1), delay);
  }

  window.setTimeout(() => {
    if (currentRun === typingRun) typeCharacter(0);
  }, 520);
}

function updateScrollProgress() {
  const scrollableDistance = scrollArea.scrollHeight - scrollArea.clientHeight;
  const progress = scrollableDistance > 0
    ? (scrollArea.scrollTop / scrollableDistance) * 100
    : 0;

  progressBar.style.width = `${progress}%`;
}

scrollArea.addEventListener('scroll', updateScrollProgress, { passive: true });
window.addEventListener('resize', updateScrollProgress);

function resetRecordState() {
  scrollArea.scrollTop = 0;
  progressBar.style.width = '0%';
  licenseCard.classList.remove('is-spinning', 'is-inspected', 'hint-dismissed');
  statusValue.classList.remove('is-active');
  statusText.textContent = 'Pending';

  document.querySelectorAll('[data-accordion]').forEach((record) => {
    const trigger = record.querySelector('.accordion-trigger');
    const panel = record.querySelector('.accordion-panel');
    record.classList.remove('is-open');
    trigger.setAttribute('aria-expanded', 'false');
    panel.setAttribute('aria-hidden', 'true');
  });
}

expandButton.addEventListener('click', () => {
  if (macWindow.classList.contains('is-expanded')) return;
  typingRun += 1;
  resetRecordState();
  macWindow.classList.add('is-expanded');
  expandButton.setAttribute('aria-expanded', 'true');
  expandButton.setAttribute('aria-label', 'Creative license record expanded');
  introScreen.setAttribute('aria-hidden', 'true');
  requestAnimationFrame(updateScrollProgress);
});

minimizeButton.addEventListener('click', () => {
  if (!macWindow.classList.contains('is-expanded')) return;
  resetRecordState();
  macWindow.classList.remove('is-expanded');
  expandButton.setAttribute('aria-expanded', 'false');
  expandButton.setAttribute('aria-label', 'Expand creative license record');
  introScreen.setAttribute('aria-hidden', 'false');
  introMessageIndex = (introMessageIndex + 1) % introMessages.length;
  startIntroTyping();
});

macWindow.addEventListener('transitionend', (event) => {
  if (event.propertyName === 'height') updateScrollProgress();
});

function spinLicenseCard() {
  if (licenseCard.classList.contains('is-spinning')) return;
  licenseCard.classList.add('hint-dismissed');
  licenseCard.classList.add('is-spinning');
}

licenseCard.addEventListener('click', spinLicenseCard);
licenseCard.addEventListener('keydown', (event) => {
  if (event.key !== 'Enter' && event.key !== ' ') return;
  event.preventDefault();
  spinLicenseCard();
});

licenseCard.addEventListener('animationend', (event) => {
  if (event.animationName !== 'credential-spin') return;
  licenseCard.classList.remove('is-spinning');
  licenseCard.classList.add('is-inspected');
  statusValue.classList.add('is-active');
  statusText.textContent = 'Active';
});

document.querySelectorAll('[data-accordion]').forEach((record) => {
  const trigger = record.querySelector('.accordion-trigger');
  const panel = record.querySelector('.accordion-panel');

  trigger.addEventListener('click', () => {
    const willOpen = trigger.getAttribute('aria-expanded') !== 'true';

    trigger.setAttribute('aria-expanded', String(willOpen));
    panel.setAttribute('aria-hidden', String(!willOpen));
    record.classList.toggle('is-open', willOpen);
    requestAnimationFrame(updateScrollProgress);
  });

  panel.addEventListener('transitionend', updateScrollProgress);
});

updateScrollProgress();
startIntroTyping();
