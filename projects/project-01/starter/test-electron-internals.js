console.log('[debug] process.versions:', process.versions);
console.log('[debug] process.type:', process.type);
console.log('[debug] Has atomBinding:', typeof process.atomBinding);

// Check for electron in require.resolve
try {
  const electronPath = require.resolve('electron');
  console.log('[debug] resolved electron path:', electronPath);

  const stats = require('fs').statSync(electronPath);
  console.log('[debug] electron file size:', stats.size);

  // Read first line
  const content = require('fs').readFileSync(electronPath, 'utf-8');
  console.log('[debug] electron index.js first 200 chars:', content.substring(0, 200));
} catch (e) {
  console.log('[debug] resolve failed:', e.message);
}
