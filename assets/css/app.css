/* ============================================================
   Soltessa — design system
   Palette: cool slate/ink surfaces, one warm amber-clay accent
   Type: Fraunces (display) + Inter (UI/body) + IBM Plex Mono (data)
   ============================================================ */

:root {
  /* Surfaces — cool, calm neutrals */
  --bg:        #f6f6f4;   /* app canvas */
  --surface:   #ffffff;   /* cards, panels */
  --surface-2: #f1f1ee;   /* subtle fills, table stripes */
  --surface-3: #e9e9e5;
  --rail:      #14181f;    /* left nav — deep ink */
  --rail-2:    #1c222c;
  --rail-text: #aeb6c2;
  --rail-text-active: #ffffff;

  /* Ink / text */
  --ink:       #1a1d23;
  --ink-2:     #4a5160;
  --ink-3:     #79808d;
  --ink-4:     #a4aab4;

  /* Warm accent — amber-clay (the one bold color) */
  --accent:    #c2703d;
  --accent-d:  #a85c2e;
  --accent-l:  #e7c4a8;
  --accent-bg: #f9efe6;

  /* Status hues — muted, operational */
  --ok:        #3f7d58;
  --ok-bg:     #e6f0ea;
  --warn:      #b07d27;
  --warn-bg:   #f7efdd;
  --danger:    #b1493f;
  --danger-bg: #f6e6e3;
  --info:      #3d6b8e;
  --info-bg:   #e6eef4;
  --neutral:   #6b7280;
  --neutral-bg:#edeef0;

  /* Lines & radius */
  --line:      #e2e2dd;
  --line-2:    #d4d4cd;
  --r-sm: 6px; --r: 10px; --r-lg: 14px; --r-xl: 20px;

  /* Shadow */
  --shadow-sm: 0 1px 2px rgba(20,24,31,.06), 0 1px 3px rgba(20,24,31,.05);
  --shadow:    0 2px 6px rgba(20,24,31,.07), 0 6px 18px rgba(20,24,31,.06);
  --shadow-lg: 0 12px 40px rgba(20,24,31,.14);

  /* Type */
  --display: "Fraunces", Georgia, serif;
  --ui: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --mono: "IBM Plex Mono", "SF Mono", ui-monospace, monospace;

  --nav-w: 246px;
  --top-h: 60px;
}

* { box-sizing: border-box; }
html { -webkit-text-size-adjust: 100%; }
body {
  margin: 0;
  font-family: var(--ui);
  background: var(--bg);
  color: var(--ink);
  font-size: 14px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
a { color: inherit; text-decoration: none; }
button { font-family: inherit; cursor: pointer; }
h1,h2,h3,h4 { margin: 0; font-weight: 600; letter-spacing: -0.01em; }
:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; border-radius: 4px; }

/* ============================== APP SHELL ============================== */
.app { display: flex; min-height: 100vh; }

/* ---- Left nav rail ---- */
.rail {
  width: var(--nav-w);
  background: var(--rail);
  color: var(--rail-text);
  flex-shrink: 0;
  display: flex; flex-direction: column;
  position: fixed; inset: 0 auto 0 0; height: 100vh;
  z-index: 40;
  border-right: 1px solid #000;
}
.rail-brand {
  display: flex; align-items: center; gap: 11px;
  padding: 18px 20px 16px;
}
.rail-logo {
  width: 30px; height: 30px; flex-shrink: 0;
}
.rail-wordmark {
  font-family: var(--display);
  font-weight: 600;
  font-size: 21px;
  color: #fff;
  letter-spacing: -0.02em;
}
.rail-wordmark .dot { color: var(--accent); }

