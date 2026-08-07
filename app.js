const ARTIFACTS = [
  {
    id: 'creative-license',
    order: 1,
    label: 'creative license',
    type: 'image',
    image: 'assets/artifacts/creative-license.png',
    action: 'none',
    url: '#',
    dimensions: { width: 340, height: 213 },
    idle: { x: 0, y: -2, rotation: -1, scale: 1, zIndex: 60 },
    expanded: { x: -164, y: 100, rotation: -9, zIndex: 60 },
    focus: { x: 0, y: -8, scale: 1.22 },
  },
  {
    id: 'about',
    order: 2,
    label: 'about.pdf',
    type: 'image',
    image: 'assets/artifacts/about.png',
    action: 'none',
    url: '#about',
    dimensions: { width: 214, height: 286 },
    idle: { x: -88, y: -2, rotation: -5, scale: 0.78, zIndex: 24 },
    expanded: { x: -94, y: 54, rotation: -8, zIndex: 50 },
    focus: { x: 0, y: 34, scale: 1.92 },
  },
  {
    id: 'resume',
    order: 3,
    label: 'resume.pdf',
    type: 'pdf',
    image: 'assets/artifacts/resume-preview.png',
    action: 'link',
    url: 'https://drive.google.com/file/d/1ihs2tSUF2L1OtNCYxITqRJYOnMXunHs1/view?usp=sharing',
    dimensions: { width: 214, height: 286 },
    idle: { x: 88, y: 2, rotation: 5, scale: 0.78, zIndex: 22 },
    expanded: { x: -24, y: 8, rotation: -7, zIndex: 40 },
    focus: { x: 0, y: -8, scale: 1.22 },
  },
  {
    id: 'linkedin',
    order: 4,
    label: 'linkedin',
    type: 'app',
    image: 'assets/artifacts/linkedin-icon.png',
    action: 'link',
    url: 'https://www.linkedin.com/in/victoriajperez/',
    callout: "let's connect!",
    dimensions: { width: 74, height: 74 },
    idle: { x: 118, y: -12, rotation: 7, scale: 0.92, zIndex: 18 },
    expanded: { x: 46, y: -38, rotation: -6, zIndex: 30 },
    focus: { x: 0, y: -8, scale: 2.08 },
  },
  {
    id: 'email',
    order: 5,
    label: 'email',
    type: 'app',
    image: 'assets/artifacts/email-icon.png',
    action: 'link',
    url: 'mailto:victoriajperez@gmail.com',
    callout: 'victoriajperez@gmail.com',
    dimensions: { width: 74, height: 74 },
    idle: { x: -118, y: -12, rotation: -7, scale: 0.92, zIndex: 16 },
    expanded: { x: 116, y: -84, rotation: -5, zIndex: 20 },
    focus: { x: 0, y: -8, scale: 2.08 },
  },
  {
    id: 'dj-board',
    order: 6,
    label: 'pioneer-ddjsb3.png',
    type: 'transparent-image',
    image: 'assets/artifacts/dj-board.png',
    action: 'none',
    url: '#dj-board',
    callout: '"what do you enjoy outside of work?"',
    dimensions: { width: 276, height: 133 },
    idle: { x: 0, y: 58, rotation: 1.5, scale: 0.74, zIndex: 12 },
    expanded: { x: 186, y: -130, rotation: -4, zIndex: 10 },
    focus: { x: 0, y: -8, scale: 1.34 },
  },
  {
    id: 'everynoise',
    order: 7,
    label: 'everynoise.com',
    type: 'app',
    image: 'assets/artifacts/everynoise-headphones.png',
    action: 'link',
    url: 'https://everynoise.com/',
    callout: 'a rabbit hole i could\nspend hours exploring',
    dimensions: { width: 76, height: 76 },
    idle: { x: 92, y: 42, rotation: -7, scale: 0.7, zIndex: 14 },
    expanded: { x: 160, y: 36, rotation: -6, zIndex: 22 },
    focus: { x: 0, y: -8, scale: 1.92 },
  },
];

const DEFAULT_CASCADE_ID = 'creative-license';

// Defensive cleanup for older builds that included a white placeholder preview modal.
// The current gallery uses object focus directly inside the black frame instead.
document
  .querySelectorAll('.artifact-preview, [data-artifact-preview], .artifact-preview-backdrop')
  .forEach((legacyPreview) => legacyPreview.remove());

