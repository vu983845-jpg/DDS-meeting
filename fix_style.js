const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'src', 'app', 'issues', 'page.tsx');
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/style='([^']+)'/g, (match, p1) => {
    const styleObj = p1.split(';').filter(Boolean).map(s => {
        const parts = s.split(':');
        if (parts.length < 2) return '';
        const k = parts.shift().trim();
        const v = parts.join(':').trim();
        if (!k || !v) return '';
        const camelK = k.replace(/-([a-z])/g, g => g[1].toUpperCase());
        return `${camelK}: '${v.replace(/"/g, "\\'")}'`;
    }).join(', ');
    return `style={{${styleObj}}}`;
});
fs.writeFileSync(file, content);
console.log('Fixed styles.');
