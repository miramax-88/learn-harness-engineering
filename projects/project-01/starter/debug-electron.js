#!/usr/bin/env node

const electronPath = require('electron');
console.log('[debug] require("electron") returned:', typeof electronPath, electronPath);

try {
  const path = require('path');
  const mainPath = path.join(__dirname, 'test-minimal.js');
  console.log('[debug] Main path:', mainPath);
  console.log('[debug] Main file exists:', require('fs').existsSync(mainPath));
} catch (e) {
  console.error('[debug] Error:', e.message);
}