const CASCADE_LAYOUTS = {
  'creative-license': {
    order: ['creative-license', 'about', 'resume', 'linkedin', 'email', 'dj-board', 'everynoise'],
    slots: [
      { x: -2, y: 4, rotation: -3, scale: 1.08, zIndex: 70 },
      { x: 149, y: 51, rotation: 8, scale: 0.82, zIndex: 38 },
      { x: -161, y: -90, rotation: -4, scale: 0.82, zIndex: 48 },
      { x: -46, y: 164, rotation: -8, scale: 0.82, zIndex: 54 },
      { x: -27, y: -166, rotation: 8, scale: 0.82, zIndex: 50 },
      { x: 115, y: -132, rotation: 8, scale: 0.78, zIndex: 44 },
      { x: -258, y: 46, rotation: -7, scale: 0.82, zIndex: 56 },
    ],
  },
  about: {
    order: ['about', 'resume', 'linkedin', 'email', 'dj-board', 'creative-license', 'everynoise'],
    slots: [
      { x: 26, y: -43, rotation: -3, scale: 1.08, zIndex: 70 },
      { x: 129, y: 66, rotation: 8, scale: 0.82, zIndex: 38 },
      { x: 162, y: -109, rotation: -4, scale: 0.82, zIndex: 48 },
      { x: -31, y: 149, rotation: -8, scale: 0.82, zIndex: 54 },
      { x: -156, y: 67, rotation: 8, scale: 0.82, zIndex: 50 },
      { x: -96, y: -94, rotation: 8, scale: 0.78, zIndex: 44 },
      { x: 238, y: -117, rotation: -5, scale: 0.78, zIndex: 56 },
    ],
  },
  resume: {
    order: ['resume', 'linkedin', 'email', 'dj-board', 'creative-license', 'about', 'everynoise'],
    slots: [
      { x: 6, y: -12, rotation: -3, scale: 1.08, zIndex: 70 },
      { x: 161, y: -31, rotation: 8, scale: 0.82, zIndex: 38 },
      { x: -154, y: 74, rotation: -4, scale: 0.82, zIndex: 48 },
      { x: 113, y: -168, rotation: -8, scale: 0.82, zIndex: 54 },
      { x: 98, y: 123, rotation: 8, scale: 0.82, zIndex: 50 },
      { x: -130, y: -110, rotation: 8, scale: 0.78, zIndex: 44 },
      { x: 156, y: 104, rotation: -6, scale: 0.78, zIndex: 56 },
    ],
  },
  'dj-board': {
    order: ['dj-board', 'creative-license', 'about', 'resume', 'linkedin', 'email', 'everynoise'],
    slots: [
      { x: -17, y: 67, rotation: -3, scale: 1.08, zIndex: 70 },
      { x: 45, y: -86, rotation: 8, scale: 0.82, zIndex: 38 },
      { x: -136, y: -10, rotation: -4, scale: 0.82, zIndex: 48 },
      { x: 101, y: 11, rotation: -8, scale: 0.82, zIndex: 54 },
      { x: -136, y: -157, rotation: 8, scale: 0.82, zIndex: 50 },
      { x: 185, y: -61, rotation: 8, scale: 0.78, zIndex: 44 },
      { x: -160, y: 122, rotation: -7, scale: 0.78, zIndex: 56 },
    ],
  },
  email: {
    order: ['email', 'dj-board', 'creative-license', 'about', 'resume', 'linkedin', 'everynoise'],
    slots: [
      { x: 25, y: -30, rotation: -3, scale: 1.08, zIndex: 70 },
      { x: 102, y: -18, rotation: 8, scale: 0.82, zIndex: 38 },
      { x: 48, y: 72, rotation: -4, scale: 0.82, zIndex: 48 },
      { x: -117, y: -43, rotation: -8, scale: 0.82, zIndex: 54 },
      { x: 1, y: -73, rotation: 8, scale: 0.82, zIndex: 50 },
      { x: 147, y: -94, rotation: 8, scale: 0.78, zIndex: 44 },
      { x: 162, y: 120, rotation: -5, scale: 0.78, zIndex: 56 },
    ],
  },
  linkedin: {
    order: ['linkedin', 'email', 'dj-board', 'creative-license', 'about', 'resume', 'everynoise'],
    slots: [
      { x: 3, y: 4, rotation: -3, scale: 1.08, zIndex: 70 },
      { x: 145, y: -137, rotation: 8, scale: 0.82, zIndex: 38 },
      { x: -146, y: -139, rotation: -4, scale: 0.82, zIndex: 48 },
      { x: -88, y: 23, rotation: -8, scale: 0.82, zIndex: 54 },
      { x: -16, y: -100, rotation: 8, scale: 0.82, zIndex: 50 },
      { x: 82, y: 29, rotation: 8, scale: 0.78, zIndex: 44 },
      { x: 162, y: 67, rotation: -7, scale: 0.78, zIndex: 56 },
    ],
  },
  everynoise: {
    order: ['everynoise', 'creative-license', 'about', 'resume', 'linkedin', 'email', 'dj-board'],
    slots: [
      { x: 17, y: 10, rotation: -3, scale: 1.08, zIndex: 70 },
      { x: -117, y: 6, rotation: -7, scale: 0.82, zIndex: 54 },
      { x: 106, y: -83, rotation: 8, scale: 0.82, zIndex: 48 },
      { x: -25, y: -109, rotation: -5, scale: 0.82, zIndex: 50 },
      { x: 164, y: 127, rotation: -8, scale: 0.82, zIndex: 46 },
      { x: -190, y: -140, rotation: 8, scale: 0.82, zIndex: 44 },
      { x: 14, y: 132, rotation: -6, scale: 0.78, zIndex: 38 },
    ],
  },
};

const MOBILE_CASCADE_SLOTS = [
  { x: -8, y: -24, rotation: -2, scale: 0.72, zIndex: 70 },
  { x: 82, y: -104, rotation: 7, scale: 0.5, zIndex: 58 },
  { x: -92, y: -88, rotation: -7, scale: 0.5, zIndex: 56 },
  { x: 86, y: 58, rotation: 6, scale: 0.68, zIndex: 54 },
  { x: -92, y: 70, rotation: -6, scale: 0.68, zIndex: 52 },
  { x: 20, y: 142, rotation: -4, scale: 0.46, zIndex: 50 },
  { x: -74, y: 152, rotation: 5, scale: 0.66, zIndex: 48 },
];

const GALLERY_TIMING = {
  collapseDelay: 160,
  parallax: 10,
  reactiveRadius: 540,
  reactivePush: 22,
  reactiveRotate: 1.4,
  reactiveEase: 0.085,
};

const DOCUMENT_FOCUS_IDS = new Set(['about', 'resume']);
const NO_FOCUS_IDS = new Set(['email', 'linkedin', 'everynoise', 'dj-board']);
const DIRECT_LAUNCH_IDS = new Set(['linkedin', 'email', 'everynoise']);
const TOOL_OPEN_IDS = new Set(['resume']);
const ADDRESS_ROUTES = [
  { path: 'creativelicense', label: 'vperez.world/creativelicense', artifactId: 'creative-license' },
  { path: 'about.pdf', label: 'vperez.world/about.pdf', artifactId: 'about', aliases: ['about'] },
  { path: 'resume.pdf', label: 'vperez.world/resume.pdf', artifactId: 'resume' },
  { path: 'linkedin', label: 'vperez.world/linkedin', artifactId: 'linkedin' },
  { path: 'email', label: 'vperez.world/email', artifactId: 'email' },
  { path: 'pioneer-ddjsb3.png', label: 'vperez.world/pioneer-ddjsb3.png', artifactId: 'dj-board' },
  { path: 'everynoise', label: 'vperez.world/everynoise', artifactId: 'everynoise' },
];
const DEFAULT_ADDRESS_PATH = 'about';
const FOCUSED_ADDRESS_PATHS = {
  'creative-license': 'creativelicense',
  about: 'about.pdf',
  resume: 'resume.pdf',
};

