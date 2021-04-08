function _(e) {
  return document.getElementById(e);
}

let myYear = new Date().getFullYear();
_('copy').innerText = `${myYear - 2}-${myYear + 2}`;

console.log(`Develop by TROiKAS © ${myYear - 2}-${myYear + 2}`);