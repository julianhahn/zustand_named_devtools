import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export enum FLOWS {
    ANALYZE = 'Analyze',
    RECORD = 'Record'
}

interface RuntimeState {
    currentFlow: FLOWS
    actions: {
        change_flow: (mode: FLOWS) => void
    }
}

const useProjectSetupSate = create<RuntimeState>()(
    devtools(
        (set) => {
            return {
                currentFlow: FLOWS.ANALYZE,
                actions: {
                    // run through the defined states to match the corrent mode and flow
                    change_flow: (flow: FLOWS) => {
                        set((state) => ({ currentFlow: flow }))
                    },
                },
            }
        }
    ))

export const useCurrentFlow = () =>
    useProjectSetupSate((state) => state.currentFlow)
export const useProjectActions = () =>
    useProjectSetupSate((state) => state.actions)