.tenant-switch {
  margin: 0 14px 8px;
  background: var(--rail-2);
  border: 1px solid #2b323d;
  border-radius: var(--r);
  padding: 9px 11px;
  display: flex; align-items: center; gap: 10px;
  cursor: pointer;
  transition: border-color .15s;
}
.tenant-switch:hover { border-color: #3a424f; }
.tenant-chip {
  width: 26px; height: 26px; border-radius: 7px;
  background: linear-gradient(135deg, var(--accent), var(--accent-d));
  color: #fff; font-weight: 700; font-size: 12px;
  display: grid; place-items: center; flex-shrink: 0;
}
.tenant-meta { flex: 1; min-width: 0; }
.tenant-name { color: #fff; font-weight: 600; font-size: 13px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.tenant-role { color: var(--rail-text); font-size: 11px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.tenant-switch svg { color: var(--ink-4); flex-shrink: 0; width: 16px; height: 16px; margin-left: auto; }

.nav-scroll { flex: 1; overflow-y: auto; padding: 6px 0 16px; }
.nav-section-label {
  font-size: 10.5px; text-transform: uppercase; letter-spacing: .08em;
  color: #5d6675; padding: 14px 22px 6px; font-weight: 600;
}
.nav-item {
  display: flex; align-items: center; gap: 12px;
  padding: 9px 22px; color: var(--rail-text);
  font-size: 13.5px; font-weight: 500;
  border-left: 2.5px solid transparent;
  transition: background .12s, color .12s;
}
.nav-item svg { width: 17px; height: 17px; flex-shrink: 0; opacity: .85; }
.nav-item:hover { background: var(--rail-2); color: #e8ebf0; }
.nav-item.active {
  color: var(--rail-text-active);
  background: linear-gradient(90deg, rgba(194,112,61,.16), transparent);
  border-left-color: var(--accent);
}
.nav-item.active svg { opacity: 1; color: var(--accent-l); }
.nav-badge {
  margin-left: auto; background: var(--accent); color: #fff;
  font-size: 10.5px; font-weight: 700; border-radius: 9px;
  padding: 1px 7px; min-width: 18px; text-align: center;
}
.nav-item.active .nav-badge { background: var(--accent); }

.rail-foot {
  padding: 12px 18px; border-top: 1px solid #262d38;
  display: flex; align-items: center; gap: 10px;
}
.rail-avatar {
  width: 30px; height: 30px; border-radius: 50%;
  background: #2f3742; color: #cdd3dc; font-weight: 600; font-size: 12px;
  display: grid; place-items: center;
}
.rail-foot .who { font-size: 12.5px; color: #e8ebf0; font-weight: 500; }
.rail-foot .who small { display: block; color: var(--rail-text); font-size: 11px; font-weight: 400; }

/* ---- Main column ---- */
.main { flex: 1; margin-left: var(--nav-w); min-width: 0; display: flex; flex-direction: column; }

.topbar {
  height: var(--top-h);
  background: rgba(255,255,255,.86);
  backdrop-filter: saturate(1.4) blur(8px);
  border-bottom: 1px solid var(--line);
  position: sticky; top: 0; z-index: 30;
  display: flex; align-items: center; gap: 16px;
  padding: 0 26px;
}
.search {
  display: flex; align-items: center; gap: 9px;
  background: var(--surface-2); border: 1px solid var(--line);
  border-radius: var(--r); padding: 8px 13px; width: 340px; max-width: 38vw;
  color: var(--ink-3);
}
.search input { border: none; background: none; outline: none; flex: 1; font-size: 13.5px; color: var(--ink); font-family: inherit; }
.search kbd {
  font-family: var(--mono); font-size: 10.5px; background: var(--surface);
  border: 1px solid var(--line-2); border-radius: 4px; padding: 1px 5px; color: var(--ink-3);
}
.topbar-spacer { flex: 1; }
.top-action {
  width: 36px; height: 36px; border-radius: 9px;
  border: 1px solid var(--line); background: var(--surface);
  display: grid; place-items: center; color: var(--ink-2);
  position: relative; transition: border-color .15s, background .15s;
}
.top-action:hover { border-color: var(--line-2); background: var(--surface-2); }
.top-action .ping { position: absolute; top: 7px; right: 8px; width: 7px; height: 7px; border-radius: 50%; background: var(--accent); border: 1.5px solid var(--surface); }

.content { padding: 26px 30px 60px; flex: 1; max-width: 1380px; width: 100%; }
.content.wide { max-width: none; }

/* ---- Page header ---- */
.page-head { margin-bottom: 22px; }
.eyebrow {
  font-size: 11.5px; font-weight: 600; letter-spacing: .07em; text-transform: uppercase;
  color: var(--accent-d); margin-bottom: 7px; display: flex; align-items: center; gap: 8px;
}
.page-title { font-family: var(--display); font-size: 30px; font-weight: 600; letter-spacing: -0.02em; color: var(--ink); line-height: 1.1; }
.page-sub { color: var(--ink-2); font-size: 14.5px; margin-top: 6px; max-width: 760px; }
.page-head-row { display: flex; align-items: flex-end; justify-content: space-between; gap: 20px; flex-wrap: wrap; }

/* ============================== LINEAGE RAIL (signature) ============================== */
.lineage {
  display: flex; align-items: stretch; gap: 0;
  background: var(--surface); border: 1px solid var(--line);
  border-radius: var(--r-lg); padding: 4px; overflow-x: auto;
  box-shadow: var(--shadow-sm);
}
.lineage-step {
  display: flex; align-items: center; gap: 9px;
  padding: 8px 14px 8px 13px; border-radius: var(--r);
  white-space: nowrap; color: var(--ink-3); position: relative;
  font-size: 12.5px; flex-shrink: 0;
}
.lineage-step .ls-num {
  font-family: var(--mono); font-size: 10px; font-weight: 600;
  width: 18px; height: 18px; border-radius: 5px; background: var(--surface-3);
  color: var(--ink-3); display: grid; place-items: center;
}
.lineage-step .ls-label { font-weight: 500; }
.lineage-step .ls-state { font-size: 11px; color: var(--ink-4); }
.lineage-step.done { color: var(--ink-2); }
.lineage-step.done .ls-num { background: var(--ok-bg); color: var(--ok); }
.lineage-step.current { background: var(--accent-bg); color: var(--accent-d); }
.lineage-step.current .ls-num { background: var(--accent); color: #fff; }
.lineage-step.current .ls-state { color: var(--accent-d); }
.lineage-sep { display: grid; place-items: center; color: var(--line-2); flex-shrink: 0; }

/* ============================== CARDS / KPIs ============================== */
.kpi-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 14px; }
.kpi {
  background: var(--surface); border: 1px solid var(--line); border-radius: var(--r-lg);
  padding: 16px 17px; box-shadow: var(--shadow-sm); position: relative; overflow: hidden;
}
.kpi-label { font-size: 12px; color: var(--ink-2); font-weight: 500; display: flex; align-items: center; gap: 7px; }
.kpi-label svg { width: 15px; height: 15px; color: var(--ink-4); }
.kpi-value { font-family: var(--display); font-size: 30px; font-weight: 600; color: var(--ink); margin-top: 9px; line-height: 1; letter-spacing: -0.02em; }
.kpi-value small { font-size: 15px; color: var(--ink-3); font-weight: 500; font-family: var(--ui); }
.kpi-delta { font-size: 12px; margin-top: 8px; display: flex; align-items: center; gap: 5px; font-weight: 500; }
.kpi-delta.up { color: var(--ok); }
.kpi-delta.down { color: var(--danger); }
.kpi-delta.flat { color: var(--ink-3); }
.kpi-spark { position: absolute; right: 14px; bottom: 12px; opacity: .9; }

.card {
  background: var(--surface); border: 1px solid var(--line);
  border-radius: var(--r-lg); box-shadow: var(--shadow-sm);
}
.card-head {
  padding: 15px 18px; border-bottom: 1px solid var(--line);
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
}
.card-title { font-size: 14.5px; font-weight: 600; color: var(--ink); display: flex; align-items: center; gap: 9px; }
.card-title svg { width: 16px; height: 16px; color: var(--accent-d); }
.card-sub { font-size: 12.5px; color: var(--ink-3); margin-top: 2px; }
.card-body { padding: 18px; }
.card-body.flush { padding: 0; }

.grid { display: grid; gap: 16px; }
.grid-2 { grid-template-columns: 1fr 1fr; }
.grid-3 { grid-template-columns: repeat(3, 1fr); }
.grid-2-1 { grid-template-columns: 2fr 1fr; }
.grid-1-2 { grid-template-columns: 1fr 2fr; }

/* ============================== TABLES ============================== */
.tbl-wrap { overflow-x: auto; }
table.tbl { width: 100%; border-collapse: collapse; font-size: 13px; }
.tbl thead th {
  text-align: left; font-weight: 600; font-size: 11px; letter-spacing: .04em; text-transform: uppercase;
  color: var(--ink-3); padding: 11px 16px; border-bottom: 1px solid var(--line); white-space: nowrap;
  background: var(--surface);
}
.tbl tbody td { padding: 12px 16px; border-bottom: 1px solid var(--line); color: var(--ink-2); vertical-align: middle; }
.tbl tbody tr:last-child td { border-bottom: none; }
.tbl tbody tr { transition: background .1s; }
.tbl tbody tr:hover { background: var(--surface-2); }
.tbl td .primary { color: var(--ink); font-weight: 600; }
.tbl td .muted { color: var(--ink-3); font-size: 12px; }
.tbl .num { font-family: var(--mono); font-size: 12.5px; text-align: right; }
.tbl .right { text-align: right; }
.tbl-clickable tbody tr { cursor: pointer; }
.tbl-tools { display: flex; align-items: center; gap: 9px; flex-wrap: wrap; }

/* ============================== BADGES / PILLS ============================== */
.badge {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 11.5px; font-weight: 600; padding: 3px 9px; border-radius: 20px; white-space: nowrap;
  line-height: 1.4;
}
.badge .d { width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
.badge.ok      { color: var(--ok); background: var(--ok-bg); }
.badge.warn    { color: var(--warn); background: var(--warn-bg); }
.badge.danger  { color: var(--danger); background: var(--danger-bg); }
.badge.info    { color: var(--info); background: var(--info-bg); }
.badge.neutral { color: var(--neutral); background: var(--neutral-bg); }
.badge.accent  { color: var(--accent-d); background: var(--accent-bg); }

.tag {
  display: inline-flex; align-items: center; gap: 5px; font-size: 11.5px; font-weight: 500;
  padding: 2px 8px; border-radius: var(--r-sm); background: var(--surface-2);
  color: var(--ink-2); border: 1px solid var(--line);
}

/* ============================== BUTTONS ============================== */
.btn {
  display: inline-flex; align-items: center; gap: 7px; justify-content: center;
  font-size: 13px; font-weight: 600; padding: 8px 14px; border-radius: var(--r);
  border: 1px solid var(--line-2); background: var(--surface); color: var(--ink);
  transition: all .14s; white-space: nowrap;
}
.btn svg { width: 15px; height: 15px; }
.btn:hover { background: var(--surface-2); border-color: var(--ink-4); }
.btn.primary { background: var(--accent); border-color: var(--accent); color: #fff; }
.btn.primary:hover { background: var(--accent-d); border-color: var(--accent-d); }
.btn.ghost { background: transparent; border-color: transparent; color: var(--ink-2); }
.btn.ghost:hover { background: var(--surface-2); }
.btn.sm { padding: 5px 10px; font-size: 12px; }
.btn-icon { width: 34px; height: 34px; padding: 0; }

/* segmented control */
.seg { display: inline-flex; background: var(--surface-2); border: 1px solid var(--line); border-radius: var(--r); padding: 3px; gap: 2px; }
.seg button { border: none; background: none; padding: 5px 12px; font-size: 12.5px; font-weight: 500; color: var(--ink-2); border-radius: 7px; }
.seg button.active { background: var(--surface); color: var(--ink); box-shadow: var(--shadow-sm); font-weight: 600; }

/* filter chips */
.filterbar { display: flex; align-items: center; gap: 9px; flex-wrap: wrap; margin-bottom: 16px; }
.fchip {
  display: inline-flex; align-items: center; gap: 7px; font-size: 12.5px; font-weight: 500;
  padding: 7px 12px; border-radius: var(--r); background: var(--surface); border: 1px solid var(--line);
  color: var(--ink-2);
}
.fchip svg { width: 14px; height: 14px; color: var(--ink-4); }
.fchip.active { border-color: var(--accent); color: var(--accent-d); background: var(--accent-bg); }

/* ============================== ALLOWANCE WIDGET ============================== */
.allow-track { height: 9px; border-radius: 6px; background: var(--surface-3); overflow: hidden; position: relative; }
.allow-fill { height: 100%; border-radius: 6px; background: var(--ok); transition: width .4s; }
.allow-fill.over { background: var(--danger); }
.allow-fill.warn { background: var(--warn); }
.allow-row { display: flex; align-items: center; justify-content: space-between; font-size: 12.5px; margin-bottom: 5px; }
.allow-row .cat { font-weight: 600; color: var(--ink); }
.allow-row .delta.over { color: var(--danger); font-weight: 600; }
.allow-row .delta.under { color: var(--ok); font-weight: 600; }

/* ============================== MISC ============================== */
.swatch { width: 34px; height: 34px; border-radius: 7px; border: 1px solid var(--line-2); flex-shrink: 0; background-size: cover; }
.swatch-sm { width: 22px; height: 22px; border-radius: 5px; }
.flex { display: flex; }
.items-center { align-items: center; }
.gap-8 { gap: 8px; } .gap-10 { gap: 10px; } .gap-12 { gap: 12px; } .gap-16 { gap: 16px; }
.mt-16 { margin-top: 16px; } .mt-24 { margin-top: 24px; } .mb-16 { margin-bottom: 16px; }
.between { justify-content: space-between; }
.wrap { flex-wrap: wrap; }
.muted { color: var(--ink-3); }
.stack { display: flex; flex-direction: column; }
.cell-lead { display: flex; align-items: center; gap: 11px; }

.empty {
  text-align: center; padding: 46px 20px; color: var(--ink-3);
}
.empty svg { width: 38px; height: 38px; color: var(--ink-4); margin-bottom: 12px; }
.empty h4 { font-size: 15px; color: var(--ink); margin-bottom: 5px; }

/* side drawer */
.drawer-scrim { position: fixed; inset: 0; background: rgba(20,24,31,.34); z-index: 60; opacity: 0; pointer-events: none; transition: opacity .2s; }
.drawer-scrim.open { opacity: 1; pointer-events: auto; }
.drawer {
  position: fixed; top: 0; right: 0; height: 100vh; width: 480px; max-width: 92vw;
  background: var(--surface); z-index: 70; box-shadow: var(--shadow-lg);
  transform: translateX(100%); transition: transform .26s cubic-bezier(.4,0,.2,1);
  display: flex; flex-direction: column;
}
.drawer.open { transform: translateX(0); }
.drawer-head { padding: 18px 20px; border-bottom: 1px solid var(--line); display: flex; align-items: flex-start; justify-content: space-between; }
.drawer-body { padding: 20px; overflow-y: auto; flex: 1; }

/* meta list */
.meta { display: grid; grid-template-columns: 116px 1fr; gap: 9px 16px; font-size: 13px; }
.meta dt { color: var(--ink-3); }
.meta dd { margin: 0; color: var(--ink); font-weight: 500; }

/* timeline / activity feed */
.feed { display: flex; flex-direction: column; }
.feed-item { display: flex; gap: 13px; padding: 12px 0; border-bottom: 1px solid var(--line); }
.feed-item:last-child { border-bottom: none; }
.feed-dot { width: 30px; height: 30px; border-radius: 9px; display: grid; place-items: center; flex-shrink: 0; background: var(--surface-2); color: var(--ink-2); }
.feed-dot svg { width: 15px; height: 15px; }
.feed-dot.accent { background: var(--accent-bg); color: var(--accent-d); }
.feed-dot.ok { background: var(--ok-bg); color: var(--ok); }
.feed-dot.info { background: var(--info-bg); color: var(--info); }
.feed-body { flex: 1; min-width: 0; }
.feed-body .t { font-size: 13px; color: var(--ink); }
.feed-body .t b { font-weight: 600; }
.feed-time { font-size: 11.5px; color: var(--ink-4); margin-top: 2px; }

/* stepper */
.stepper { display: flex; align-items: center; gap: 0; flex-wrap: wrap; }
.step { display: flex; align-items: center; gap: 10px; padding: 8px 4px; }
.step-num { width: 26px; height: 26px; border-radius: 50%; display: grid; place-items: center; font-size: 12px; font-weight: 700; background: var(--surface-3); color: var(--ink-3); flex-shrink: 0; }
.step.done .step-num { background: var(--ok); color: #fff; }
.step.current .step-num { background: var(--accent); color: #fff; box-shadow: 0 0 0 4px var(--accent-bg); }
.step-label { font-size: 13px; font-weight: 500; color: var(--ink-3); }
.step.done .step-label, .step.current .step-label { color: var(--ink); }
.step.current .step-label { font-weight: 600; }
.step-line { width: 34px; height: 2px; background: var(--line-2); margin: 0 6px; }
.step.done + .step-line, .step-line.done { background: var(--ok); }

/* split layout for design studio */
.studio { display: grid; grid-template-columns: 1fr 320px; gap: 18px; align-items: start; }

/* notice banner */
.notice {
  display: flex; align-items: flex-start; gap: 11px; padding: 13px 15px;
  border-radius: var(--r); font-size: 13px; border: 1px solid;
}
.notice svg { width: 17px; height: 17px; flex-shrink: 0; margin-top: 1px; }
.notice.warn { background: var(--warn-bg); border-color: #ecdcae; color: #7a5712; }
.notice.info { background: var(--info-bg); border-color: #cfe0ec; color: #2e5572; }
.notice.accent { background: var(--accent-bg); border-color: var(--accent-l); color: var(--accent-d); }

/* provenance flag */
.prov { font-family: var(--mono); font-size: 10px; padding: 1px 6px; border-radius: 4px; font-weight: 500; letter-spacing: .02em; }
.prov.conf { background: var(--ok-bg); color: var(--ok); }
.prov.assm { background: var(--info-bg); color: var(--info); }
.prov.boss { background: #efe7f5; color: #6b4a8a; }

/* mini site map */
.lotmap { display: grid; grid-template-columns: repeat(auto-fill, minmax(54px, 1fr)); gap: 7px; }
.lot-cell {
  aspect-ratio: 1; border-radius: var(--r-sm); display: grid; place-items: center;
  font-family: var(--mono); font-size: 11px; font-weight: 600; cursor: pointer;
  border: 1px solid transparent; transition: transform .1s;
}
.lot-cell:hover { transform: scale(1.06); }
.lot-cell.available { background: var(--surface-2); color: var(--ink-3); border-color: var(--line-2); }
.lot-cell.reserved  { background: var(--warn-bg); color: var(--warn); }
.lot-cell.sold      { background: var(--info-bg); color: var(--info); }
.lot-cell.production{ background: var(--accent-bg); color: var(--accent-d); }
.lot-cell.closed    { background: var(--ok-bg); color: var(--ok); }

/* calendar */
.cal { display: grid; grid-template-columns: repeat(7, 1fr); gap: 1px; background: var(--line); border: 1px solid var(--line); border-radius: var(--r); overflow: hidden; }
.cal-h { background: var(--surface-2); padding: 8px; text-align: center; font-size: 11px; font-weight: 600; color: var(--ink-3); text-transform: uppercase; letter-spacing: .03em; }
.cal-d { background: var(--surface); min-height: 96px; padding: 7px 8px; }
.cal-d .dn { font-size: 12px; color: var(--ink-3); font-weight: 600; }
.cal-d.out { background: var(--surface-2); }
.cal-d.out .dn { color: var(--ink-4); }
.cal-ev { font-size: 11px; padding: 3px 6px; border-radius: 5px; margin-top: 4px; font-weight: 500; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.cal-ev.install { background: var(--accent-bg); color: var(--accent-d); }
.cal-ev.pickup { background: var(--info-bg); color: var(--info); }
.cal-ev.milestone { background: var(--ok-bg); color: var(--ok); }

/* section divider label */
.divider { display: flex; align-items: center; gap: 12px; margin: 26px 0 14px; }
.divider .line { flex: 1; height: 1px; background: var(--line); }
.divider .lbl { font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: .06em; color: var(--ink-3); }

/* room group (design studio) */
.room-group { border: 1px solid var(--line); border-radius: var(--r-lg); overflow: hidden; margin-bottom: 14px; }
.room-head { padding: 12px 16px; background: var(--surface-2); display: flex; align-items: center; justify-content: space-between; }
.room-head .rn { font-weight: 600; font-size: 13.5px; color: var(--ink); display: flex; align-items: center; gap: 9px; }
.room-head .rd { font-family: var(--mono); font-size: 11.5px; color: var(--ink-3); }

/* responsive */
@media (max-width: 1100px) {
  .grid-2, .grid-2-1, .grid-1-2, .grid-3 { grid-template-columns: 1fr; }
  .studio { grid-template-columns: 1fr; }
}
@media (max-width: 860px) {
  .rail { transform: translateX(-100%); transition: transform .2s; }
  .rail.open { transform: translateX(0); }
  .main { margin-left: 0; }
  .search { width: 180px; }
  .menu-toggle { display: grid !important; }
}
.menu-toggle { display: none; }

/* print-ish doc preview */
.doc-preview {
  background: #fff; border: 1px solid var(--line-2); border-radius: var(--r);
  padding: 30px 34px; box-shadow: var(--shadow-sm); font-size: 13px; color: var(--ink-2);
}
.doc-preview h2 { font-family: var(--display); font-size: 22px; }
.doc-rule { height: 1px; background: var(--line); margin: 16px 0; }

.scroll-x { overflow-x: auto; }

/* utility text */
.t-mono { font-family: var(--mono); }
.t-display { font-family: var(--display); }
.fs-12 { font-size: 12px; } .fs-13 { font-size: 13px; } .fs-15 { font-size: 15px; } .fs-18 { font-size: 18px; }
.fw-600 { font-weight: 600; } .fw-700 { font-weight: 700; }
.tnum { font-variant-numeric: tabular-nums; }

/* --- additions for settings.html + service.html --- */
.mb-4 { margin-bottom: 4px; }
.gap-14 { gap: 14px; }
.avatar { display:inline-flex; align-items:center; justify-content:center; width:30px; height:30px; border-radius:50%; background:var(--accent-soft,#efe2d8); color:var(--accent,#c2703d); font-size:11px; font-weight:700; flex:none; letter-spacing:.02em; }
.avatar.sm { width:26px; height:26px; font-size:10px; }
.cell-lead { display:flex; align-items:center; gap:10px; }
.card-mini { display:flex; align-items:center; gap:12px; padding:12px 14px; border:1px solid var(--line); border-radius:var(--r); background:var(--surface); text-decoration:none; color:inherit; transition:border-color .15s, box-shadow .15s; cursor:pointer; }
.card-mini:hover { border-color:var(--accent,#c2703d); box-shadow:var(--shadow-sm); }
.card-mini-ic { display:inline-flex; align-items:center; justify-content:center; width:34px; height:34px; border-radius:9px; background:var(--surface-2); color:var(--ink-2); flex:none; }
.card-mini-ic svg { width:17px; height:17px; }
.card-mini-arrow { margin-left:auto; color:var(--ink-3,#9aa0a6); display:inline-flex; }
.card-mini-arrow svg { width:15px; height:15px; }
.lineage.condensed { padding:10px 0; }
.lineage.condensed .ls-label { font-size:11px; }
