import { writable } from 'svelte/store';

// Store to hold the state of the menus
// so that it can toggle sidebar on small screens
export const isHamburgerMenuOpen = writable(false);

// Store to hold the state of the sidebar selected item
export const selectedSidebarItemId = writable(0);