const scrollArea = document.querySelector('.record-scroll');
const progressBar = document.querySelector('.scroll-progress span');
const macWindow = document.querySelector('.mac-window');
const expandButton = document.querySelector('.traffic-light--expand');
const minimizeButton = document.querySelector('.traffic-light--minimize');
const tabMenuButton = document.querySelector('[data-tab-menu]');
const tabDropdown = document.querySelector('[data-tab-dropdown]');
const browserRefreshButton = document.querySelector('[data-browser-refresh]');
const browserStarButton = document.querySelector('[data-browser-star]');
const browserBackButton = document.querySelector('[data-browser-back]');
const browserForwardButton = document.querySelector('[data-browser-forward]');
const tabCloseButton = document.querySelector('[data-tab-close]');
const addressBar = document.querySelector('[data-address-bar]');
const addressInput = document.querySelector('[data-address-input]');
const addressSuggestions = document.querySelector('[data-address-suggestions]');
const introScreen = document.querySelector('.intro-screen');
const introCopy = document.querySelector('.intro-copy');
const gallery = document.querySelector('[data-artifact-gallery]');
const stage = document.querySelector('[data-artifact-stage]');
const focusTools = document.querySelector('[data-focus-tools]');
const focusOpenButton = document.querySelector('[data-focus-open]');
const narrowLayout = window.matchMedia('(max-width: 520px)');
const touchLayout = window.matchMedia('(hover: none), (pointer: coarse)');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const introMessages = [
  "it's my .world, and\nyou're scrolling in it.",
  'art director,\ninternet explorer,\nmusic enthusiast,\nhobby collector,\nclassic virgo.',
  "there's more where this came from.\nvictoriajperez@gmail.com",
];
const narrowThirdMessage = "there's more where this came from.\nvictoriajperez@gmail.com";

let typingRun = 0;
let introMessageIndex = 0;
let galleryState = 'idle';
let focusedArtifactId = null;
let cascadeOrder = [...CASCADE_LAYOUTS[DEFAULT_CASCADE_ID].order];
let activeCascadeSlots = CASCADE_LAYOUTS[DEFAULT_CASCADE_ID].slots;
let hoverIntentTimer = 0;
let collapseTimer = 0;
let reorderTimer = 0;
let pointerFrame = 0;
let parallaxX = 0;
let parallaxY = 0;
let pointerClientX = 0;
let pointerClientY = 0;
let reactiveFrame = 0;
let dragState = null;
let suppressNextArtifactClick = false;
let navigationIndex = 0;
let suppressHistory = false;
const navigationHistory = [DEFAULT_CASCADE_ID];
const reactiveState = new Map();

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

function templateForArtifact(artifact) {
  if (artifact.type === 'image') {
    const imageClass = artifact.id === 'creative-license'
      ? 'artifact-face--license'
      : 'artifact-face--poster';

    return `
      <div class="artifact-face artifact-face--image ${imageClass}">
        <img src="${artifact.image}" alt="" />
      </div>
    `;
  }

  if (artifact.type === 'transparent-image') {
    return `
      <div class="artifact-face artifact-face--image artifact-face--transparent">
        <img src="${artifact.image}" alt="" />
      </div>
    `;
  }

  if (artifact.type === 'text') {
    return `
      <div class="artifact-face artifact-face--text">
        <p class="artifact-about-kicker">ABOUT / VICTORIA PEREZ</p>
        <p class="artifact-about-copy">
          After college, I spent 1.5+ years at a CPG agency as an Associate Account Executive.
          By day, my left brain was activated by spreadsheets, keyword bids and KPIs.
          By night, my right brain was immersed in artboards, briefs and brainstorming sessions in downtown SF.
        </p>
        <p class="artifact-about-statement">
          Pressure certainly creates diamonds
        </p>
      </div>
    `;
  }

  if (artifact.type === 'pdf') {
    return artifact.image
      ? `
        <div class="artifact-face artifact-face--image artifact-face--pdf-preview">
          <img src="${artifact.image}" alt="" />
        </div>
      `
      : `
        <div class="artifact-face artifact-face--pdf"></div>
      `;
  }

  return artifact.image
    ? `
      <div class="artifact-face artifact-face--app artifact-face--app-image artifact-face--${artifact.id}">
        <img src="${artifact.image}" alt="" />
      </div>
    `
    : `
      <div class="artifact-face artifact-face--app artifact-face--${artifact.id}"></div>
    `;
}

function renderArtifacts() {
  stage.innerHTML = ARTIFACTS.map((artifact, index) => `
    <button
      class="artifact-item artifact-item--${artifact.type}"
      type="button"
      role="listitem"
      data-artifact-id="${artifact.id}"
      style="
        --artifact-width: ${artifact.dimensions.width}px;
        --artifact-height: ${artifact.dimensions.height}px;
        --idle-x: ${artifact.idle.x}px;
        --idle-y: ${artifact.idle.y}px;
        --idle-rotate: ${artifact.idle.rotation}deg;
        --idle-scale: ${artifact.idle.scale ?? 1};
        --idle-z: ${artifact.idle.zIndex};
        --expanded-x: ${artifact.expanded.x}px;
        --expanded-y: ${artifact.expanded.y}px;
        --expanded-rotate: ${artifact.expanded.rotation}deg;
        --expanded-z: ${artifact.expanded.zIndex};
        --focus-x: ${artifact.focus.x}px;
        --focus-y: ${artifact.focus.y}px;
        --focus-scale: ${artifact.focus.scale};
        --stagger-delay: ${index * 55}ms;
      "
      aria-label="${artifact.label}"
    >
      <span class="artifact-motion">
        ${templateForArtifact(artifact)}
        <span class="artifact-label">${artifact.label}</span>
        ${artifact.callout ? `<span class="artifact-callout">${artifact.callout}</span>` : ''}
      </span>
    </button>
  `).join('');
  applyCascadeOrder();
}

function getArtifactById(id) {
  return ARTIFACTS.find((artifact) => artifact.id === id);
}

function getFocusedArtifact() {
  return getArtifactById(focusedArtifactId);
}

function updateFocusTools() {
  const artifact = getFocusedArtifact();
  const isFocused = galleryState === 'focused' && artifact;
  const usesTools = isFocused && TOOL_OPEN_IDS.has(artifact.id);

  focusTools.hidden = !usesTools;
  if (!usesTools) return;

  const usesOpenButton = TOOL_OPEN_IDS.has(artifact.id);
  focusOpenButton.hidden = !usesOpenButton;

  if (usesOpenButton) {
    focusOpenButton.textContent = 'open in new tab';
  }
}

