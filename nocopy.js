// Prevent right-click menu
document.addEventListener('contextmenu', e => e.preventDefault());

// Block copy/cut/paste events
['copy','cut','paste','dragstart'].forEach(evt =>
  document.addEventListener(evt, e => e.preventDefault())
);

// Block common keyboard shortcuts (Ctrl/Cmd+C, X, S, P, U, A, Print)
document.addEventListener('keydown', e => {
  const key = e.key.toLowerCase();
  const ctrlOrCmd = e.ctrlKey || e.metaKey;

  if (
    ctrlOrCmd && ['c','x','s','p','u','a'].includes(key) // copy, cut, save, print, view source, select all
  ) {
    e.preventDefault();
    e.stopPropagation();
  }

  // PrintScreen key (won’t stop screenshots, but blocks default key)
  if (key === 'printscreen') {
    e.preventDefault();
  }
});

// Optional: disable text selection programmatically as a fallback
document.addEventListener('selectstart', e => e.preventDefault());

const config = [{
  initDataTypes: ['cenc'],
  audioCapabilities: [{ contentType: 'audio/mp4; codecs="mp4a.40.2"', robustness: 'SW_SECURE_DECODE' }],
  videoCapabilities: [{ contentType: 'video/mp4; codecs="avc1.64001E"', robustness: 'HW_SECURE_ALL' }]
}];

const access = await navigator.requestMediaKeySystemAccess('com.widevine.alpha', config);
const mediaKeys = await access.createMediaKeys();
await videoEl.setMediaKeys(mediaKeys);
// Then attach your license server flow, etc.




