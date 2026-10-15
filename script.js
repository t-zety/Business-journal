
const themeIcons = {
  bakery: '🥐',
  cakery: '🍰',
  knitting: '🧶',
  writing: '✍️',
  teaching: '📚',
  food: '🍓',
  crafts: '🎨',
  retail: '🛍️',
  services: '💼',
  general: '🌷'
};

function applyTheme() {
  const theme = $('theme').value;
  document.body.dataset.theme = theme;

  $('tiptitle').textContent =
    themeIcons[theme] + ' ' +
    $('theme').selectedOptions[0].text +
    ' money tip';

  persist();
  showTip();
}

$('theme').addEventListener('change', applyTheme);

// Apply the saved theme when the app opens
applyTheme();