function setGalleryState(nextState) {
  galleryState = nextState;
  gallery.dataset.state = nextState;
  gallery.dataset.focusedArtifact = focusedArtifactId || '';
  stage.dataset.state = nextState;
  const isDocumentFocused = nextState === 'focused' && DOCUMENT_FOCUS_IDS.has(focusedArtifactId);
  gallery.classList.toggle('is-document-focused', isDocumentFocused);
  scrollArea.classList.toggle('is-document-focused', isDocumentFocused);
  updateFocusTools();
  updateArtifactTransforms();
}

function clearHoverTimers() {
  window.clearTimeout(hoverIntentTimer);
  window.clearTimeout(collapseTimer);
}

function resetCascadeLayout() {
  cascadeOrder = [...CASCADE_LAYOUTS[DEFAULT_CASCADE_ID].order];
  activeCascadeSlots = CASCADE_LAYOUTS[DEFAULT_CASCADE_ID].slots;
  applyCascadeOrder();
}

function expandGallery() {
  clearHoverTimers();
  focusedArtifactId = null;
  applyCascadeOrder();
  setGalleryState('expanded');
}

function collapseGallery() {
  clearHoverTimers();
  focusedArtifactId = null;
  resetCascadeLayout();
  setGalleryState('idle');
  parallaxX = 0;
  parallaxY = 0;
  applyParallax();
}

function scheduleCollapse() {
  clearHoverTimers();
  collapseTimer = window.setTimeout(collapseGallery, GALLERY_TIMING.collapseDelay);
}

function focusArtifact(id) {
  if (galleryState === 'idle') {
    expandGallery();
  }

  window.clearTimeout(hoverIntentTimer);
  hoverIntentTimer = window.setTimeout(() => {
    focusedArtifactId = id;
    setGalleryState('focused');
    setFocusedAddressPath(id);
  }, 0);
}

function restoreLineup() {
  window.clearTimeout(hoverIntentTimer);
  focusedArtifactId = null;
  if (galleryState !== 'idle') setGalleryState('expanded');
  resetAddressPath();
}

function getFrontArtifactId() {
  return cascadeOrder[0];
}

function getMobileSlotForArtifact(artifactId, slotIndex) {
  const slot = MOBILE_CASCADE_SLOTS[slotIndex];
  const artifact = getArtifactById(artifactId);
  if (!slot || !artifact) return slot;

  let scale = slot.scale;
  if (slotIndex === 0) {
    if (artifact.type === 'app') scale = 1.12;
    if (artifact.type === 'transparent-image') scale = 0.74;
    if (artifact.id === 'creative-license') scale = 0.68;
    if (DOCUMENT_FOCUS_IDS.has(artifact.id)) scale = 0.64;
  } else if (artifact.type === 'app') {
    scale = Math.max(slot.scale, 0.7);
  } else if (artifact.type === 'transparent-image') {
    scale = Math.max(slot.scale, 0.44);
  }

  return { ...slot, scale };
}

function applyCascadeOrder() {
  cascadeOrder.forEach((artifactId, slotIndex) => {
    const item = stage.querySelector(`[data-artifact-id="${artifactId}"]`);
    const slot = activeCascadeSlots[slotIndex];
    const mobileSlot = getMobileSlotForArtifact(artifactId, slotIndex);
    if (!item || !slot) return;

    item.style.setProperty('--expanded-x', `${slot.x}px`);
    item.style.setProperty('--expanded-y', `${slot.y}px`);
    item.style.setProperty('--expanded-rotate', `${slot.rotation}deg`);
    item.style.setProperty('--expanded-scale', slot.scale);
    item.style.setProperty('--expanded-z', `${slot.zIndex}`);
    item.style.setProperty('--stagger-delay', `${slotIndex * 42}ms`);

    if (mobileSlot) {
      item.style.setProperty('--mobile-expanded-x', `${mobileSlot.x}px`);
      item.style.setProperty('--mobile-expanded-y', `${mobileSlot.y}px`);
      item.style.setProperty('--mobile-expanded-rotate', `${mobileSlot.rotation}deg`);
      item.style.setProperty('--mobile-expanded-scale', mobileSlot.scale);
      item.style.setProperty('--mobile-expanded-z', `${mobileSlot.zIndex}`);
    }
  });
}

function getCurrentCascadeSlots() {
  return cascadeOrder.map((artifactId) => {
    const item = stage.querySelector(`[data-artifact-id="${artifactId}"]`);
    const x = Number.parseFloat(item?.style.getPropertyValue('--expanded-x')) || 0;
    const y = Number.parseFloat(item?.style.getPropertyValue('--expanded-y')) || 0;
    const rotation = Number.parseFloat(item?.style.getPropertyValue('--expanded-rotate')) || 0;
    const scale = Number.parseFloat(item?.style.getPropertyValue('--expanded-scale')) || 1;
    const zIndex = Number.parseInt(item?.style.getPropertyValue('--expanded-z'), 10) || 0;

    return { x: Math.round(x), y: Math.round(y), rotation, scale, zIndex };
  });
}

function getLayoutCode() {
  const slots = getCurrentCascadeSlots();
  const slotText = slots
    .map((slot, index) => {
      const id = cascadeOrder[index];
      return `  // ${id}\n  { x: ${slot.x}, y: ${slot.y}, rotation: ${slot.rotation}, scale: ${slot.scale}, zIndex: ${slot.zIndex} },`;
    })
    .join('\n');

  return [
    `const cascadeOrder = ${JSON.stringify(cascadeOrder)};`,
    '',
    'const CASCADE_SLOTS = [',
    slotText,
    '];',
  ].join('\n');
}

function logCascadeSlots() {
  console.info(`Updated layout:\n${getLayoutCode()}`);
}

function closeTabMenu() {
  tabMenuButton.setAttribute('aria-expanded', 'false');
  tabDropdown.hidden = true;
}

function normalizeAddressPath(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, '')
    .replace(/^vperez\.world\//, '')
    .replace(/^\/+/, '');
}

