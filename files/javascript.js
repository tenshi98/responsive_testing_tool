// State
  let currentW = 390, currentH = 844, currentType = 'phone', currentLabel = 'iPhone 14';
  let isRotated = false;
  let zoom = 1;

  // On load, auto-load the URL
  window.addEventListener('load', () => {
    loadURL();
  });

  function loadURL() {
    const url = document.getElementById('url-input').value.trim() || 'testing/index.html';
    const frame = document.getElementById('preview-frame');
    const empty = document.getElementById('empty-state');
    frame.src = url;
    empty.style.display = 'none';
    frame.style.display = 'block';
    showScrollHint();
  }

  function setDevice(w, h, type, label) {
    // Remove active from all
    document.querySelectorAll('.device-btn').forEach(b => b.classList.remove('active'));
    event.currentTarget.classList.add('active');

    currentW = w; currentH = h; currentType = type; currentLabel = label;
    isRotated = false;
    applyFrame();
  }

  function applyCustom() {
    const w = parseInt(document.getElementById('custom-w').value) || 390;
    const h = parseInt(document.getElementById('custom-h').value) || 844;
    document.querySelectorAll('.device-btn').forEach(b => b.classList.remove('active'));
    currentW = w; currentH = h;
    currentLabel = `${w}×${h}`;
    currentType = w >= 1024 ? 'desktop' : w >= 600 ? 'tablet' : 'phone';
    isRotated = false;
    applyFrame();
  }

  function toggleRotate() {
    isRotated = !isRotated;
    applyFrame();
  }

  function applyFrame() {
    const w = isRotated ? currentH : currentW;
    const h = isRotated ? currentW : currentH;
    const type = currentType;

    const shell = document.getElementById('device-shell');
    const wrapper = document.getElementById('frame-wrapper');
    const frame = document.getElementById('preview-frame');

    shell.className = 'device-shell shell-' + type;

    wrapper.style.width = w + 'px';
    wrapper.style.height = h + 'px';
    frame.style.width = w + 'px';
    frame.style.height = h + 'px';

    document.getElementById('size-label').textContent = `${w} × ${h}`;
    document.getElementById('res-label').textContent = `${w} × ${h} px`;
    document.getElementById('device-label').textContent = isRotated ? currentLabel + ' (Landscape)' : currentLabel;

    document.getElementById('custom-w').value = w;
    document.getElementById('custom-h').value = h;
  }

  function adjustZoom(delta) {
    zoom = Math.max(0.3, Math.min(2, zoom + delta));
    document.getElementById('zoom-wrap').style.transform = `scale(${zoom})`;
    document.getElementById('zoom-label').textContent = Math.round(zoom * 100) + '%';
  }

  function showScrollHint() {
    const hint = document.getElementById('scroll-hint');
    hint.classList.add('show');
    setTimeout(() => hint.classList.remove('show'), 3000);
  }

  // Enter key on url input
  document.getElementById('url-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') loadURL();
  });

  // Init frame size
  applyFrame();
