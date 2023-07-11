import './mode.css'
import { FLOWS, useCurrentFlow, useProjectActions } from '../../../store/project-setup-store'


export function Flow() {
    const currentFlow = useCurrentFlow()
    const { change_flow } = useProjectActions()
    return (
        <>
            <div className="flow">
                <div className="flow-label">{currentFlow}</div>
                <div className="flow-buttons">
                    <button onClick={() => { change_flow(FLOWS.CALIBRATION) }}>Calibration</button>
                    <button onClick={() => { change_flow(FLOWS.GROUND_ALIGNMENT) }}>Ground Alignment</button>
                </div>
            </div>
        </>
    )
}