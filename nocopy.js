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
