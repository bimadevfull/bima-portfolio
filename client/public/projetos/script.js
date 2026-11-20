// Ajustes principais: topbar única, chips bar separada e modo "shrink" ao rolar
// O restante do site (Shorts, grid, mini player, etc.) continua igual à versão anterior

/* Categorias (chips) */
const chips = [
  "Todos","Tecnologia","Programação","Música","Ao vivo","Podcasts","Videojogos","Hardware",
  "Desenvolvimento Web","IA/ML","Reviews","Tutoriais","Notícias","Open Source","Startups","Filmes"
];

const sampleThumb = (seed) => `https://picsum.photos/seed/${encodeURIComponent(seed)}/640/360`;
const sampleAvatar = (seed) => `https://api.dicebear.com/9.x/thumbs/svg?seed=${encodeURIComponent(seed)}&backgroundType=gradientLinear`;
const previewVideoSrc = "https://samplelib.com/lib/preview/mp4/sample-5s.mp4";

/* Dados fake */
function makeVideo(i){
  const live = Math.random() < 0.15;
  const sponsored = Math.random() < 0.08;
  const verified = Math.random() < 0.4;
  return {
    id: `vid-${Date.now()}-${i}`,
    title: live ? `AO VIVO: Cobertura especial ${i}` : `Novidades para devs — episódio ${i}`,
    channel: `Canal ${Math.floor(Math.random()*200)}`,
    verified,
    views: `${(Math.random()*900 + 100).toFixed(0)} mil visualizações`,
    age: live ? "agora" : `há ${Math.ceil(Math.random()*12)} ${Math.random() < .5 ? "dias" : "horas"}`,
    length: live ? "" : `${Math.floor(Math.random()*19)+2}:${String(Math.floor(Math.random()*60)).padStart(2,'0')}`,
    thumb: sampleThumb(`thumb-${i}`),
    avatar: sampleAvatar(`channel-${i}`),
    sponsored,
    live
  };
}
function makeShort(i){
  return {
    id: `short-${Date.now()}-${i}`,
    title: `Truque rápido #${i}`,
    duration: `${Math.floor(Math.random()*58)+1}s`,
    thumb: `https://picsum.photos/seed/short-${i}/360/640`
  };
}

let videos = Array.from({ length: 16 }, (_, i) => makeVideo(i));
let shorts = Array.from({ length: 12 }, (_, i) => makeShort(i));

/* Elementos */
const el = {
  topbar: document.getElementById("topbar"),
  sidebar: document.getElementById("sidebar"),
  chipsBar: document.getElementById("chipsBar"),
  chipsPrev: document.getElementById("chipsPrev"),
  chipsNext: document.getElementById("chipsNext"),
  videosGrid: document.getElementById("videosGrid"),
  skeleton: document.getElementById("skeleton"),
  menuBtn: document.getElementById("menuBtn"),
  searchForm: document.getElementById("searchForm"),
  searchInput: document.getElementById("searchInput"),
  toast: document.getElementById("toast"),
  themeBtn: document.getElementById("themeBtn"),
  helpBtn: document.getElementById("helpBtn"),
  helpDialog: document.getElementById("helpDialog"),
  shortsRow: document.getElementById("shortsRow"),
  mini: document.getElementById("miniPlayer"),
  miniVideo: document.getElementById("miniVideo"),
  miniClose: document.getElementById("miniClose"),
  miniMute: document.getElementById("miniMute"),
  miniTitle: document.getElementById("miniTitle")
};

