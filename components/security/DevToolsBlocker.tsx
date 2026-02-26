// "use client";

// import { useEffect } from 'react';

// export default function DevToolsBlocker() {
//     useEffect(() => {
//         // Only enable security in production
//         if (process.env.NODE_ENV !== 'production') {
//             return;
//         }

//         // ─── Iframe Clickjacking Protection ───────────────────────────────────
//         if (window.top !== window.self) {
//             window.top!.location.href = window.self.location.href;
//         }

//         // ─── Console Watermark (copyright warning) ────────────────────────────
//         const style = 'color: #667eea; font-size: 20px; font-weight: bold;';
//         const warnStyle = 'color: red; font-size: 16px;';
//         const copyStyle = 'color: #667eea; font-size: 14px;';
//         setTimeout(() => {
//             console.log('%c⚠️ STOP! This is a browser feature intended for developers.', style);
//             console.log(
//                 '%cIf someone told you to copy-paste something here, it is a scam and will give them access to your information.',
//                 warnStyle
//             );
//             console.log('%c© 2026 Soeurn Visal. All rights reserved.', copyStyle);
//         }, 100);

//         // ─── Disable Right-Click ──────────────────────────────────────────────
//         const handleContextMenu = (e: MouseEvent) => {
//             e.preventDefault();
//             return false;
//         };

//         // ─── Disable DevTools Keyboard Shortcuts ──────────────────────────────
//         const handleKeyDown = (e: KeyboardEvent) => {
//             // F12
//             if (e.keyCode === 123) { e.preventDefault(); return false; }
//             // Ctrl+Shift+I
//             if (e.ctrlKey && e.shiftKey && e.keyCode === 73) { e.preventDefault(); return false; }
//             // Ctrl+Shift+J
//             if (e.ctrlKey && e.shiftKey && e.keyCode === 74) { e.preventDefault(); return false; }
//             // Ctrl+Shift+C
//             if (e.ctrlKey && e.shiftKey && e.keyCode === 67) { e.preventDefault(); return false; }
//             // Ctrl+U (view source)
//             if (e.ctrlKey && e.keyCode === 85) { e.preventDefault(); return false; }
//             // Ctrl+S (save page)
//             if (e.ctrlKey && e.keyCode === 83) { e.preventDefault(); return false; }
//         };

//         // ─── Detect DevTools via window size difference ───────────────────────
//         const warningHTML = `
//             <div style="
//                 display:flex;justify-content:center;align-items:center;
//                 height:100vh;
//                 background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);
//                 color:white;font-family:system-ui,-apple-system,sans-serif;
//                 text-align:center;padding:20px;
//             ">
//                 <div>
//                     <h1 style="font-size:3rem;margin-bottom:1rem;">⚠️ Access Restricted</h1>
//                     <p style="font-size:1.5rem;margin-bottom:2rem;">Developer tools are disabled on this website.</p>
//                     <p style="font-size:1rem;opacity:0.9;">Please close DevTools and refresh the page.</p>
//                 </div>
//             </div>`;

//         const detectDevTools = () => {
//             const threshold = 160;
//             const widthDiff = window.outerWidth - window.innerWidth > threshold;
//             const heightDiff = window.outerHeight - window.innerHeight > threshold;
//             if (widthDiff || heightDiff) {
//                 document.body.innerHTML = warningHTML;
//             }
//         };

//         // ─── Debugger Trap ────────────────────────────────────────────────────
//         const debuggerTrap = () => {
//             const start = new Date().getTime();
//             debugger;
//             const end = new Date().getTime();
//             if (end - start > 100) {
//                 window.location.href = 'about:blank';
//             }
//         };

//         // ─── Disable Text Selection ───────────────────────────────────────────
//         document.body.style.userSelect = 'none';
//         (document.body.style as CSSStyleDeclaration & { webkitUserSelect: string }).webkitUserSelect = 'none';

//         // ─── Disable Drag & Drop ──────────────────────────────────────────────
//         const handleDragStart = (e: DragEvent) => {
//             e.preventDefault();
//             return false;
//         };

//         // ─── Clear Console Periodically ───────────────────────────────────────
//         const consoleClearInterval = setInterval(() => {
//             console.clear();
//         }, 1500);

//         // ─── Register All Listeners & Intervals ──────────────────────────────
//         document.addEventListener('contextmenu', handleContextMenu);
//         document.addEventListener('keydown', handleKeyDown);
//         document.addEventListener('dragstart', handleDragStart);

//         const devToolsInterval = setInterval(detectDevTools, 100);
//         const debuggerInterval = setInterval(debuggerTrap, 2000);

//         // ─── Cleanup on Unmount ───────────────────────────────────────────────
//         return () => {
//             document.removeEventListener('contextmenu', handleContextMenu);
//             document.removeEventListener('keydown', handleKeyDown);
//             document.removeEventListener('dragstart', handleDragStart);
//             clearInterval(devToolsInterval);
//             clearInterval(debuggerInterval);
//             clearInterval(consoleClearInterval);
//             document.body.style.userSelect = '';
//             (document.body.style as CSSStyleDeclaration & { webkitUserSelect: string }).webkitUserSelect = '';
//         };
//     }, []);

//     return null;
// }







export default function DevToolsBlocker() {
    return null;
}
