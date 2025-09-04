document.getElementById('year').textContent = new Date().getFullYear();
function toast(text) {
  const el = document.createElement('div');
  el.textContent = text;
  el.style.position = 'fixed';
  el.style.left = '50%';
  el.style.bottom = '24px';
  el.style.transform = 'translateX(-50%)';
  el.style.background = 'linear-gradient(135deg, var(--brand), var(--brand-2))';
  el.style.color = '#fff';
  el.style.fontWeight = '800';
  el.style.padding = '10px 14px';
  el.style.borderRadius = '12px';
  el.style.boxShadow = '0 10px 24px rgba(43,92,255,.25)';
  el.style.zIndex = 1000;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2400);
}
document.getElementById('codeLink')?.addEventListener('click', (e) => { e.preventDefault(); toast('Quellcode-Link demnächst hinzufügen.'); });
document.getElementById('todoInfo')?.addEventListener('click', (e) => { e.preventDefault(); toast('Details folgen bald.'); });
document.getElementById('todoGit')?.addEventListener('click', (e) => { e.preventDefault(); toast('GitHub-Repo bald verfügbar.'); });
document.getElementById('gh')?.addEventListener('click', (e) => { e.preventDefault(); /* Demo: toast('GitHub-Profil geöffnet.'); */ });