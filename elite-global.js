/*!
 * elite-global.js — injection loader
 * Version 1.0.0 — MIT
 */

  function loadCSS(href){
    const link = document.createElement('link');
    link.rel  = 'stylesheet';
    link.href = href;
    link.media = 'all';
    link.onload  = () => console.log(`CSS loaded: ${href}`);
    link.onerror = () => console.error(`CSS failed: ${href}`);
    document.head.appendChild(link);
  }

  function loadJS(src){
    const script = document.createElement('script');
    script.src     = src;
    script.defer   = true;
    script.onload  = () => console.log(`JS loaded: ${src}`);
    script.onerror = () => console.error(`JS failed: ${src}`);
    document.body.appendChild(script);
  }

  function injectAll(){
    assets.css.forEach(loadCSS);
    assets.js.forEach(loadJS);
  }

  // Wait for DOM ready (so <head> and <body> exist)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectAll);
  } else {
    injectAll();
  }
})();
