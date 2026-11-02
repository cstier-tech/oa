// import BSOffcanvas, {type OffcanvasProps as BSOffcanvasProps} from 'react-bootstrap/Offcanvas'

import type React from "react"
import { Button } from '../Button'
import { useEffect } from "react"

export type Offcanvas = {
    children?: React.ReactNode,
    placement?: 'left' | 'right',
    size?: 'default' | 'lg' | 'fullscreen'
    shadow?: boolean,
    show?: boolean,
    id?: string
}



export function Offcanvas({ children, placement = 'left', shadow = true, size = 'default', show, id }: Offcanvas) {

    useEffect(() => {
        if (!show) return

        const bodyClasses = ['canvas-slid', 'canvas-sliding', 'canvas-overlay']
        bodyClasses.push(placement === 'left' ? 'canvas-sliding-right' : 'canvas-sliding-left')
        if (size === 'fullscreen') bodyClasses.push('canvas-fullscreen')
        if (size === 'lg') bodyClasses.push('canvas-lg')

        document.body.classList.add(...bodyClasses)
        return () => document.body.classList.remove(...bodyClasses)
    }, [show, placement, size])


    return (
        <aside id={id}
            className={`offcanvas-panel offcanvas-overlay ${show ? 'on' : ''} ${size === 'fullscreen' ? 'offcanvas-fullscreen' : ''} ${size === 'lg' ? 'offcanvas-panel-lg' : ''} ${shadow ? 'offcanvas-shadow' : ''} ${placement === 'right' ? 'offcanvas-right' : 'offcanvas-left'}`}
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