function getAddressMatches(value) {
  const query = normalizeAddressPath(value);
  const matches = ADDRESS_ROUTES.filter((route) => (
    route.path.startsWith(query) ||
    route.aliases?.some((alias) => alias.startsWith(query))
  ));
  return (matches.length ? matches : ADDRESS_ROUTES).slice(0, 3);
}

function getDefaultAddressSuggestions() {
  if (!macWindow.classList.contains('is-expanded')) return ADDRESS_ROUTES.slice(0, 3);
  return getAddressMatches(addressInput.value);
}

function renderAddressSuggestions(matches = getAddressMatches(addressInput.value)) {
  addressSuggestions.replaceChildren();
  matches.forEach((route) => {
    const button = document.createElement('button');
    button.className = 'address-suggestion';
    button.type = 'button';
    button.dataset.addressPath = route.path;
    button.innerHTML = `<span>${route.label}</span>`;
    addressSuggestions.append(button);
  });
  addressSuggestions.hidden = matches.length === 0;
}

function closeAddressSuggestions() {
  addressSuggestions.hidden = true;
}

function setAddressPath(path) {
  addressInput.value = path;
}

function resetAddressPath() {
  setAddressPath(DEFAULT_ADDRESS_PATH);
}

function setFocusedAddressPath(artifactId) {
  setAddressPath(FOCUSED_ADDRESS_PATHS[artifactId] || DEFAULT_ADDRESS_PATH);
}

function loadAddressRoute(path) {
  const normalizedPath = normalizeAddressPath(path);
  const route = ADDRESS_ROUTES.find((candidate) => (
    candidate.path === normalizedPath ||
    candidate.aliases?.includes(normalizedPath)
  ));
  if (!route) return false;

  const artifact = getArtifactById(route.artifactId);
  if (!artifact) return false;

  closeAddressSuggestions();
  closeTabMenu();

  if (DIRECT_LAUNCH_IDS.has(route.artifactId)) {
    resetAddressPath();
    activateArtifact(route.artifactId);
    return true;
  }

  navigateToFrontArtifact(route.artifactId);
  if (!NO_FOCUS_IDS.has(route.artifactId)) {
    focusArtifact(route.artifactId);
  } else {
    resetAddressPath();
  }
  return true;
}

function updateBrowserNavButtons() {
  browserBackButton.disabled = navigationIndex <= 0;
  browserForwardButton.disabled = navigationIndex >= navigationHistory.length - 1;
}

function rememberNavigation(artifactId) {
  if (suppressHistory || !artifactId || artifactId === navigationHistory[navigationIndex]) {
    updateBrowserNavButtons();
    return;
  }

  navigationHistory.splice(navigationIndex + 1);
  navigationHistory.push(artifactId);
  navigationIndex = navigationHistory.length - 1;
  updateBrowserNavButtons();
}

function navigateToFrontArtifact(artifactId) {
  if (!macWindow.classList.contains('is-expanded')) {
    typingRun += 1;
    resetGalleryState();
    macWindow.classList.add('is-expanded');
    expandButton.setAttribute('aria-expanded', 'true');
    expandButton.setAttribute('aria-label', 'Portfolio gallery expanded');
    introScreen.setAttribute('aria-hidden', 'true');
  }

  if (galleryState === 'focused') restoreLineup();
  if (galleryState === 'idle') expandGallery();

  rotateCascadeTo(artifactId);
}

function minimizeWindowWithNextIntro() {
  if (!macWindow.classList.contains('is-expanded')) return;
  closeTabMenu();
  resetAddressPath();
  resetGalleryState();
  macWindow.classList.remove('is-expanded');
  expandButton.setAttribute('aria-expanded', 'false');
  expandButton.setAttribute('aria-label', 'Expand portfolio gallery');
  introScreen.setAttribute('aria-hidden', 'false');
  introMessageIndex = (introMessageIndex + 1) % introMessages.length;
  startIntroTyping();
}

function refreshMinimizedIntro() {
  typingRun += 1;
  resetAddressPath();
  resetGalleryState();
  introScreen.setAttribute('aria-hidden', 'false');
  introMessageIndex = (introMessageIndex + 1) % introMessages.length;
  startIntroTyping();
  requestAnimationFrame(updateScrollProgress);
}

function rotateCascadeTo(artifactId) {
  if (galleryState !== 'expanded') return;

  const hoveredIndex = cascadeOrder.indexOf(artifactId);
  if (hoveredIndex <= 0) return;

  const layout = CASCADE_LAYOUTS[artifactId];
  const recedingIds = cascadeOrder.slice(0, hoveredIndex);

  if (layout) {
    cascadeOrder = [...layout.order];
    activeCascadeSlots = layout.slots;
  } else {
    cascadeOrder = cascadeOrder.slice(hoveredIndex).concat(recedingIds);
  }

  stage.classList.add('is-reordering');
  recedingIds.forEach((id) => {
    const item = stage.querySelector(`[data-artifact-id="${id}"]`);
    if (item) item.classList.add('is-receding');
  });

  applyCascadeOrder();
  updateArtifactTransforms();
  rememberNavigation(artifactId);

  window.clearTimeout(reorderTimer);
  reorderTimer = window.setTimeout(() => {
    stage.classList.remove('is-reordering');
    stage.querySelectorAll('.is-receding').forEach((item) => {
      item.classList.remove('is-receding');
    });
  }, 460);
}

function updateArtifactTransforms() {
  const frontArtifactId = getFrontArtifactId();
  stage.querySelectorAll('.artifact-item').forEach((item) => {
    const artifact = getArtifactById(item.dataset.artifactId);
    const isFocused = artifact.id === focusedArtifactId;
    const isFront = artifact.id === frontArtifactId;
    const focusIndex = ARTIFACTS.findIndex((candidate) => candidate.id === focusedArtifactId);
    const itemIndex = ARTIFACTS.findIndex((candidate) => candidate.id === artifact.id);
    const direction = Math.sign(itemIndex - focusIndex) || (itemIndex % 2 ? 1 : -1);
    const neighborPush = galleryState === 'focused' && !isFocused ? direction * 28 : 0;
    const prominence = galleryState === 'focused' && !isFocused ? 0.46 : 1;

    item.classList.toggle('is-focused', isFocused);
    item.classList.toggle('is-muted', galleryState === 'focused' && !isFocused);
    item.classList.toggle('is-mobile-front-callout', touchLayout.matches && galleryState === 'expanded' && isFront && NO_FOCUS_IDS.has(artifact.id));
    if (galleryState !== 'expanded') {
      item.classList.remove('is-hovered', 'is-receding');
      item.style.setProperty('--react-x', '0px');
      item.style.setProperty('--react-y', '0px');
      item.style.setProperty('--react-rotate', '0deg');
    }
    item.style.setProperty('--neighbor-push', `${neighborPush}px`);
    item.style.setProperty('--artifact-opacity', prominence);
  });
}

