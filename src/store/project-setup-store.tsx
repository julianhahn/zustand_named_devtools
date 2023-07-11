import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export enum FLOWS {
    CALIBRATION = 'Calibration',
    GROUND_ALIGNMENT = 'Ground Alignment',
}

interface project_setup_state {
    currentFlow: FLOWS
    actions: {
        change_flow: (mode: FLOWS) => void
    }
}

const useProjectSetupSate = create<project_setup_state>()(
    devtools(
        (set) => {
            return {
                currentFlow: FLOWS.CALIBRATION,
                actions: {
                    // run through the defined states to match the corrent mode and flow
                    change_flow: (flow: FLOWS) => {
                        set((state) => ({ currentFlow: flow }))
                    },
                },
            }
        }))

export const useCurrentFlow = () =>
    useProjectSetupSate((state) => state.currentFlow)
export const useProjectActions = () =>
    useProjectSetupSate((state) => state.actions)
