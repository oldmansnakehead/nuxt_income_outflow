interface Window {
  __TAURI__?: unknown;
}

type PredefinedMenuItemType = 'Separator' | 'Copy' | 'Cut' | 'Paste' | 'SelectAll' | 'Undo' | 'Redo' | 'Minimize' | 'Maximize' | 'Fullscreen' | 'Hide' | 'HideOthers' | 'ShowAll' | 'CloseWindow' | 'Quit' | 'Services'