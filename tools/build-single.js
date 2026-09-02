/* build-single.js – bakar ihop hela spelet till en enda HTML-fil.
     node tools/build-single.js
   → dist/less-vardcentralen.html       fristående fil, går att mejla eller lägga på USB
   → dist/less-vardcentralen.body.html  samma innehåll utan <html>/<head>/<body>,
                                        för värdar som lägger till sin egen ram

   Bygget är en bekvämlighet, inte ett krav: index.html fungerar som den är. */
const fs = require('fs');
const path = require('path');
const rot = path.join(__dirname, '..');

const html = fs.readFileSync(path.join(rot, 'index.html'), 'utf8');
const las = f => fs.readFileSync(path.join(rot, f), 'utf8');

/* Skriptordningen läses ur index.html så att bygget aldrig hamnar ur fas. */
const skript = [...html.matchAll(/<script src="([^"]+)"><\/script>/g)].map(m => m[1]);
const css = las('css/style.css');

/* Kroppen: allt mellan <body> och skripttaggarna, minus <noscript>. */
let kropp = html.split('<body>')[1].split('<!-- Motor -->')[0];
kropp = kropp.replace(/<noscript>[\s\S]*?<\/noscript>/, '').trimEnd();

const titel = (html.match(/<title>([^<]*)<\/title>/) || [, 'LESS – Vårdcentralen'])[1];
const kod = skript.map(f => '/* ==== ' + f + ' ==== */\n' + las(f)).join('\n');

const ikon = (html.match(/<link rel="icon"[^>]*>/) || [''])[0];
const huvud = '<title>' + titel + '</title>\n' + ikon + '\n<style>\n' + css + '\n</style>\n';
const slut = kropp + '\n<script>\n' + kod + '\n<\/script>\n';

const helSida =
  '<!DOCTYPE html>\n<html lang="sv">\n<head>\n' +
  '<meta charset="utf-8">\n' +
  '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n' +
  '<meta name="description" content="Ett litet läromedelsspel om sjukskrivningsprocessen enligt LESS i primärvården.">\n' +
  huvud + '</head>\n<body>\n' + slut + '</body>\n</html>\n';

fs.mkdirSync(path.join(rot, 'dist'), { recursive: true });
fs.writeFileSync(path.join(rot, 'dist/less-vardcentralen.html'), helSida);
fs.writeFileSync(path.join(rot, 'dist/less-vardcentralen.body.html'), huvud + slut);
console.log('Byggde dist/less-vardcentralen.html (' + Math.round(helSida.length / 1024) +
            ' kB) av ' + skript.length + ' skriptfiler');
