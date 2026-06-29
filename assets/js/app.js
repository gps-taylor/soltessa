/* ============================================================
   Soltessa — shared shell + helpers
   Renders the persistent nav rail, top bar, tenant switcher.
   Every page calls Soltessa.mount({ active: 'dashboard' }).
   ============================================================ */
(function () {
  const ICONS = {
    dashboard: '<path d="M3 13h8V3H3v10Zm0 8h8v-6H3v6Zm10 0h8V11h-8v10Zm0-18v6h8V3h-8Z"/>',
    studio: '<path d="M3 7l9-4 9 4-9 4-9-4Z"/><path d="M3 7v6l9 4 9-4V7"/><path d="M12 11v10"/>',
    catalog: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    quotes: '<path d="M9 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4"/><path d="M14 3l7 7"/><path d="M14 3v5a2 2 0 0 0 2 2h5"/><path d="M8 13h5M8 17h6"/>',
    purchasing: '<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.4 12.4a1.5 1.5 0 0 0 1.5 1.2h8.7a1.5 1.5 0 0 0 1.5-1.2L22 7H6"/>',
    lots: '<path d="M3 21h18"/><path d="M5 21V8l7-4 7 4v13"/><path d="M9 21v-6h6v6"/>',
    scheduling: '<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    sales: '<path d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/><path d="M3 21v-1a6 6 0 0 1 6-6h6a6 6 0 0 1 6 6v1"/>',
    service: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6 2 2 6-6a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-2 2.5-2.5Z"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 6 19.4l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.6 1.6 0 0 0 3 13.9H3a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 4.6 7.3l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.6 1.6 0 0 0 9 4.6V4a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 2.7 1.1l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0 .9 2.6H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1Z"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
    bell: '<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>',
    chevron: '<path d="m6 9 6 6 6-6"/>',
    chevronR: '<path d="m9 6 6 6-6 6"/>',
    arrowR: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    filter: '<path d="M22 3H2l8 9.5V19l4 2v-8.5L22 3Z"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5M12 15V3"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    alert: '<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 17h.01"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/>',
    dollar: '<path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/>',
    box: '<path d="M21 8 12 3 3 8v8l9 5 9-5V8Z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
    layers: '<path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/>',
    calc: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 10h2M12 10h2M16 10h0M8 14h2M12 14h2M16 14h0M8 18h6"/>',
    map: '<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z"/><path d="M9 3v15M15 6v15"/>',
    home: '<path d="m3 11 9-8 9 8"/><path d="M5 9v11h14V9"/><path d="M10 20v-6h4v6"/>',
    users: '<circle cx="9" cy="8" r="4"/><path d="M2 20a7 7 0 0 1 14 0"/><path d="M17 5a4 4 0 0 1 0 8M22 20a7 7 0 0 0-5-6.7"/>',
    truck: '<path d="M1 4h13v12H1zM14 8h4l3 3v5h-7"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/>',
    swatch: '<path d="M2 12a10 10 0 1 0 10-10 10 10 0 0 0-3 19.5"/><circle cx="9" cy="9" r="1.5"/><circle cx="15" cy="9" r="1.5"/>',
    edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.1 2.1 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5Z"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    grid: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
    list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
    trend: '<path d="M22 7 13.5 15.5 8.5 10.5 2 17"/><path d="M16 7h6v6"/>',
    cube: '<path d="M21 8 12 3 3 8v8l9 5 9-5V8Z"/><path d="M3 8l9 5 9-5"/>',
    tag: '<path d="M20.6 13.4 12 22l-9-9V3h10l7.6 7.6a2 2 0 0 1 0 2.8Z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
    send: '<path d="M22 2 11 13M22 2 15 22l-4-9-9-4 20-7Z"/>',
    link: '<path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1.5 1.5"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1.5-1.5"/>',
    ruler: '<path d="M21.3 8.7 8.7 21.3a1 1 0 0 1-1.4 0l-4.6-4.6a1 1 0 0 1 0-1.4L15.3 2.7a1 1 0 0 1 1.4 0l4.6 4.6a1 1 0 0 1 0 1.4Z"/><path d="m7.5 10.5 2 2M11 7l2 2M14.5 3.5l2 2M4 14l2 2"/>',
    inbox: '<path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.5 5.5 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.5-6.5A2 2 0 0 0 16.7 4H7.3a2 2 0 0 0-1.8 1.5Z"/>',
    palette: '<circle cx="13.5" cy="6.5" r="1.5"/><circle cx="17.5" cy="10.5" r="1.5"/><circle cx="8.5" cy="7.5" r="1.5"/><circle cx="6.5" cy="12.5" r="1.5"/><path d="M12 2a10 10 0 0 0 0 20 2.5 2.5 0 0 0 2.5-2.5c0-.7-.3-1.3-.7-1.8a2.5 2.5 0 0 1 1.8-4.2H18a4 4 0 0 0 4-4 10 10 0 0 0-10-8Z"/>',
    sliders: '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',
    pin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/>',
    copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1Z"/><path d="M4 22v-7"/>',
  };

  function icon(name, cls) {
    const p = ICONS[name] || ICONS.dashboard;
    return `<svg class="${cls||''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  }

  const NAV = [
    { sec: 'Workspace' },
    { id: 'dashboard',  label: 'Dashboard',          icon: 'dashboard',  href: 'index.html' },
    { id: 'studio',     label: 'Design Studio',       icon: 'studio',     href: 'design-studio.html', badge: '6' },
    { id: 'catalog',    label: 'Pricing & Catalog',   icon: 'catalog',    href: 'catalog.html' },
    { id: 'quotes',     label: 'Selections & Quotes', icon: 'quotes',     href: 'quotes.html', badge: '4' },
    { sec: 'Operations' },
    { id: 'purchasing', label: 'Purchasing',          icon: 'purchasing', href: 'purchasing.html' },
    { id: 'lots',       label: 'Lots & Communities',  icon: 'lots',       href: 'lots.html' },
    { id: 'scheduling', label: 'Scheduling',          icon: 'scheduling', href: 'scheduling.html' },
    { sec: 'Relationships' },
    { id: 'sales',      label: 'Sales & Buyers',      icon: 'sales',      href: 'sales.html' },
    { id: 'service',    label: 'Customer Service',    icon: 'service',    href: 'service.html' },
    { sec: 'Administration' },
    { id: 'settings',   label: 'Settings & Admin',    icon: 'settings',   href: 'settings.html' },
  ];

  function buildRail(active) {
    const items = NAV.map(n => {
      if (n.sec) return `<div class="nav-section-label">${n.sec}</div>`;
      const isActive = n.id === active ? 'active' : '';
      const badge = n.badge ? `<span class="nav-badge">${n.badge}</span>` : '';
      return `<a class="nav-item ${isActive}" href="${n.href}">${icon(n.icon)}<span>${n.label}</span>${badge}</a>`;
    }).join('');

    return `
    <aside class="rail" id="rail">
      <div class="rail-brand">
        <svg class="rail-logo" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <rect x="1" y="1" width="30" height="30" rx="8" fill="#1c222c"/>
          <path d="M16 6l8 4.5v9L16 24l-8-4.5v-9L16 6Z" stroke="#c2703d" stroke-width="1.6"/>
          <path d="M16 11l4 2.25v4.5L16 20l-4-2.25v-4.5L16 11Z" fill="#c2703d"/>
        </svg>
        <span class="rail-wordmark">Soltessa<span class="dot">.</span></span>
      </div>

      <div class="tenant-wrap">
        <button class="tenant-switch" id="tenantSwitch" aria-haspopup="listbox" aria-expanded="false" aria-label="Switch development">
          <span class="tenant-chip" id="tChip">SP</span>
          <span class="tenant-meta">
            <span class="tenant-name" id="tName">Sienna Pass</span>
            <span class="tenant-role" id="tRole">Active development · Henderson</span>
          </span>
          ${icon('chevron')}
        </button>
        <div class="tenant-menu" id="tenantMenu" role="listbox" aria-label="Developments"></div>
      </div>

      <nav class="nav-scroll">${items}</nav>

      <div class="rail-foot">
        <span class="rail-avatar">TM</span>
        <span class="who">Taylor Morgan<small>Design Center Lead</small></span>
      </div>
    </aside>`;
  }

  function buildTop() {
    return `
    <header class="topbar">
      <button class="top-action btn-icon menu-toggle" id="menuToggle" aria-label="Open menu">${icon('list')}</button>
      <div class="search">
        ${icon('search')}
        <input placeholder="Search lots, buyers, POs, selections…" aria-label="Search" />
        <kbd>⌘K</kbd>
      </div>
      <div class="topbar-spacer"></div>
      <button class="top-action" aria-label="Help">${icon('info')}</button>
      <button class="top-action" aria-label="Notifications"><span class="ping"></span>${icon('bell')}</button>
    </header>`;
  }

  function mount(opts) {
    opts = opts || {};
    const root = document.getElementById('app');
    const railHtml = buildRail(opts.active);
    const topHtml = buildTop();
    root.insertAdjacentHTML('afterbegin', railHtml);
    const main = document.createElement('div');
    main.className = 'main';
    main.innerHTML = topHtml;
    const content = document.createElement('div');
    content.className = 'content' + (opts.wide ? ' wide' : '');
    content.innerHTML = root.dataset.content || '';
    // move existing children flagged as page content
    const tpl = document.getElementById('page');
    if (tpl) content.innerHTML = tpl.innerHTML;
    main.appendChild(content);
    root.appendChild(main);

    // inject the onboarding modal once per page
    if (!document.getElementById('onboardModal')) {
      document.body.insertAdjacentHTML('beforeend', buildOnboardModal());
    }

    resolveIcons(document);
    wireTenant();
    wireOnboard();
    wireMenu();
    wireDrawers();
    wireActions();
    wireSearch();
  }

  // any element with data-ic="name" gets the svg injected
  function resolveIcons(scope) {
    scope.querySelectorAll('[data-ic]').forEach(el => {
      if (el.dataset.icDone) return;
      el.insertAdjacentHTML('afterbegin', icon(el.dataset.ic));
      el.dataset.icDone = '1';
    });
  }

  function devList() {
    return (window.DEMO && window.DEMO.developments) ? window.DEMO.developments : [];
  }

  // session-only list of developments onboarded during this visit
  const SESSION_DEVS = [];

  function allDevs() { return devList().concat(SESSION_DEVS); }

  function setActiveDev(d) {
    document.getElementById('tChip').textContent = d.short;
    document.getElementById('tName').textContent = d.name;
    document.getElementById('tRole').textContent = d.role;
    const chip = document.getElementById('tChip');
    if (chip && d.accent) chip.style.background = d.accent;
    try { sessionStorage.setItem('soltessa.dev', d.id); } catch (e) {}
  }

  function renderTenantMenu(activeId) {
    const menu = document.getElementById('tenantMenu');
    if (!menu) return;
    const rows = allDevs().map(d => {
      const total = d.lots;
      const sold = (d.status ? (d.status.sold + d.status.production + d.status.closed + d.status.reserved) : 0);
      const isActive = d.id === activeId ? 'active' : '';
      return `<button class="tenant-opt ${isActive}" role="option" data-dev="${d.id}">
        <span class="tenant-opt-chip" style="background:${d.accent || 'var(--accent)'}">${d.short}</span>
        <span class="tenant-opt-meta">
          <span class="tenant-opt-name">${d.name}</span>
          <span class="tenant-opt-sub">${d.builder} · ${total} lots</span>
        </span>
        ${d.id === activeId ? icon('check') : ''}
      </button>`;
    }).join('');
    menu.innerHTML = `
      <div class="tenant-menu-label">Developments</div>
      ${rows}
      <div class="tenant-menu-div"></div>
      <button class="tenant-add" id="onboardOpen">${icon('plus')}<span>Onboard new development</span></button>`;
    resolveIcons(menu);
  }

  function wireTenant() {
    const sw = document.getElementById('tenantSwitch');
    const wrap = sw && sw.closest('.tenant-wrap');
    if (!sw || !wrap) return;

    const devs = allDevs();
    // restore last-selected dev, else first
    let activeId = devs[0] && devs[0].id;
    try { const saved = sessionStorage.getItem('soltessa.dev'); if (saved && devs.some(d => d.id === saved)) activeId = saved; } catch (e) {}
    const active = devs.find(d => d.id === activeId) || devs[0];
    if (active) setActiveDev(active);
    renderTenantMenu(activeId);

    function close() { wrap.classList.remove('open'); sw.setAttribute('aria-expanded', 'false'); }
    function toggle() {
      const open = wrap.classList.toggle('open');
      sw.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    sw.addEventListener('click', e => { e.stopPropagation(); toggle(); });

    document.getElementById('tenantMenu').addEventListener('click', e => {
      const opt = e.target.closest('[data-dev]');
      if (opt) {
        const d = allDevs().find(x => x.id === opt.dataset.dev);
        if (d) { setActiveDev(d); activeId = d.id; renderTenantMenu(activeId); }
        close();
        return;
      }
      if (e.target.closest('#onboardOpen')) { close(); openOnboard(); }
    });

    document.addEventListener('click', e => { if (!wrap.contains(e.target)) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

    // expose so the onboarding flow can refresh + select the new dev
    wireTenant._refresh = (newId) => { activeId = newId || activeId; renderTenantMenu(activeId); };
  }

  // ---- Onboarding a new development ----
  function buildOnboardModal() {
    const scopeOpts = ['Flooring', 'Cabinets', 'Countertops', 'Surrounds', 'Window coverings'];
    const segOpts = ['Entry-level / first-time buyer', 'Move-up single-family', 'Luxury single-family', 'Active-adult / 55+', 'Multifamily / attached'];
    return `
    <div class="modal-scrim" id="onboardScrim"></div>
    <div class="modal" id="onboardModal" role="dialog" aria-modal="true" aria-labelledby="onboardTitle">
      <div class="modal-head">
        <div>
          <div class="eyebrow">Settings · Multi-tenant <span class="prov boss">BOSS</span></div>
          <h2 class="modal-title" id="onboardTitle">Onboard a new development</h2>
        </div>
        <button class="btn-icon" id="onboardClose" aria-label="Close">${icon('x')}</button>
      </div>
      <div class="modal-body">
        <p class="modal-intro">Set up a new community so designers can start selection sessions against it. You can refine the plan mix, lot grid, and builder programs afterward in Lots &amp; Communities and Pricing &amp; Catalog.</p>

        <div class="form-grid">
          <label class="field span-2"><span class="field-lbl">Development name</span>
            <input id="ob-name" placeholder="e.g. Saguaro Crossing" /></label>

          <label class="field"><span class="field-lbl">Builder / client</span>
            <input id="ob-builder" placeholder="e.g. Sunridge Communities" /></label>

          <label class="field"><span class="field-lbl">City / market</span>
            <input id="ob-city" placeholder="e.g. Henderson, NV" /></label>

          <label class="field"><span class="field-lbl">Number of lots</span>
            <input id="ob-lots" type="number" min="1" placeholder="48" /></label>

          <label class="field"><span class="field-lbl">Buyer segment</span>
            <select id="ob-seg">${segOpts.map(s => `<option>${s}</option>`).join('')}</select></label>

          <label class="field"><span class="field-lbl">Price band <span class="opt">optional</span></span>
            <input id="ob-price" placeholder="$520k–$680k" /></label>

          <label class="field"><span class="field-lbl">First close target <span class="opt">optional</span></span>
            <input id="ob-close" placeholder="e.g. Nov 2026" /></label>

          <div class="field span-2"><span class="field-lbl">Scope of work</span>
            <div class="chip-set" id="ob-scope">
              ${scopeOpts.map((s, i) => `<button type="button" class="chip-toggle ${i < 3 ? 'on' : ''}" data-scope="${s}">${s}</button>`).join('')}
            </div></div>

          <div class="field span-2"><span class="field-lbl">Assign lead designer</span>
            <div class="chip-set" id="ob-designer">
              ${['Taylor Morgan', 'Dana Reyes', 'Unassigned'].map((s, i) => `<button type="button" class="chip-toggle ${i === 0 ? 'on' : ''}" data-designer="${s}">${s}</button>`).join('')}
            </div></div>
        </div>

        <div class="notice info mt-16"><span data-ic="info"></span><div>Lots are created as <strong>Available</strong> and a starter plan-allowance template is applied. Demo only — nothing is saved to a server.</div></div>
      </div>
      <div class="modal-foot">
        <button class="btn ghost" id="onboardCancel">Cancel</button>
        <button class="btn primary" id="onboardCreate">${icon('check')}Create development</button>
      </div>
    </div>`;
  }

  function openOnboard() {
    document.getElementById('onboardScrim').classList.add('open');
    document.getElementById('onboardModal').classList.add('open');
    const n = document.getElementById('ob-name'); if (n) n.focus();
  }
  function closeOnboard() {
    document.getElementById('onboardScrim').classList.remove('open');
    document.getElementById('onboardModal').classList.remove('open');
  }

  function wireOnboard() {
    if (!document.getElementById('onboardModal')) return;
    document.getElementById('onboardClose').addEventListener('click', closeOnboard);
    document.getElementById('onboardCancel').addEventListener('click', closeOnboard);
    document.getElementById('onboardScrim').addEventListener('click', closeOnboard);

    // chip toggles (scope = multi, designer = single)
    document.querySelectorAll('#ob-scope .chip-toggle').forEach(c =>
      c.addEventListener('click', () => c.classList.toggle('on')));
    document.querySelectorAll('#ob-designer .chip-toggle').forEach(c =>
      c.addEventListener('click', () => {
        document.querySelectorAll('#ob-designer .chip-toggle').forEach(x => x.classList.remove('on'));
        c.classList.add('on');
      }));

    document.getElementById('onboardCreate').addEventListener('click', () => {
      const name = (document.getElementById('ob-name').value || '').trim();
      if (!name) { document.getElementById('ob-name').focus(); document.getElementById('ob-name').classList.add('err'); return; }
      const builder = (document.getElementById('ob-builder').value || '').trim() || 'New builder client';
      const city = (document.getElementById('ob-city').value || '').trim() || 'Las Vegas, NV';
      const lots = parseInt(document.getElementById('ob-lots').value, 10) || 24;
      const seg = document.getElementById('ob-seg').value;
      const price = (document.getElementById('ob-price').value || '').trim() || '—';
      const close = (document.getElementById('ob-close').value || '').trim() || 'TBD';
      const scope = Array.from(document.querySelectorAll('#ob-scope .chip-toggle.on')).map(c => c.dataset.scope);
      const designer = (document.querySelector('#ob-designer .chip-toggle.on') || {}).dataset?.designer || 'Unassigned';
      const short = name.split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase() || 'NW';
      const accents = ['#c2703d', '#8a6d3b', '#3d6b8e', '#3f7d58', '#9a5b4a', '#5a6b8c'];
      const id = 'NEW' + (SESSION_DEVS.length + 1);

      const dev = {
        id, short, name, builder, city,
        role: 'New development · ' + city.split(',')[0],
        scope: scope.length ? scope : ['Flooring'],
        segment: seg, lots, priceBand: price, designer,
        started: 'Jun 2026', firstClose: close, buildOut: 'TBD',
        status: { available: lots, reserved: 0, sold: 0, production: 0, closed: 0 },
        plans: [], accent: accents[SESSION_DEVS.length % accents.length], _new: true,
      };
      SESSION_DEVS.push(dev);
      setActiveDev(dev);
      if (wireTenant._refresh) wireTenant._refresh(id);
      closeOnboard();
      toast(`“${name}” created — ${lots} lots, ${scope.length || 1} scope categories. Now the active development.`);
    });
  }

  function toast(msg) {
    let t = document.getElementById('soltessa-toast');
    if (!t) { t = document.createElement('div'); t.id = 'soltessa-toast'; t.className = 'toast'; document.body.appendChild(t); }
    t.innerHTML = `${icon('check')}<span>${msg}</span>`;
    resolveIcons(t);
    t.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(() => t.classList.remove('show'), 4200);
  }

  function wireMenu() {
    const t = document.getElementById('menuToggle');
    const rail = document.getElementById('rail');
    if (t && rail) t.addEventListener('click', () => rail.classList.toggle('open'));
  }

  // ============================================================
  //  Generic interaction layer (used by every page)
  // ============================================================

  // A reusable modal. opts: { title, eyebrow, body, size, actions:[{label,kind,onClick,close}] }
  function modal(opts) {
    opts = opts || {};
    let scrim = document.getElementById('genModalScrim');
    let m = document.getElementById('genModal');
    if (!scrim) {
      document.body.insertAdjacentHTML('beforeend',
        '<div class="modal-scrim" id="genModalScrim"></div><div class="modal" id="genModal" role="dialog" aria-modal="true"></div>');
      scrim = document.getElementById('genModalScrim');
      m = document.getElementById('genModal');
      scrim.addEventListener('click', closeModal);
      document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
    }
    m.style.width = opts.size === 'lg' ? 'min(760px,95vw)' : opts.size === 'sm' ? 'min(440px,94vw)' : 'min(620px,94vw)';
    const acts = (opts.actions || [{ label: 'Close', kind: 'ghost', close: true }]).map((a, i) =>
      `<button class="btn ${a.kind || 'ghost'}" data-act="${i}">${a.icon ? icon(a.icon) : ''}${a.label}</button>`).join('');
    m.innerHTML = `
      <div class="modal-head">
        <div>${opts.eyebrow ? `<div class="eyebrow">${opts.eyebrow}</div>` : ''}<h2 class="modal-title">${opts.title || ''}</h2></div>
        <button class="btn-icon" id="genModalClose" aria-label="Close">${icon('x')}</button>
      </div>
      <div class="modal-body">${opts.body || ''}</div>
      ${(opts.actions !== null) ? `<div class="modal-foot">${acts}</div>` : ''}`;
    resolveIcons(m);
    document.getElementById('genModalClose').addEventListener('click', closeModal);
    (opts.actions || []).forEach((a, i) => {
      const btn = m.querySelector(`[data-act="${i}"]`);
      if (btn) btn.addEventListener('click', () => {
        let keep = false;
        if (a.onClick) keep = a.onClick(m) === false ? false : keep;
        if (a.close !== false) closeModal();
      });
    });
    requestAnimationFrame(() => { scrim.classList.add('open'); m.classList.add('open'); });
    const f = m.querySelector('input,select,textarea,button.btn'); if (f && opts.focus !== false) setTimeout(() => f.focus && f.focus(), 60);
    return m;
  }
  function closeModal() {
    const s = document.getElementById('genModalScrim'), m = document.getElementById('genModal');
    if (s) s.classList.remove('open'); if (m) m.classList.remove('open');
  }

  // Fill the shared side drawer with arbitrary content and open it.
  function drawer(opts) {
    opts = opts || {};
    let d = document.getElementById('genDrawer');
    if (!d) {
      document.body.insertAdjacentHTML('beforeend',
        `<div class="drawer" id="genDrawer" style="width:${opts.width || 540}px"><div class="drawer-head"><div id="genDrawerHead"></div><button class="btn-icon" data-drawer-close aria-label="Close">${icon('x')}</button></div><div class="drawer-body" id="genDrawerBody"></div></div>`);
      d = document.getElementById('genDrawer');
      resolveIcons(d);
    }
    d.style.width = (opts.width || 540) + 'px';
    document.getElementById('genDrawerHead').innerHTML =
      `${opts.eyebrow ? `<div class="eyebrow">${opts.eyebrow}</div>` : ''}<div class="drawer-title">${opts.title || ''}</div>`;
    document.getElementById('genDrawerBody').innerHTML = opts.body || '';
    resolveIcons(d);
    openDrawer('genDrawer');
    return d;
  }

  // confirm dialog → resolves via callback
  function confirmAction(opts) {
    modal({
      title: opts.title || 'Confirm', eyebrow: opts.eyebrow, size: 'sm',
      body: `<p class="modal-intro" style="margin:0">${opts.message || 'Are you sure?'}</p>`,
      actions: [
        { label: opts.cancelLabel || 'Cancel', kind: 'ghost' },
        { label: opts.confirmLabel || 'Confirm', kind: opts.danger ? 'danger' : 'primary', icon: opts.icon || 'check', onClick: () => { if (opts.onConfirm) opts.onConfirm(); } },
      ],
    });
  }

  // read all [data-field] inputs inside a container into {key:value}
  function readForm(scope) {
    const out = {};
    scope.querySelectorAll('[data-field]').forEach(el => {
      if (el.type === 'checkbox') out[el.dataset.field] = el.checked;
      else out[el.dataset.field] = el.value;
    });
    scope.querySelectorAll('.chip-set[data-field]').forEach(cs => {
      out[cs.dataset.field] = Array.from(cs.querySelectorAll('.chip-toggle.on')).map(c => c.dataset.val || c.textContent.trim());
    });
    return out;
  }

  // Generic page wiring: declarative attributes any page can use.
  function wireActions() {
    document.body.addEventListener('click', e => {
      // simple toast feedback
      const t = e.target.closest('[data-toast]');
      if (t) { toast(t.getAttribute('data-toast')); }

      // chip-set toggles (multi by default; single if data-single)
      const chip = e.target.closest('.chip-toggle');
      if (chip && chip.closest('.chip-set')) {
        const set = chip.closest('.chip-set');
        if (set.hasAttribute('data-single')) { set.querySelectorAll('.chip-toggle').forEach(c => c.classList.remove('on')); chip.classList.add('on'); }
        else chip.classList.toggle('on');
      }

      // filter chips (.fchip) — visual active state within a group
      const fc = e.target.closest('.fchip');
      if (fc && fc.parentElement) {
        const grp = fc.parentElement;
        if (!fc.hasAttribute('data-multi')) grp.querySelectorAll('.fchip').forEach(x => x.classList.remove('active'));
        fc.classList.toggle('active');
        applyFilter(fc.closest('[data-filter-scope]') || document, grp);
      }

      // segmented control (.seg) generic — toggles [data-view] panels by data-tab
      const segBtn = e.target.closest('.seg button[data-tab]');
      if (segBtn) {
        const seg = segBtn.closest('.seg');
        seg.querySelectorAll('button').forEach(b => b.classList.remove('active'));
        segBtn.classList.add('active');
        const tab = segBtn.dataset.tab;
        // scope to the nearest container holding the panels, else document
        const host = document;
        host.querySelectorAll('[data-panel]').forEach(p => { p.style.display = (p.dataset.panel === tab) ? '' : 'none'; });
        // also support [data-view] (sub-view switches like map/table)
        if (segBtn.dataset.view) {
          host.querySelectorAll(`[data-viewgroup="${segBtn.dataset.viewgroup || ''}"]`).forEach(v => {
            v.style.display = (v.dataset.view === segBtn.dataset.view) ? '' : 'none';
          });
        }
      }
    });
  }

  // crude client-side filter: rows whose text includes the chip label (data-match)
  function applyFilter(scope, group) {
    const active = Array.from(group.querySelectorAll('.fchip.active')).map(c => (c.dataset.match || c.textContent).trim().toLowerCase());
    const tableSel = group.getAttribute('data-target');
    if (!tableSel) return;
    const tbody = (scope.querySelector ? scope.querySelector(tableSel) : null) || document.querySelector(tableSel);
    if (!tbody) return;
    const showAll = active.length === 0 || active.includes('all');
    tbody.querySelectorAll('tr').forEach(tr => {
      if (showAll) { tr.style.display = ''; return; }
      const txt = tr.textContent.toLowerCase();
      tr.style.display = active.some(a => txt.includes(a)) ? '' : 'none';
    });
  }

  // search box: live-filter every table on the page by row text
  function wireSearch() {
    const inp = document.querySelector('.search input');
    if (!inp) return;
    inp.addEventListener('input', () => {
      const q = inp.value.trim().toLowerCase();
      document.querySelectorAll('table.tbl tbody tr').forEach(tr => {
        tr.style.display = (!q || tr.textContent.toLowerCase().includes(q)) ? '' : 'none';
      });
    });
  }


  // generic drawer open/close via [data-drawer] triggers and #<id> drawers
  function wireDrawers() {
    document.body.addEventListener('click', e => {
      const trig = e.target.closest('[data-drawer]');
      if (trig) {
        openDrawer(trig.getAttribute('data-drawer'));
        return;
      }
      if (e.target.closest('[data-drawer-close]') || e.target.classList.contains('drawer-scrim')) {
        closeDrawers();
      }
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawers(); });
  }
  function openDrawer(id) {
    const d = document.getElementById(id);
    const s = document.getElementById('scrim');
    if (d) d.classList.add('open');
    if (s) s.classList.add('open');
  }
  function closeDrawers() {
    document.querySelectorAll('.drawer.open').forEach(d => d.classList.remove('open'));
    const s = document.getElementById('scrim'); if (s) s.classList.remove('open');
  }

  // little inline sparkline generator
  function spark(values, w, h, color) {
    w = w || 64; h = h || 22; color = color || 'var(--accent)';
    const max = Math.max(...values), min = Math.min(...values);
    const rng = (max - min) || 1;
    const pts = values.map((v, i) => {
      const x = (i / (values.length - 1)) * w;
      const y = h - ((v - min) / rng) * (h - 3) - 1.5;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(' ');
    return `<svg class="kpi-spark" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none">
      <polyline points="${pts}" stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" opacity=".55"/></svg>`;
  }

  window.Soltessa = { mount, icon, spark, openDrawer, closeDrawers, resolveIcons, openOnboard, NAV,
    modal, closeModal, drawer, confirmAction, toast, readForm };
})();
