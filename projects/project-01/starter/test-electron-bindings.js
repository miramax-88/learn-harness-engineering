console.log('[debug] Checking all process properties...');

// List all properties on process that might be related to electron
const props = Object.getOwnPropertyNames(process);
const electronProps = props.filter(p => p.toLowerCase().includes('atom') || p.toLowerCase().includes('binding') || p.toLowerCase().includes('electron'));
console.log('[debug] Electron-related process properties:', electronProps);

// Check for _linkedBinding
if (typeof process._linkedBinding === 'function') {
  try {
    const app = process._linkedBinding('electron_common_app');
    console.log('[debug] Got electron_common_app via _linkedBinding:', typeof app);
  } catch (e) {
    console.log('[debug] _linkedBinding failed:', e.message);
  }
}

// Try common electron bindings
const bindings = ['electron_common_app', 'electron_common_blink_bindings', 'electron_browser_app', 'electron_main_app'];
for (const binding of bindings) {
  try {
    if (typeof process._linkedBinding === 'function') {
      const result = process._linkedBinding(binding);
      console.log(`[debug] ${binding}: found, type = ${typeof result}`);
    }
  } catch (e) {
    //
  }
}

// Check module._preload_modules
console.log('[debug] require.cache keys:', Object.keys(require.cache).filter(k => k.includes('electron')).slice(0, 5));
