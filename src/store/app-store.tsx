import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export enum MODE {
    MASTER_REPLAY = 'Master Replay',
    RUNTIME = 'Runtime',
    ZONE_SETUP = 'Zone Setup',
    PROJECT_SETUP = 'Project Setup',
}

interface AppState {
    appMode: MODE
    actions: {
        change_mode: (mode: MODE) => void
    }
}

const useAppState = create<AppState>()(
    devtools((set) => {
        return {
            appMode: MODE.PROJECT_SETUP,
            actions: {
                // run through the defined states to match the corrent mode and flow
                change_mode: (mode: MODE) => {
                    set((state) => ({ appMode: mode }))
                },
            },
        }
    }))

export const useAppMode = () => useAppState((state) => state.appMode)
export const useAppActions = () => useAppState((state) => state.actions)