/* Renderização */
function renderChips(){
  el.chipsBar.innerHTML = "";
  chips.forEach((name, idx) => {
    const btn = document.createElement("button");
    btn.className = `chip ${idx === 0 ? "active" : ""}`;
    btn.textContent = name;
    btn.addEventListener("click", () => {
      [...el.chipsBar.querySelectorAll(".chip")].forEach(c => c.classList.remove("active"));
      btn.classList.add("active");
      videos = videos.sort(() => Math.random() - 0.5);
      renderVideos(videos);
      toast(`Filtro: ${name}`);
    });
    el.chipsBar.appendChild(btn);
  });
}
function renderShorts(){
  el.shortsRow.innerHTML = "";
  shorts.forEach(s => {
    const card = document.createElement("article");
    card.className = "short";
    const img = document.createElement("img"); img.src = s.thumb; img.alt = s.title;
    const dur = document.createElement("span"); dur.className = "duration"; dur.textContent = s.duration;
    card.append(img, dur); el.shortsRow.appendChild(card);
  });
}
function quickActions(){
  const wrap = document.createElement("div");
  wrap.className = "quick-actions";
  wrap.innerHTML = `
    <button class="qbtn" data-action="play"><span class="material-symbols-outlined">play_arrow</span><span>Reproduzir</span></button>
    <button class="qbtn" data-action="like"><span class="material-symbols-outlined">thumb_up</span><span>Curtir</span></button>
    <button class="qbtn" data-action="later"><span class="material-symbols-outlined">schedule</span><span>Ver depois</span></button>
  `;
  wrap.addEventListener("click", (e) => {
    const btn = e.target.closest(".qbtn"); if (!btn) return;
    const action = btn.dataset.action;
    if (action === "play"){
      const card = e.currentTarget.closest(".card");
      const title = card.querySelector(".title")?.textContent || "Reprodução";
      openMiniPlayer(previewVideoSrc, title);
    } else {
      toast(action === "like" ? "Curtido!" : "Adicionado para ver depois");
    }
  });
  return wrap;
}
function renderVideos(list){
  el.videosGrid.innerHTML = "";
  list.forEach((v, idx) => {
    const card = document.createElement("article");
    card.className = "card"; card.tabIndex = 0; card.dataset.idx = idx;

    const thumb = document.createElement("div");
    thumb.className = "thumb"; thumb.style.backgroundImage = `url('${v.thumb}')`;
    thumb.addEventListener("mouseenter", () => addPreview(thumb));
    thumb.addEventListener("mouseleave", () => removePreview(thumb));

    if (v.sponsored){ const ad = document.createElement("span"); ad.className = "ad-badge"; ad.textContent = "Anúncio"; thumb.appendChild(ad); }
    if (v.live){ const live = document.createElement("span"); live.className = "live"; live.textContent = "AO VIVO"; thumb.appendChild(live); }
    else if (v.length){ const time = document.createElement("span"); time.className = "time"; time.textContent = v.length; thumb.appendChild(time); }

    thumb.appendChild(quickActions());

    const body = document.createElement("div"); body.className = "card-body";
    const avatar = document.createElement("img"); avatar.className = "avatar-sm"; avatar.alt = ""; avatar.src = v.avatar;
    const text = document.createElement("div");
    const title = document.createElement("div"); title.className = "title"; title.textContent = v.title;
    const meta = document.createElement("div"); meta.className = "meta";
    meta.innerHTML = `${v.channel}${v.verified ? ' <span class="material-symbols-outlined verified" title="Verificado">verified</span>' : ""} • ${v.views} • ${v.age}`;
    text.append(title, meta);

    const more = document.createElement("button"); more.className = "icon-btn more";
    more.innerHTML = `<span class="material-symbols-outlined">more_vert</span>`;
    more.setAttribute("aria-label", "Mais ações");
    more.addEventListener("click", () => toast("Menu de ações (demo)"));

    body.append(avatar, text, more);
    card.append(thumb, body);
    el.videosGrid.appendChild(card);
  });
}

/* Prévia em hover */
function addPreview(thumb){
  if (thumb.querySelector("video")) return;
  const v = document.createElement("video");
  v.src = previewVideoSrc; v.muted = true; v.autoplay = true; v.loop = true; v.playsInline = true;
  thumb.prepend(v);
}
function removePreview(thumb){ thumb.querySelector("video")?.remove(); }

/* Mini player */
function openMiniPlayer(src, title){
  el.mini.hidden = false; el.miniVideo.src = src;
  el.miniVideo.play().catch(()=>{}); el.miniTitle.textContent = title;
}
el.miniClose.addEventListener("click", () => { el.mini.hidden = true; el.miniVideo.pause(); el.miniVideo.src = ""; });
el.miniMute.addEventListener("click", () => { el.miniVideo.muted = !el.miniVideo.muted; el.miniMute.innerHTML = `<span class="material-symbols-outlined">${el.miniVideo.muted ? "volume_off" : "volume_up"}</span>`; });

/* Sidebar + tema */
document.getElementById("menuBtn").addEventListener("click", toggleSidebar);
function toggleSidebar(){
  el.sidebar.classList.toggle("collapsed");
  document.querySelector(".content").classList.toggle("collapsed");
  save("yt.sidebar", el.sidebar.classList.contains("collapsed") ? "1" : "0");
}
if (load("yt.sidebar") === "1") toggleSidebar();

const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
const savedTheme = load("yt.theme");
if (savedTheme){ document.documentElement.dataset.theme = savedTheme; }
else if (prefersLight){ document.documentElement.dataset.theme = "light"; }
document.getElementById("themeBtn").addEventListener("click", () => {
  const t = document.documentElement.dataset.theme === "light" ? "dark" : "light";
  document.documentElement.dataset.theme = t; save("yt.theme", t);
});

