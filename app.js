
const cards=document.querySelector('#unitCards');
function render(q=''){cards.innerHTML=UNITS.filter(u=>JSON.stringify(u).toLowerCase().includes(q.toLowerCase())).map((u,i)=>`<article class="card"><div class="eyebrow">Unidad 0${i+1}</div><h3>${u.title}</h3><div class="date">${u.period}</div><p>${u.summary}</p><div class="tags">${u.ce.split(', ').map(x=>`<span class="tag">${x}</span>`).join('')}</div><details><summary>Tareas y programación</summary><ul>${u.tasks.map(x=>`<li>${x}</li>`).join('')}</ul><p><b>Metodología:</b> ${u.method}</p><p><b>Evidencias:</b> ${u.evidence}</p><p><b>Instrumentos:</b> ${u.instruments}</p></details></article>`).join('')}
render();document.querySelector('#search').addEventListener('input',e=>render(e.target.value));
