if (typeof SITE === "undefined") { document.body.insertAdjacentHTML("afterbegin", '<p style="padding:130px 24px;font:18px sans-serif">Could not load data.js. Keep data.js in the same folder as this page.</p>'); throw new Error("data.js missing"); }
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
document.querySelectorAll(".sn").forEach(e => e.textContent = SITE.name);
$("yr").textContent = new Date().getFullYear();

addEventListener("scroll", () => {
  const h = document.documentElement, max = h.scrollHeight - innerHeight;
  $("bar").style.width = (max > 0 ? scrollY / max * 100 : 0) + "%";
}, { passive: true });


const rvObs = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return; const t = e.target; t.classList.add("in"); rvObs.unobserve(t);
  setTimeout(() => { t.classList.remove("rv", "in"); t.style.transitionDelay = "" }, 1100);
}), { threshold: .08 });
function reveal(box) {
  [...box.children].forEach((el, i) => { el.classList.add("rv"); el.style.transitionDelay = (i % 3) * 100 + "ms"; rvObs.observe(el); });
}
