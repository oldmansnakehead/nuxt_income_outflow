import type { MenuItemOptions, SubmenuOptions } from '@tauri-apps/api/menu'
import { Menu, Submenu, MenuItem, PredefinedMenuItem } from '@tauri-apps/api/menu'

export const useTauriMenu = async () => {
  const isTauri = (window as Window & { __TAURI__?: unknown }).__TAURI__ !== undefined
  if (!isTauri) {
    console.log('Running in Web app, skipping Tauri menu setup')
    return
  }

  const createMenuItem = async (options: MenuItemOptions) => {
    return await MenuItem.new(options)
  }

  const createSubmenu = async (options: SubmenuOptions) => {
    return await Submenu.new(options)
  }

  const createPredefinedMenuItem = async (item: PredefinedMenuItemType, text?: string) => {
    return await PredefinedMenuItem.new({ item, text })
  }

  const separator = await createPredefinedMenuItem('Separator')

  // create menu
  const createFileMenu = async () => {
    const createRecentFilesMenu = async () => {
      const recentFile1 = await createMenuItem({
        id: 'recent_file1',
        text: 'File1.txt',
        action: () => console.log('Open File1.txt'),
      })
  
      const recentFile2 = await createMenuItem({
        id: 'recent_file2',
        text: 'File2.txt',
        action: () => console.log('Open File2.txt'),
      })
  
      return await createSubmenu({
        text: 'Recent Files',
        items: [recentFile1, recentFile2],
      })
    }
    
    const fileNew = await createMenuItem({
      id: 'file_new',
      text: 'New',
      action: () => console.log('New file clicked'),
    })

    const fileOpen = await createMenuItem({
      id: 'file_open',
      text: 'Open',
      action: () => console.log('Open file clicked'),
    })

    const recentSubmenu = await createRecentFilesMenu()

    return await createSubmenu({
      text: 'File',
      items: [fileNew, separator, fileOpen, recentSubmenu],
    })
  }

  const createOtherMenu = async () => {
    const closeWindow = await createPredefinedMenuItem('CloseWindow', 'Close')
    return await createSubmenu({
      text: 'Other',
      items: [closeWindow],
    })
  }

  // main menu
  const setupMenu = async () => {
    const fileSubmenu = await createFileMenu()
    const otherMenu = await createOtherMenu()

    const appMenu = await Menu.new({
      items: [fileSubmenu, otherMenu],
    })

    appMenu.setAsAppMenu()
      .then((res) => console.log('Menu set success', res))
      .catch((err) => console.error('Menu set failed', err))
  }

  await setupMenu()
}