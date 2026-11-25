const fs=require('fs');
const f='android/app/src/main/AndroidManifest.xml';
let x=fs.readFileSync(f,'utf8');
const perms=['POST_NOTIFICATIONS','SCHEDULE_EXACT_ALARM','ACCESS_COARSE_LOCATION','ACCESS_FINE_LOCATION','VIBRATE','RECEIVE_BOOT_COMPLETED'];
const add=perms.filter(p=>!x.includes('android.permission.'+p)).map(p=>`    <uses-permission android:name="android.permission.${p}"/>\n`).join('');
if(add){x=x.replace('</manifest>',add+'</manifest>');fs.writeFileSync(f,x);}
console.log('Manifest permissions patched');