function applyParallax() {
  if (touchLayout.matches || reducedMotion.matches) return;
  stage.style.setProperty('--parallax-x', `${parallaxX}px`);
  stage.style.setProperty('--parallax-y', `${parallaxY}px`);
}

function applyReactiveMotion() {
  if (touchLayout.matches || reducedMotion.matches || galleryState !== 'expanded') return;

  const stageRect = stage.getBoundingClientRect();
  const pointerX = pointerClientX - (stageRect.left + stageRect.width / 2);
  const pointerY = pointerClientY - (stageRect.top + stageRect.height / 2);

  stage.querySelectorAll('.artifact-item').forEach((item) => {
    const artifactId = item.dataset.artifactId;
    const slotIndex = cascadeOrder.indexOf(artifactId);
    const slot = activeCascadeSlots[slotIndex];
    if (!slot) return;

    const state = reactiveState.get(artifactId) || { x: 0, y: 0, rotate: 0, targetX: 0, targetY: 0, targetRotate: 0 };
    const directionX = slot.x - pointerX;
    const directionY = (slot.y - pointerY) * 1.28;
    const distance = Math.hypot(directionX, directionY);
    const proximity = Math.max(0, 1 - distance / GALLERY_TIMING.reactiveRadius) ** 1.45;
    const horizontalWave = Math.max(0, 1 - Math.abs(directionX) / 380) ** 1.7;
    const verticalFalloff = Math.max(0.35, 1 - Math.abs(directionY) / 520);
    const strength = Math.max(proximity, horizontalWave * verticalFalloff * 0.68);
    const safeDistance = distance || 1;
    const slotDirection = Math.sign(directionX || slotIndex - (activeCascadeSlots.length - 1) / 2) || 1;
    const push = DIRECT_LAUNCH_IDS.has(artifactId)
      ? GALLERY_TIMING.reactivePush * 0.26
      : GALLERY_TIMING.reactivePush;

    state.targetX = (
      (directionX / safeDistance) * push * proximity +
      slotDirection * push * 0.36 * horizontalWave * verticalFalloff
    );
    state.targetY = (
      (directionY / safeDistance) * push * proximity * 0.56 -
      push * 0.34 * horizontalWave * verticalFalloff
    );
    state.targetRotate = (
      slotDirection * GALLERY_TIMING.reactiveRotate * 0.42 * horizontalWave +
      (directionX / 214) * GALLERY_TIMING.reactiveRotate * 0.42 * proximity
    );
    reactiveState.set(artifactId, state);
  });

  startReactiveAnimation();
}

function resetReactiveMotion() {
  stage.querySelectorAll('.artifact-item').forEach((item) => {
    const artifactId = item.dataset.artifactId;
    const state = reactiveState.get(artifactId) || { x: 0, y: 0, rotate: 0, targetX: 0, targetY: 0, targetRotate: 0 };
    state.targetX = 0;
    state.targetY = 0;
    state.targetRotate = 0;
    state.x = 0;
    state.y = 0;
    state.rotate = 0;
    reactiveState.set(artifactId, state);
    item.style.setProperty('--react-x', '0px');
    item.style.setProperty('--react-y', '0px');
    item.style.setProperty('--react-rotate', '0deg');
  });
}

function startReactiveAnimation() {
  if (reactiveFrame) return;
  reactiveFrame = requestAnimationFrame(animateReactiveMotion);
}

function animateReactiveMotion() {
  reactiveFrame = 0;
  let shouldContinue = false;

  stage.querySelectorAll('.artifact-item').forEach((item) => {
    const artifactId = item.dataset.artifactId;
    const state = reactiveState.get(artifactId);
    if (!state) return;

    state.x += (state.targetX - state.x) * GALLERY_TIMING.reactiveEase;
    state.y += (state.targetY - state.y) * GALLERY_TIMING.reactiveEase;
    state.rotate += (state.targetRotate - state.rotate) * GALLERY_TIMING.reactiveEase;

    if (
      Math.abs(state.targetX - state.x) > 0.05 ||
      Math.abs(state.targetY - state.y) > 0.05 ||
      Math.abs(state.targetRotate - state.rotate) > 0.01
    ) {
      shouldContinue = true;
    }

    item.style.setProperty('--react-x', `${state.x.toFixed(2)}px`);
    item.style.setProperty('--react-y', `${state.y.toFixed(2)}px`);
    item.style.setProperty('--react-rotate', `${state.rotate.toFixed(2)}deg`);
  });

  if (shouldContinue) startReactiveAnimation();
}

function handlePointerMove(event) {
  if (dragState) {
    const deltaX = event.clientX - dragState.startClientX;
    const deltaY = event.clientY - dragState.startClientY;
    const distance = Math.hypot(deltaX, deltaY);

    if (!dragState.hasMoved && distance > dragState.threshold) {
      dragState.hasMoved = true;
      suppressNextArtifactClick = true;
      dragState.item.classList.add('is-dragging');
    }

    if (dragState.hasMoved) {
      event.preventDefault();
      dragState.item.style.setProperty('--expanded-x', `${Math.round(dragState.startX + deltaX)}px`);
      dragState.item.style.setProperty('--expanded-y', `${Math.round(dragState.startY + deltaY)}px`);
      dragState.item.style.setProperty('--mobile-expanded-x', `${Math.round(dragState.startMobileX + deltaX)}px`);
      dragState.item.style.setProperty('--mobile-expanded-y', `${Math.round(dragState.startMobileY + deltaY)}px`);
    }

    return;
  }

  if (touchLayout.matches || reducedMotion.matches || galleryState === 'focused') return;
  pointerClientX = event.clientX;
  pointerClientY = event.clientY;
  const bounds = gallery.getBoundingClientRect();
  const x = (event.clientX - bounds.left) / bounds.width - 0.5;
  const y = (event.clientY - bounds.top) / bounds.height - 0.5;

  parallaxX = x * GALLERY_TIMING.parallax;
  parallaxY = y * GALLERY_TIMING.parallax;

  if (!pointerFrame) {
    pointerFrame = requestAnimationFrame(() => {
      pointerFrame = 0;
      applyParallax();
      applyReactiveMotion();
    });
  }
}

