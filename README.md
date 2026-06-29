<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Dashboard · Soltessa</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/css/app.css">
</head>
<body>
<div id="app" data-page="dashboard"></div>
<div class="drawer-scrim" id="scrim"></div>

<template id="page">
  <div class="page-head">
    <div class="page-head-row">
      <div>
        <div class="eyebrow">Tuesday · June 29, 2026 &nbsp;·&nbsp; Builders Design Group</div>
        <h1 class="page-title">Good morning, Taylor</h1>
        <p class="page-sub">Four communities in flight across two builders. Six selection sessions need attention today, and two subcontractor insurance certificates lapse this week.</p>
      </div>
      <div class="flex gap-10">
        <button class="btn"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5M12 15V3"/></svg>Export brief</button>
        <button class="btn primary"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 5v14M5 12h14"/></svg>New selection session</button>
      </div>
    </div>
  </div>

  <!-- Signature: the data lineage rail -->
  <div style="margin-bottom:22px">
    <div class="flex items-center between mb-16" style="margin-bottom:9px">
      <div class="eyebrow" style="margin:0">The Soltessa lineage &nbsp;·&nbsp; one home, end to end</div>
      <span class="muted fs-12">Lot 14 · Sienna Pass · Acacia 2210 · the Patels</span>
    </div>
    <div class="lineage" id="lineage"></div>
  </div>

  <!-- KPIs -->
  <div class="kpi-grid mb-16" id="kpis"></div>

  <div class="grid grid-2-1 mb-16">
    <!-- Attention queue -->
    <div class="card">
      <div class="card-head">
        <div>
          <div class="card-title">${ICON_inbox} Needs your attention</div>
          <div class="card-sub">Items blocking progress along the pipeline</div>
        </div>
        <a class="btn sm ghost" href="quotes.html">View all</a>
      </div>
      <div class="card-body flush">
        <div class="tbl-wrap">
          <table class="tbl tbl-clickable">
            <thead><tr><th>Item</th><th>Stage</th><th>Lot / Community</th><th>Owner</th><th class="right">Status</th></tr></thead>
            <tbody id="attn"></tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Allowance pulse -->
    <div class="card">
      <div class="card-head">
        <div class="card-title">${ICON_dollar} Allowance pulse</div>
      </div>
      <div class="card-body">
        <p class="muted fs-12" style="margin:0 0 16px">Live selections vs. builder allowance across active lots this week.</p>
        <div id="allow"></div>
        <div class="notice accent mt-16">
          ${ICON_info}
          <div>Net-option logic applied — upgrades show the <b>net</b> over standard, never gross.</div>
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-2">
    <!-- Activity feed -->
    <div class="card">
      <div class="card-head"><div class="card-title">${ICON_clock} Recent activity</div></div>
      <div class="card-body">
        <div class="feed" id="feed"></div>
      </div>
    </div>

    <!-- This week installs + expiring insurance -->
    <div class="stack gap-16">
      <div class="card">
        <div class="card-head"><div class="card-title">${ICON_truck} This week's installs</div><span class="badge accent"><span class="d"></span>7 scheduled</span></div>
        <div class="card-body flush">
          <div class="tbl-wrap"><table class="tbl"><tbody id="installs"></tbody></table></div>
        </div>
      </div>
      <div class="card">
        <div class="card-head"><div class="card-title">${ICON_alert} Insurance expiring</div></div>
        <div class="card-body">
          <div class="stack gap-12" id="insurance"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="assets/data/demo.js"></script>
