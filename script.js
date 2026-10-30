const TEL = "59167350284";
const $ = i => document.getElementById(i), P = 240, L = 6000, fmt = x => x.toLocaleString("es-BO");
const wa = t => TEL ? `https://wa.me/${TEL}?text=${encodeURIComponent(t)}` : "#contacto";
if (TEL) $("tel").textContent = "+591 " + TEL.slice(3), $("tel").className = "";
function calc() {
    let n = Math.max(1, Math.min(999, parseInt($("n").value) || 1)); $("n").value = n;
    $("tot").textContent = fmt(n * P) + " Bs"; $("lit").textContent = fmt(n * L) + " L"; $("m3").textContent = `${n * 6} m³ · ${P} Bs por tanque. La entrega a domicilio tiene costo extra.`;
    $("ped").href = wa(`Hola, quiero pedir ${n} tanque(s) de oxígeno de 6 m³ (${fmt(n * P)} Bs).`)
}
$("wa").href = wa("Hola, quiero información sobre los tanques de oxígeno.");
$("mn").onclick = () => { $("n").value--; calc() }; $("pl").onclick = () => { $("n").value++; calc() }; $("n").oninput = calc; calc();
$("q").oninput = e => {
    const q = e.target.value.trim().toLowerCase(); let c = 0;
    document.querySelectorAll("[data-s]").forEach(el => { const m = !q || el.dataset.s.toLowerCase().includes(q); el.hidden = !m; if (m && q) c++; if (el.tagName === "DETAILS") el.open = !!q && m });
    $("nores").style.display = q && !c ? "block" : "none"
};
$("f").onsubmit = e => {
    e.preventDefault(); const t = `Sugerencia de ${$("nm").value}: ${$("ms").value}`;
    if (TEL) location.href = wa(t); else $("fm").textContent = "Aún falta el número de la empresa para enviar. Llámanos al teléfono de arriba."
};
