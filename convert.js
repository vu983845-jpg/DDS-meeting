const fs = require('fs');
const path = require('path');

const files = [
  { in: 'dashboard.html', out: 'src/app/page.tsx', name: 'Dashboard' },
  { in: 'tv_mode.html', out: 'src/app/tv/page.tsx', name: 'TVMode' },
  { in: 'issues.html', out: 'src/app/issues/page.tsx', name: 'Issues' },
  { in: 'safety.html', out: 'src/app/safety/page.tsx', name: 'Safety' },
  { in: 'admin.html', out: 'src/app/admin/page.tsx', name: 'Admin' },
];

for (const file of files) {
  try {
    const htmlPath = path.join(__dirname, '_stitch_html', file.in);
    if (!fs.existsSync(htmlPath)) {
      console.log(`File not found: ${htmlPath}`);
      continue;
    }
    
    let html = fs.readFileSync(htmlPath, 'utf8');
    
    // Extract body content
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    let content = bodyMatch ? bodyMatch[1] : html;
    
    // Basic React conversions
    content = content.replace(/class="/g, 'className="');
    content = content.replace(/for="/g, 'htmlFor="');
    content = content.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
    content = content.replace(/<img(.*?)>/g, (m, p1) => (p1.endsWith('/') ? m : `<img${p1} />`));
    content = content.replace(/<input(.*?)>/g, (m, p1) => (p1.endsWith('/') ? m : `<input${p1} />`));
    content = content.replace(/<br>/g, '<br />');
    content = content.replace(/<hr>/g, '<hr />');
    
    // SVG and common camelCase attributes
    const attrs = [
      'stroke-width', 'stroke-linecap', 'stroke-linejoin', 
      'fill-rule', 'clip-rule', 'clip-path', 'stroke-miterlimit', 'stroke-dasharray', 'stroke-dashoffset'
    ];
    for (const attr of attrs) {
      const camelAttr = attr.replace(/-([a-z])/g, g => g[1].toUpperCase());
      const regex = new RegExp(`\\s${attr}=`, 'g');
      content = content.replace(regex, ` ${camelAttr}=`);
    }
    content = content.replace(/viewbox=/gi, 'viewBox=');
    content = content.replace(/tabindex=/gi, 'tabIndex=');
    content = content.replace(/readonly=/gi, 'readOnly=');

    // Inline styles config
    content = content.replace(/style="([^"]*)"/g, (match, p1) => {
        const styleObj = p1.split(';').filter(Boolean).map(s => {
            const parts = s.split(':');
            if (parts.length < 2) return '';
            const k = parts.shift().trim();
            const v = parts.join(':').trim();
            if(!k || !v) return '';
            const camelK = k.replace(/-([a-z])/g, g => g[1].toUpperCase());
            return `${camelK}: '${v.replace(/'/g, "\\'")}'`;
        }).join(', ');
        return `style={{${styleObj}}}`;
    });

    const jsx = `
import React from 'react';

export default function ${file.name}() {
  return (
    <>
${content}
    </>
  );
}
`;
    const outDir = path.dirname(path.join(__dirname, file.out));
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }
    
    fs.writeFileSync(path.join(__dirname, file.out), jsx);
    console.log(`Converted ${file.in} to ${file.out}`);
  } catch (err) {
    console.error(`Error converting ${file.in}:`, err);
  }
}
