(()=>{var m=0;function s(e,o){return Math.floor(Math.random()*(o-e)+e)}(function(){function e(t){document.getElementsByClassName("active")[0].classList.remove("active"),setTimeout(()=>{document.getElementById(`pet-${t}`).classList.add("active")},s(.5,1)*1e3)}function o(){e(s(0,m-1)),setTimeout(o,s(3,6)*1e3)}fetch("/photos.txt").then(t=>t.text()).then(t=>{let c=t.split(`
`);c.pop(),m=c.length;let a=document.getElementsByClassName("photos-container")[0];c.forEach((l,i)=>{let n=document.createElement("img");n.src=`/photos/${l}`,n.id=`pet-${i}`,i===0&&(n.className="active"),a.appendChild(n)}),setTimeout(o,s(3,6)*1e3)})})();})();
