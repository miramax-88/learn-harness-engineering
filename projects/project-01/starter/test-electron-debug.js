console.log('[startup] Starting main process...');
console.log('[startup] Node version:', process.version);
console.log('[startup] Process type:', process.type);
console.log('[startup] __dirname:', __dirname);

const electronPackage = require('electron');
console.log('[startup] electron require result:', typeof electronPackage);
console.log('[startup] electron keys:', Object.keys(electronPackage || {}).slice(0, 5));

// Try to get the actual modules
const Module = require('module');
const originalRequire = Module.prototype.require;
Module.prototype.require = function (id) {
  if (id === 'electron') {
    console.log('[startup] Intercepted electron require, returning native module');
    // Return the actual electron module
    return originalRequire.call(this, id);
  }
  return originalRequire.apply(this, arguments);
};

// Now try requiring electron again
const electron = require('electron');
console.log('[startup] After intercept, electron:', typeof electron, Object.keys(electron || {}).slice(0, 5));
