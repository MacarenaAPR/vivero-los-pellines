const paths = {
  sprout: <><path d="M12 22V12"/><path d="M7 8c3 0 5 2 5 5-3 0-6-1.5-6-5h1Z"/><path d="M17 4c-3 0-5 2-5 6 4 0 7-2 7-6h-2Z"/></>,
  seed: <><path d="M12 21c4-3 7-7 7-11a7 7 0 0 0-14 0c0 4 3 8 7 11Z"/><path d="M12 17v-6"/><path d="M9 13c1.5 0 3-1 3-3"/></>,
  basket: <><path d="m5 10 2 10h10l2-10H5Z"/><path d="M3 10h18"/><path d="m8 10 4-6 4 6"/><path d="M9 14v2M15 14v2"/></>,
  herb: <><path d="M12 21V9"/><path d="M12 14c-4 0-7-2-7-6 4 0 7 2 7 6Z"/><path d="M12 11c4 0 7-2 7-6-4 0-7 2-7 6Z"/><path d="M12 18c3 0 5-1.5 5-4.5-3 0-5 1.5-5 4.5Z"/></>,
  education: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11a2 2 0 0 1 2 2v15a2 2 0 0 0-2-2H6.5A2.5 2.5 0 0 0 4 20.5v-15Z"/><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v17a2 2 0 0 1 2-2h2.5a2.5 2.5 0 0 1 2.5 2.5v-15Z"/></>,
  community: <><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2"/><path d="M3.5 20v-2.5A4.5 4.5 0 0 1 8 13h2a4.5 4.5 0 0 1 4.5 4.5V20"/><path d="M15 14h1a4 4 0 0 1 4 4v2"/></>,
  territory: <><path d="M12 21s7-5.4 7-12a7 7 0 1 0-14 0c0 6.6 7 12 7 12Z"/><path d="M9 10c2.7 0 4.5-1.5 5-4 1.2 3.7-.2 7-4 8"/></>,
  arrow: <><path d="M5 12h14"/><path d="m14 7 5 5-5 5"/></>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2"/></>,
  phone: <path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-4-2-2 2c-3.5-1.5-6.5-4.5-8-8l2-2-2-4Z"/>,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6" fill="currentColor"/></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
  close: <><path d="m6 6 12 12M18 6 6 18"/></>,
}

export function Icon({ name, size = 24 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}