function handleArtifactPointerDown(event) {
  if (galleryState !== 'expanded' || (event.pointerType === 'mouse' && event.button !== 0)) return;

  const item = event.target.closest('.artifact-item');
  if (!item) return;
  const isTouchDrag = event.pointerType !== 'mouse' || touchLayout.matches;

  dragState = {
    item,
    pointerId: event.pointerId,
    startClientX: event.clientX,
    startClientY: event.clientY,
    startX: Number.parseFloat(item.style.getPropertyValue('--expanded-x')) || 0,
    startY: Number.parseFloat(item.style.getPropertyValue('--expanded-y')) || 0,
    startMobileX: Number.parseFloat(item.style.getPropertyValue('--mobile-expanded-x')) || 0,
    startMobileY: Number.parseFloat(item.style.getPropertyValue('--mobile-expanded-y')) || 0,
    threshold: isTouchDrag ? 3 : (NO_FOCUS_IDS.has(item.dataset.artifactId) ? 18 : 4),
    hasMoved: false,
  };

  item.setPointerCapture?.(event.pointerId);
}

function finishArtifactDrag(event) {
  if (!dragState || dragState.pointerId !== event.pointerId) return;

  const { item, hasMoved } = dragState;
  item.releasePointerCapture?.(event.pointerId);
  item.classList.remove('is-dragging');
  dragState = null;

  if (hasMoved) {
    window.setTimeout(() => {
      suppressNextArtifactClick = false;
    }, 0);
  }
}

function launchExternalArtifact(artifact) {
  if (!artifact?.url) return;

  const isMailto = artifact.url.startsWith('mailto:');
  window.open(artifact.url, isMailto ? '_blank' : '_blank', 'noopener,noreferrer');
}

function activateArtifact(id) {
  const artifact = getArtifactById(id);
  if (!artifact) return;

  if (artifact.action === 'link' && artifact.url) {
    launchExternalArtifact(artifact);
  }
}

function clearHoveredArtifacts() {
  stage.querySelectorAll('.is-hovered').forEach((item) => {
    item.classList.remove('is-hovered');
  });
}

function resetGalleryState() {
  scrollArea.scrollTop = 0;
  progressBar.style.width = '0%';
  focusedArtifactId = null;
  resetAddressPath();
  stage.classList.remove('is-reordering');
  resetCascadeLayout();
  clearHoveredArtifacts();
  resetReactiveMotion();
  setGalleryState('idle');
}

function resetWindowToInitialState() {
  typingRun += 1;
  resetAddressPath();
  resetGalleryState();
  macWindow.classList.add('is-expanded');
  expandButton.setAttribute('aria-expanded', 'true');
  expandButton.setAttribute('aria-label', 'Portfolio gallery expanded');
  introScreen.setAttribute('aria-hidden', 'true');
  navigationHistory.splice(0, navigationHistory.length, DEFAULT_CASCADE_ID);
  navigationIndex = 0;
  updateBrowserNavButtons();
  requestAnimationFrame(updateScrollProgress);
}

