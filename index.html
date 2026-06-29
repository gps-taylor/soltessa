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

  const TENANTS = [
    { id: 'bdg',  name: 'Builders Design Group', short: 'BD', role: 'Pilot tenant · Las Vegas' },
    { id: 'sun',  name: 'Sunridge Communities',  short: 'SR', role: 'Builder client' },
    { id: 'mesa', name: 'Mesa Verde Homes',      short: 'MV', role: 'Builder client' },
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

      <div class="tenant-switch" id="tenantSwitch" role="button" tabindex="0" aria-label="Switch builder client">
        <span class="tenant-chip" id="tChip">BD</span>
        <span class="tenant-meta">
          <span class="tenant-name" id="tName">Builders Design Group</span>
          <span class="tenant-role" id="tRole">Pilot tenant · Las Vegas</span>
        </span>
        ${icon('chevron')}
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

    resolveIcons(document);
    wireTenant();
    wireMenu();
    wireDrawers();
  }

  // any element with data-ic="name" gets the svg injected
  function resolveIcons(scope) {
    scope.querySelectorAll('[data-ic]').forEach(el => {
      if (el.dataset.icDone) return;
      el.insertAdjacentHTML('afterbegin', icon(el.dataset.ic));
      el.dataset.icDone = '1';
    });
  }

  function wireTenant() {
    const sw = document.getElementById('tenantSwitch');
    if (!sw) return;
    let i = 0;
    sw.addEventListener('click', () => {
      i = (i + 1) % TENANTS.length;
      const t = TENANTS[i];
      document.getElementById('tChip').textContent = t.short;
      document.getElementById('tName').textContent = t.name;
      document.getElementById('tRole').textContent = t.role;
    });
    sw.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); sw.click(); } });
  }

  function wireMenu() {
    const t = document.getElementById('menuToggle');
    const rail = document.getElementById('rail');
    if (t && rail) t.addEventListener('click', () => rail.classList.toggle('open'));
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

  window.Soltessa = { mount, icon, spark, openDrawer, closeDrawers, resolveIcons, TENANTS, NAV };
})();
