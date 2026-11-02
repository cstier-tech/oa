// import BSOffcanvas, {type OffcanvasProps as BSOffcanvasProps} from 'react-bootstrap/Offcanvas'

import type React from "react"
import { Button } from '../Button'

export type Offcanvas = {
    children?: React.ReactNode,
    placement?: 'left' | 'right',
    fullscreen?: boolean,
    shadow?: boolean,
    show?: boolean,
    id?: string
}

export function Offcanvas({ children, placement = 'left', shadow = true, fullscreen = false, show, id }: Offcanvas) {
    return (
        <aside id={id}
            className={`offcanvas-panel offcanvas-overlay ${show ? 'on' : ''} ${fullscreen ? 'offcanvas-fullscreen' : 'offcanvas-panel-lg'} ${shadow ? 'offcanvas-shadow' : ''} ${placement === 'right' ? 'offcanvas-right' : 'offcanvas-left'}`}
            data-blocker="true"
            data-overlay="true">
            <div className="offcanvas-content">
                <div className="offcanvas-scrollable">
                    {children}
                </div>
            </div>
        </aside>
    )
}

export type OffcanvasCloser = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

export function OffcanvasCloser({ onClick }: OffcanvasCloser) {
    return (
        <Button variant="secondary" className="btn-flat offcanvas-closer" onClick={onClick}>Close</Button>
    )
}