function bindGalleryEvents() {
  gallery.addEventListener('mouseleave', () => {
    if (!touchLayout.matches) {
      resetReactiveMotion();
      if (galleryState !== 'focused') scheduleCollapse();
    }
  });
  gallery.addEventListener('mousemove', handlePointerMove);
  focusOpenButton.addEventListener('click', (event) => {
    event.stopPropagation();
    launchExternalArtifact(getFocusedArtifact());
  });
  focusTools.addEventListener('click', (event) => event.stopPropagation());
  gallery.addEventListener('click', (event) => {
    if (
      galleryState === 'focused' &&
      !event.target.closest('[data-focus-tools]') &&
      !event.target.closest('.artifact-item')
    ) {
      restoreLineup();
    }
  });

  stage.addEventListener('click', (event) => {
    if (suppressNextArtifactClick) {
      event.preventDefault();
      event.stopPropagation();
      suppressNextArtifactClick = false;
      return;
    }

    const item = event.target.closest('.artifact-item');
    const artifactId = item?.dataset.artifactId;

    if (galleryState === 'focused') {
      if (artifactId === focusedArtifactId) {
        activateArtifact(artifactId);
      } else {
        restoreLineup();
      }
      return;
    }

    if (!item) {
      return;
    }

    if (galleryState === 'idle') {
      expandGallery();
      return;
    }

    if (galleryState === 'expanded' && artifactId !== getFrontArtifactId()) {
      rotateCascadeTo(artifactId);
      return;
    }

    if (galleryState === 'expanded' && NO_FOCUS_IDS.has(artifactId)) {
      if (DIRECT_LAUNCH_IDS.has(artifactId)) activateArtifact(artifactId);
      return;
    }

    if (focusedArtifactId !== item.dataset.artifactId) {
      focusArtifact(item.dataset.artifactId);
      return;
    }

    activateArtifact(item.dataset.artifactId);
  });

  stage.addEventListener('pointerdown', handleArtifactPointerDown);
  stage.addEventListener('pointermove', handlePointerMove);
  stage.addEventListener('pointerup', finishArtifactDrag);
  stage.addEventListener('pointercancel', finishArtifactDrag);

  stage.addEventListener('mouseover', (event) => {
    if (touchLayout.matches) return;
    const item = event.target.closest('.artifact-item');
    if (!item) return;
    if (galleryState === 'idle') {
      expandGallery();
    }
    clearHoveredArtifacts();
    if (galleryState === 'expanded' && item.dataset.artifactId === getFrontArtifactId()) {
      item.classList.add('is-hovered');
    }
  });

  stage.addEventListener('mouseout', (event) => {
    const item = event.target.closest('.artifact-item');
    if (!item || item.contains(event.relatedTarget)) return;
    item.classList.remove('is-hovered');
  });

  stage.addEventListener('keydown', (event) => {
    const item = event.target.closest('.artifact-item');

    if (event.key === 'Escape') {
      event.preventDefault();
      restoreLineup();
      return;
    }

    if (!item || (event.key !== 'Enter' && event.key !== ' ')) return;
    event.preventDefault();
    if (galleryState === 'idle') {
      expandGallery();
    } else if (galleryState === 'expanded' && NO_FOCUS_IDS.has(item.dataset.artifactId)) {
      if (DIRECT_LAUNCH_IDS.has(item.dataset.artifactId)) activateArtifact(item.dataset.artifactId);
    } else if (focusedArtifactId !== item.dataset.artifactId) {
      focusArtifact(item.dataset.artifactId);
    } else {
      activateArtifact(item.dataset.artifactId);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    if (macWindow.classList.contains('is-expanded')) {
      restoreLineup();
    }
  });

  document.addEventListener('click', (event) => {
    if (
      !touchLayout.matches ||
      gallery.contains(event.target) ||
      event.target.closest('.title-bar, [data-address-bar], [data-address-suggestions], [data-tab-dropdown]')
    ) {
      return;
    }
    if (macWindow.classList.contains('is-expanded')) collapseGallery();
  });
}

scrollArea.addEventListener('scroll', updateScrollProgress, { passive: true });
window.addEventListener('resize', updateScrollProgress);

tabMenuButton.addEventListener('click', (event) => {
  event.stopPropagation();
  if (!macWindow.classList.contains('is-expanded')) return;
  const isOpen = tabMenuButton.getAttribute('aria-expanded') === 'true';
  tabMenuButton.setAttribute('aria-expanded', String(!isOpen));
  tabDropdown.hidden = isOpen;
});

tabDropdown.addEventListener('click', (event) => {
  event.stopPropagation();
  const button = event.target.closest('[data-menu-artifact]');
  if (!button) return;

  const artifactId = button.dataset.menuArtifact;
  const artifact = getArtifactById(artifactId);
  closeTabMenu();

  if (!artifact) return;
  if (DIRECT_LAUNCH_IDS.has(artifactId)) {
    activateArtifact(artifactId);
    return;
  }

  navigateToFrontArtifact(artifactId);
  if (!NO_FOCUS_IDS.has(artifactId)) focusArtifact(artifactId);
});

browserRefreshButton.addEventListener('click', () => {
  closeTabMenu();
  if (macWindow.classList.contains('is-expanded')) {
    resetWindowToInitialState();
    return;
  }
  refreshMinimizedIntro();
});

browserStarButton.addEventListener('click', () => {
  const isStarred = browserStarButton.classList.toggle('is-starred');
  browserStarButton.setAttribute('aria-pressed', String(isStarred));
});

addressBar.addEventListener('click', (event) => {
  event.stopPropagation();
  if (event.target.closest('[data-address-suggestions]')) return;
  addressInput.focus();
  addressInput.select();
  renderAddressSuggestions(getDefaultAddressSuggestions());
});

addressInput.addEventListener('focus', () => {
  addressInput.select();
  renderAddressSuggestions(getDefaultAddressSuggestions());
});

addressInput.addEventListener('input', (event) => {
  const typedValue = normalizeAddressPath(addressInput.value);
  const matches = getAddressMatches(typedValue);
  const firstMatch = matches[0];

  if (
    firstMatch &&
    event.inputType === 'insertText' &&
    typedValue.length > 0 &&
    firstMatch.path.startsWith(typedValue)
  ) {
    addressInput.value = firstMatch.path;
    addressInput.setSelectionRange(typedValue.length, firstMatch.path.length);
  }

  renderAddressSuggestions(getAddressMatches(addressInput.value));
});

addressInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    event.stopPropagation();
    loadAddressRoute(addressInput.value);
    addressInput.blur();
    return;
  }

  if (event.key === 'Escape') {
    event.stopPropagation();
    closeAddressSuggestions();
    addressInput.blur();
  }
});

addressSuggestions.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  event.stopPropagation();
});

addressSuggestions.addEventListener('click', (event) => {
  event.stopPropagation();
  const button = event.target.closest('[data-address-path]');
  if (!button) return;
  loadAddressRoute(button.dataset.addressPath);
  addressInput.blur();
});

browserBackButton.addEventListener('click', () => {
  if (navigationIndex <= 0) return;
  navigationIndex -= 1;
  suppressHistory = true;
  navigateToFrontArtifact(navigationHistory[navigationIndex]);
  suppressHistory = false;
  resetAddressPath();
  updateBrowserNavButtons();
});

browserForwardButton.addEventListener('click', () => {
  if (navigationIndex >= navigationHistory.length - 1) return;
  navigationIndex += 1;
  suppressHistory = true;
  navigateToFrontArtifact(navigationHistory[navigationIndex]);
  suppressHistory = false;
  resetAddressPath();
  updateBrowserNavButtons();
});

tabCloseButton.addEventListener('click', () => {
  closeTabMenu();
  minimizeWindowWithNextIntro();
});

document.addEventListener('click', (event) => {
  if (event.target.closest('[data-tab-menu], [data-tab-dropdown]')) return;
  closeTabMenu();
});

document.addEventListener('click', (event) => {
  if (event.target.closest('[data-address-bar]')) return;
  closeAddressSuggestions();
});

expandButton.addEventListener('click', () => {
  if (macWindow.classList.contains('is-expanded')) return;
  closeTabMenu();
  typingRun += 1;
  resetGalleryState();
  macWindow.classList.add('is-expanded');
  expandButton.setAttribute('aria-expanded', 'true');
  expandButton.setAttribute('aria-label', 'Portfolio gallery expanded');
  introScreen.setAttribute('aria-hidden', 'true');
  requestAnimationFrame(updateScrollProgress);
});

minimizeButton.addEventListener('click', () => {
  closeTabMenu();
  minimizeWindowWithNextIntro();
});

macWindow.addEventListener('transitionend', (event) => {
  if (event.propertyName === 'height') updateScrollProgress();
});

renderArtifacts();
bindGalleryEvents();
resetGalleryState();
updateScrollProgress();
updateBrowserNavButtons();
startIntroTyping();
