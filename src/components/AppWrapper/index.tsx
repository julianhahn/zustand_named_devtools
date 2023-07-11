'use client'
import './app.css'
import { MODE, useAppMode, useAppActions } from '../../store/app-store'
import { Flow, Runtime } from '../modes'


export function App() {
    const appMode = useAppMode()
    const { change_mode } = useAppActions()

    let currentComponent = null
    if (appMode === MODE.RUNTIME) {
        currentComponent = <Runtime />
    } else if (appMode === MODE.PROJECT_SETUP) {
        currentComponent = <Flow />
    }

    return (
        <>
            <div className="app">
                <div className="mode-label">{appMode}</div>
                <div className="mode-buttons">
                    <button onClick={() => { change_mode(MODE.PROJECT_SETUP) }}>Project Setup</button>
                    <button onClick={() => { change_mode(MODE.RUNTIME) }}>Runtime</button>
                </div>
                {currentComponent}
            </div>
        </>
    )
}