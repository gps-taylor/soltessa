/* ============================================================
   Soltessa — fabricated demo data (BDG pilot tenant)
   Las Vegas flooring / cabinetry / countertop finisher.
   All names, lots, prices invented for prototype purposes.

   A "development" (a.k.a. community / subdivision) is the unit
   the top-left switcher selects. Each one has its own builder,
   scope, lot count, plan mix, allowances, timeline, and team.
   ============================================================ */
window.DEMO = (function () {

  // ---- Developments (communities) — each a distinct, self-consistent set ----
  const developments = [
    {
      id: 'SP', short: 'SP', name: 'Sienna Pass',
      builder: 'Sunridge Communities', city: 'Henderson, NV',
      role: 'Active development · Henderson',
      scope: ['Flooring', 'Cabinets', 'Countertops'],
      segment: 'Move-up single-family',
      lots: 48, priceBand: '$520k–$680k',
      designer: 'Taylor Morgan',
      started: 'Feb 2026', firstClose: 'Jul 2026', buildOut: 'Q3 2027',
      status: { available: 9, reserved: 6, sold: 14, production: 13, closed: 6 },
      plans: ['P-2210', 'P-2640'],
      accent: '#c2703d',
    },
    {
      id: 'CR', short: 'CR', name: 'Cholla Ridge',
      builder: 'Mesa Verde Homes', city: 'North Las Vegas, NV',
      role: 'Active development · N. Las Vegas',
      scope: ['Flooring', 'Countertops'],
      segment: 'Entry-level / first-time buyer',
      lots: 36, priceBand: '$390k–$470k',
      designer: 'Dana Reyes',
      started: 'Nov 2025', firstClose: 'May 2026', buildOut: 'Q1 2027',
      status: { available: 5, reserved: 4, sold: 11, production: 10, closed: 6 },
      plans: ['P-1980'],
      accent: '#8a6d3b',
    },
    {
      id: 'DV', short: 'DV', name: 'Desert Vista',
      builder: 'Sunridge Communities', city: 'Summerlin, NV',
      role: 'Active development · Summerlin',
      scope: ['Flooring', 'Cabinets', 'Countertops', 'Surrounds'],
      segment: 'Luxury single-family',
      lots: 60, priceBand: '$840k–$1.2M',
      designer: 'Taylor Morgan',
      started: 'Apr 2026', firstClose: 'Nov 2026', buildOut: 'Q4 2027',
      status: { available: 18, reserved: 7, sold: 16, production: 12, closed: 7 },
      plans: ['P-3120'],
      accent: '#3d6b8e',
    },
    {
      id: 'AM', short: 'AM', name: 'Aspen Meadows',
      builder: 'Mesa Verde Homes', city: 'Las Vegas, NV',
      role: 'Active development · Las Vegas',
      scope: ['Flooring', 'Cabinets'],
      segment: 'Active-adult / 55+',
      lots: 28, priceBand: '$610k–$720k',
      designer: 'Dana Reyes',
      started: 'Jan 2026', firstClose: 'Aug 2026', buildOut: 'Q2 2027',
      status: { available: 4, reserved: 3, sold: 9, production: 8, closed: 4 },
      plans: ['P-2210'],
      accent: '#3f7d58',
    },
  ];

  // Back-compat: older pages reference DEMO.communities
  const communities = developments;

  const plans = [
    { id: 'P-2210', name: 'Acacia 2210', sqft: 2210, beds: 3, baths: 2.5, community: 'Sienna Pass',
      allowances: { Flooring: 14200, Cabinets: 9800, Countertops: 6400 },
      rooms: [
        { name: 'Great Room',     sqft: 384, cat: 'Hardwood' },
        { name: 'Kitchen',        sqft: 268, cat: 'Tile' },
        { name: 'Primary Bed',    sqft: 246, cat: 'Carpet' },
        { name: 'Primary Bath',   sqft: 132, cat: 'Tile' },
        { name: 'Bed 2',          sqft: 154, cat: 'Carpet' },
        { name: 'Bed 3',          sqft: 148, cat: 'Carpet' },
        { name: 'Entry / Hall',   sqft: 96,  cat: 'Tile' },
        { name: 'Laundry',        sqft: 64,  cat: 'Tile' },
      ] },
    { id: 'P-2640', name: 'Sabino 2640', sqft: 2640, beds: 4, baths: 3, community: 'Sienna Pass', allowances: { Flooring: 16800, Cabinets: 11400, Countertops: 7600 }, rooms: [] },
    { id: 'P-1980', name: 'Ocotillo 1980', sqft: 1980, beds: 3, baths: 2, community: 'Cholla Ridge', allowances: { Flooring: 12600, Cabinets: 8800, Countertops: 5800 }, rooms: [] },
    { id: 'P-3120', name: 'Mesquite 3120', sqft: 3120, beds: 4, baths: 3.5, community: 'Desert Vista', allowances: { Flooring: 19400, Cabinets: 13800, Countertops: 9200 }, rooms: [] },
  ];

  // catalog items
  const catalog = [
    { sku: 'HW-OAK-WW',  name: 'White Oak — Wirebrushed',      cat: 'Hardwood',    supplier: 'Mohawk',        unit: 'sq ft',  cost: 4.85, allow: 6.20, sell: 7.95, color: '#c9a878' },
    { sku: 'HW-HIK-NAT', name: 'Hickory — Natural Matte',      cat: 'Hardwood',    supplier: 'Shaw',          unit: 'sq ft',  cost: 5.40, allow: 6.20, sell: 8.60, color: '#b98a5e' },
    { sku: 'LVP-COAST',  name: 'Coastal Luxury Vinyl Plank',   cat: 'LVP',         supplier: 'COREtec',       unit: 'sq ft',  cost: 2.95, allow: 3.80, sell: 4.95, color: '#a8916f' },
    { sku: 'TIL-CARR12', name: 'Carrara Look 12×24 Porcelain', cat: 'Tile',        supplier: 'Daltile',       unit: 'sq ft',  cost: 3.10, allow: 4.10, sell: 5.40, color: '#e6e4df' },
    { sku: 'TIL-SLATE',  name: 'Slate Grey 18×18 Porcelain',   cat: 'Tile',        supplier: 'Daltile',       unit: 'sq ft',  cost: 2.70, allow: 4.10, sell: 4.85, color: '#6f7479' },
    { sku: 'CPT-PLUSH',  name: 'Mohave Plush — Greige',        cat: 'Carpet',      supplier: 'Shaw',          unit: 'sq yd',  cost: 18.40, allow: 24.00, sell: 29.50, color: '#bcb3a4' },
    { sku: 'CPT-BERBER', name: 'Canyon Berber — Sandstone',    cat: 'Carpet',      supplier: 'Mohawk',        unit: 'sq yd',  cost: 15.90, allow: 24.00, sell: 26.80, color: '#cdbfa6' },
    { sku: 'CAB-SHAK-W', name: 'Shaker Maple — White',         cat: 'Cabinets',    supplier: 'KraftMaid',     unit: 'lin ft', cost: 142.00, allow: 175.00, sell: 215.00, color: '#efeae1' },
    { sku: 'CAB-SHAK-E', name: 'Shaker Maple — Espresso',      cat: 'Cabinets',    supplier: 'KraftMaid',     unit: 'lin ft', cost: 148.00, allow: 175.00, sell: 224.00, color: '#5a4636' },
    { sku: 'CTR-QTZ-CG', name: 'Quartz — Calacatta Gold',      cat: 'Countertops', supplier: 'Cambria',       unit: 'sq ft',  cost: 38.00, allow: 52.00, sell: 64.00, color: '#ede9e0' },
    { sku: 'CTR-QTZ-PW', name: 'Quartz — Pure White',          cat: 'Countertops', supplier: 'Caesarstone',   unit: 'sq ft',  cost: 34.00, allow: 52.00, sell: 58.00, color: '#f4f3ef' },
    { sku: 'CTR-GRN-UB', name: 'Granite — Ubatuba',            cat: 'Countertops', supplier: 'MSI',           unit: 'sq ft',  cost: 29.00, allow: 52.00, sell: 49.00, color: '#2f3330' },
  ];

  const colorVariants = {
    'CTR-QTZ-CG': ['Calacatta Gold', 'Calacatta Nuvo', 'Brittanicca'],
    'CAB-SHAK-W': ['Pure White', 'Dover White', 'Linen'],
    'HW-OAK-WW': ['Natural', 'Smoked', 'Driftwood'],
  };

  return { developments, communities, plans, catalog, colorVariants };
})();
