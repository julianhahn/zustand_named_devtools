import './mode.css'
import { FLOWS, useCurrentFlow, useProjectActions } from '../../../store/runtime-store'


export function Runtime() {
    const currentFlow = useCurrentFlow()
    const { change_flow } = useProjectActions()
    return (
        <>
            <div className="flow">
                <div className="flow-label">{currentFlow}</div>
                <div className="flow-buttons">
                    <button onClick={() => { change_flow(FLOWS.RECORD) }}>Record</button>
                    <button onClick={() => { change_flow(FLOWS.ANALYZE) }}>Analyze</button>
                </div>
            </div>
        </>
    )
}