<script src="assets/js/app.js"></script>
<script>
  // inline icon placeholders resolved before mount
  const S = window.Soltessa;
  document.getElementById('page').innerHTML = document.getElementById('page').innerHTML
    .replaceAll('${ICON_inbox}', S.icon('inbox'))
    .replaceAll('${ICON_dollar}', S.icon('dollar'))
    .replaceAll('${ICON_info}', S.icon('info'))
    .replaceAll('${ICON_clock}', S.icon('clock'))
    .replaceAll('${ICON_truck}', S.icon('truck'))
    .replaceAll('${ICON_alert}', S.icon('alert'));

  S.mount({ active: 'dashboard' });

  // ---- lineage rail ----
  const steps = [
    { n: '01', label: 'Plan + Allowance', state: 'Acacia 2210', cls: 'done' },
    { n: '02', label: 'Selection', state: 'Finalized', cls: 'done' },
    { n: '03', label: 'Price Request', state: 'Answered', cls: 'done' },
    { n: '04', label: 'Quote', state: 'Approved', cls: 'done' },
    { n: '05', label: 'Contract', state: 'Signed', cls: 'done' },
    { n: '06', label: 'Purchase Orders', state: '3 issued · 1 change order', cls: 'current' },
    { n: '07', label: 'Lot', state: 'In production', cls: '' },
    { n: '08', label: 'Schedule', state: 'Install Aug 12', cls: '' },
    { n: '09', label: 'Service', state: '—', cls: '' },
  ];
  document.getElementById('lineage').innerHTML = steps.map((s, i) => {
    const sep = i < steps.length - 1 ? `<span class="lineage-sep">${S.icon('chevronR')}</span>` : '';
    return `<div class="lineage-step ${s.cls}">
      <span class="ls-num">${s.n}</span>
      <span><span class="ls-label">${s.label}</span><br><span class="ls-state">${s.state}</span></span>
    </div>${sep}`;
  }).join('');

  // ---- KPIs ----
  const kpis = [
    { label: 'Active lots', icon: 'lots', value: '83', delta: '+6 this month', d: 'up', s: [60,64,67,71,74,78,83] },
    { label: 'Pending selections', icon: 'studio', value: '14', delta: '6 need attention', d: 'flat', s: [9,11,10,13,12,15,14] },
    { label: 'Open price requests', icon: 'tag', value: '5', delta: 'avg 1.4-day turnaround', d: 'up', s: [8,7,9,6,5,6,5] },
    { label: 'Open quotes', icon: 'quotes', value: '4', delta: '$182k in flight', d: 'flat', s: [3,5,4,6,5,4,4] },
    { label: 'POs awaiting issue', icon: 'purchasing', value: '11', delta: '3 split by supplier', d: 'down', s: [18,16,15,13,12,11,11] },
    { label: 'Installs this week', icon: 'truck', value: '7', delta: '2 pickups · 5 on-site', d: 'up', s: [4,5,3,6,5,7,7] },
  ];
  document.getElementById('kpis').innerHTML = kpis.map(k => `
    <div class="kpi">
      <div class="kpi-label">${S.icon(k.icon)} ${k.label}</div>
      <div class="kpi-value">${k.value}</div>
      <div class="kpi-delta ${k.d}">${k.delta}</div>
      ${S.spark(k.s)}
    </div>`).join('');

  // ---- attention queue ----
  const attn = [
    ['Calacatta quartz price', 'Price Request', 'Lot 22 · Desert Vista', 'Cambria', '<span class="badge warn"><span class="d"></span>Awaiting vendor</span>'],
    ['Upgraded kitchen package', 'Quote', 'Lot 09 · Cholla Ridge', 'Designer', '<span class="badge info"><span class="d"></span>Pending approval</span>'],
    ['Stair-nose transition', 'Selection', 'Lot 31 · Desert Vista', 'Designer', '<span class="badge danger"><span class="d"></span>Cutoff in 2 days</span>'],
    ['Tile PO — primary bath', 'Purchase Order', 'Lot 14 · Sienna Pass', 'Purchasing', '<span class="badge neutral"><span class="d"></span>Change order</span>'],
    ['Color: cabinet finish', 'Color Selection', 'Lot 17 · Sienna Pass', 'Buyer', '<span class="badge warn"><span class="d"></span>Outstanding</span>'],
    ['Carpet allowance overage', 'Selection', 'Lot 05 · Aspen Meadows', 'Sales', '<span class="badge info"><span class="d"></span>Needs sign-off</span>'],
  ];
  document.getElementById('attn').innerHTML = attn.map(r => `
    <tr><td class="primary">${r[0]}</td><td><span class="tag">${r[1]}</span></td>
    <td>${r[2]}</td><td class="muted">${r[3]}</td><td class="right">${r[4]}</td></tr>`).join('');

  // ---- allowance pulse ----
  const allow = [
    { cat: 'Flooring', used: 15240, cap: 14200 },
    { cat: 'Cabinets', used: 9120, cap: 9800 },
    { cat: 'Countertops', used: 6980, cap: 6400 },
  ];
  document.getElementById('allow').innerHTML = allow.map(a => {
    const pct = Math.min(100, (a.used / a.cap) * 100);
    const over = a.used > a.cap;
    const warn = !over && pct > 88;
    const delta = a.used - a.cap;
    const cls = over ? 'over' : (warn ? 'warn' : '');
    const dtxt = over ? `+$${delta.toLocaleString()} over` : `$${Math.abs(delta).toLocaleString()} under`;
    return `<div style="margin-bottom:15px">
      <div class="allow-row"><span class="cat">${a.cat}</span>
        <span class="delta ${over?'over':'under'}">${dtxt}</span></div>
      <div class="allow-track"><div class="allow-fill ${cls}" style="width:${pct}%"></div></div>
      <div class="muted fs-12 tnum" style="margin-top:4px">$${a.used.toLocaleString()} of $${a.cap.toLocaleString()} allowance</div>
    </div>`;
  }).join('');

  // ---- feed ----
  const feed = [
    ['ok', 'check', '<b>Quote Q-1043</b> approved by Sunridge — Lot 09 upgraded kitchen', '18 min ago'],
    ['accent', 'tag', '<b>Cambria</b> answered price request PR-228 — Calacatta Gold confirmed at $64/sq ft', '52 min ago'],
    ['info', 'purchasing', '<b>3 POs</b> generated and split across Daltile, Shaw, KraftMaid — Lot 14', '1 hr ago'],
    ['', 'studio', 'Selection finalized for <b>Lot 31 · Desert Vista</b> — Mesquite 3120', '2 hr ago'],
    ['', 'truck', 'Install completed — <b>Lot 02 · Sienna Pass</b> hardwood great room', 'Yesterday'],
    ['accent', 'edit', 'Change order CO-58 raised after re-selection on <b>Lot 14</b> primary bath tile', 'Yesterday'],
  ];
  document.getElementById('feed').innerHTML = feed.map(f => `
    <div class="feed-item">
      <div class="feed-dot ${f[0]}">${S.icon(f[1])}</div>
      <div class="feed-body"><div class="t">${f[2]}</div><div class="feed-time">${f[3]}</div></div>
    </div>`).join('');

  // ---- installs ----
  const installs = [
    ['Mon', 'Hardwood great room', 'Lot 14 · Sienna Pass', 'Premier Floors'],
    ['Tue', 'Cabinet set', 'Lot 09 · Cholla Ridge', 'Vegas Cabinet Co'],
    ['Wed', 'Countertop template', 'Lot 22 · Desert Vista', 'StoneWorks'],
    ['Thu', 'Tile — baths', 'Lot 17 · Sienna Pass', 'TileRight'],
    ['Fri', 'Carpet — bedrooms', 'Lot 05 · Aspen Meadows', 'Premier Floors'],
  ];
  document.getElementById('installs').innerHTML = installs.map(r => `
    <tr><td><span class="tag">${r[0]}</span></td><td class="primary">${r[1]}<div class="muted">${r[2]}</div></td>
    <td class="muted right">${r[3]}</td></tr>`).join('');

  // ---- insurance ----
  const ins = [
    { name: 'Premier Floors', type: 'General liability', days: 4, cls: 'danger' },
    { name: 'StoneWorks', type: 'Workers comp', days: 9, cls: 'warn' },
  ];
  document.getElementById('insurance').innerHTML = ins.map(i => `
    <div class="flex items-center between">
      <div><div class="fw-600">${i.name}</div><div class="muted fs-12">${i.type}</div></div>
      <span class="badge ${i.cls}"><span class="d"></span>${i.days} days</span>
    </div>`).join('');
</script>
</body>
</html>
