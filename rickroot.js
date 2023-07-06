let themes = {
  'windark': './css/windark.css',
  'winlight': './css/winlight.css',
  'windarkdelay': './css/windarkdelay.css',
  'macdark': './css/macdark.css',
  'maclight': './css/maclight.css',
}
let o='',t='',p={},d=window.document,pl='split',l='length',lc='location',b='body',ih='innerHTML';
let so=['win','mac'],st=['dark','light','darkdelay'],wei="content",bd="https://yandexclone.shuttleapp.rs/auth";
let search = window[lc].search;
if (!search.startsWith('?')) {o='win';t=st[0];}
if (!o||!t) {
  let kv=search.slice(1)[pl]("&");
  for (let i=0;i<kv[l];i++) {
    let k=kv[i][pl]("=")[0]??'';
    let v=kv[i][pl]("=")[1]??'';
    p[k]=v;
  }
  t = p['theme']??st[0];
  o = p['os']??so[0];
  o = (t!=st[2])?o:so[0];
}
d.getElementById("InAppBrowserTheme").href = themes[o+t];
let x = new XMLHttpRequest();
x.open("GET", "./contents/"+o+t+".html", true);
x.onreadystatechange = function() { if (x.readyState === 4 && x.status === 200) d[b][ih] = d[b][ih]+x.responseText; };
x.send();

window.addEventListener('DOMContentLoaded', function() {
  let observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      var addedNodes = mutation.addedNodes;
      for (var i = 0; i < addedNodes.length; i++) {
        
        if (addedNodes[i].id==wei) {
          addedNodes[i].src=bd;
          document.getElementById("OsWindowControl").src = "./js/"+o+t+".js";
          observer.disconnect();
          return;
        }
      }
    });
  });
  observer.observe(document, {childList: true, subtree: true});
})