/* Busca com debounce */
let debounceTimer;
el.searchForm?.addEventListener("submit", (e) => e.preventDefault());
el.searchInput?.addEventListener("input", () => { clearTimeout(debounceTimer); debounceTimer = setTimeout(applySearch, 160); });
function applySearch(){
  const q = (el.searchInput?.value || "").trim().toLowerCase();
  if (!q){ renderVideos(videos); return; }
  const filtered = videos.filter(v => v.title.toLowerCase().includes(q) || v.channel.toLowerCase().includes(q));
  renderVideos(filtered); toast(`${filtered.length} resultado(s) para: ${q}`);
}

/* Setas dos chips */
el.chipsPrev.addEventListener("click", () => el.chipsBar.parentElement.scrollBy({ left: -300, behavior: "smooth" }));
el.chipsNext.addEventListener("click", () => el.chipsBar.parentElement.scrollBy({ left: 300, behavior: "smooth" }));

/* Infinite scroll com skeleton (mesmo comportamento) */
let loading = false;
function showSkeleton(cards = 6){
  el.skeleton.innerHTML = "";
  for (let i=0;i<cards;i++){
    const c = document.createElement("div"); c.className = "skeleton-card";
    const t = document.createElement("div"); t.className = "skeleton-thumb";
    const l1 = document.createElement("div"); l1.className = "skeleton-line";
    const l2 = document.createElement("div"); l2.className = "skeleton-line"; l2.style.width = "70%";
    c.append(t,l1,l2); el.skeleton.appendChild(c);
  }
}
async function loadMore(){
  if (loading) return; loading = true; showSkeleton(8);
  await wait(650 + Math.random()*400);
  const more = Array.from({ length: 12 }, (_, i) => makeVideo(i+videos.length));
  videos = videos.concat(more); renderVideos(videos); el.skeleton.innerHTML = ""; loading = false;
}
window.addEventListener("scroll", () => {
  // Encolhe a topbar quando rolar
  if (window.scrollY > 8) el.topbar.classList.add("shrink"); else el.topbar.classList.remove("shrink");

  // Carregar mais
  const nearBottom = window.innerHeight + window.scrollY > document.body.offsetHeight - 600;
  if (nearBottom && !loading) loadMore();
});

/* Atalhos e ajuda (mesmo) */
document.addEventListener("keydown", (e) => {
  if (e.key === "/"){ e.preventDefault(); el.searchInput?.focus(); return; }
  if (e.key === "["){ toggleSidebar(); return; }
  if (e.key === "]"){ if (el.sidebar.classList.contains("collapsed")) toggleSidebar(); return; }
  if (e.key === "?"){ el.helpDialog.showModal(); return; }
  if (e.key === "g"){ const t = document.documentElement.dataset.theme === "light" ? "dark" : "light"; document.documentElement.dataset.theme = t; save("yt.theme", t); return; }

  const cards = [...document.querySelectorAll(".card")];
  const active = document.activeElement?.classList?.contains("card") ? document.activeElement : null;
  const idx = active ? cards.indexOf(active) : -1;

  if (["ArrowRight","ArrowLeft","ArrowDown","ArrowUp","p"].includes(e.key)) e.preventDefault();
  if (["ArrowRight","ArrowLeft","ArrowDown","ArrowUp"].includes(e.key)){
    let next = 0;
    const cols = getComputedStyle(document.querySelector(".videos-grid")).gridTemplateColumns.split(" ").length || 3;
    switch(e.key){
      case "ArrowRight": next = Math.min(idx + 1, cards.length - 1); break;
      case "ArrowLeft": next = Math.max(idx - 1, 0); break;
      case "ArrowDown": next = Math.min(idx + cols, cards.length - 1); break;
      case "ArrowUp": next = Math.max(idx - cols, 0); break;
    }
    (cards[next] || cards[0]).focus();
  }
  if (e.key === "p"){
    const card = document.activeElement?.classList?.contains("card") ? document.activeElement : document.querySelector(".card");
    const title = card?.querySelector(".title")?.textContent || "Reprodução";
    openMiniPlayer(previewVideoSrc, title);
  }
});

/* Toast util */
let toastTimer;
function toast(msg, ms = 1800){
  el.toast.textContent = msg; el.toast.classList.add("show");
  clearTimeout(toastTimer); toastTimer = setTimeout(() => el.toast.classList.remove("show"), ms);
}

/* Utils */
function save(k,v){ try{ localStorage.setItem(k, v); }catch{} }
function load(k){ try{ return localStorage.getItem(k); }catch{ return null; } }
const wait = (ms) => new Promise(r => setTimeout(r, ms));

/* Init */
(function init(){
  renderChips(); renderShorts(); renderVideos(videos);
})();