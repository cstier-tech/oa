// import BSOffcanvas, {type OffcanvasProps as BSOffcanvasProps} from 'react-bootstrap/Offcanvas'

import type React from "react"

export type Offcanvas = {
    children?: React.ReactNode,
    placement?: 'left' | 'right',
    autohide?: boolean,
    fullscreen?: boolean,
    shadow?: boolean,
    show?: boolean
}

export function Offcanvas({ children, placement = 'left', shadow = true, fullscreen = false, show }: Offcanvas) {
    return (
        <aside id="my-offcanvas"
            className={`offcanvas offcanvas-overlay ${show ? 'on' : ''} ${fullscreen ? 'offcanvas-fullscreen' : 'offcanvas-lg'} ${shadow ? 'offcanvas-shadow' : ''} ${placement === 'right' ? 'offcanvas-right' : 'offcanvas-left'}`}
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

export function OffcanvasCloser({ }) {
    return (
        <a href="#" className="btn btn-secondary btn-flat offcanvas-closer">Close</a>
    )
}


