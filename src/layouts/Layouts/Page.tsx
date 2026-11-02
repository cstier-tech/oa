import React from 'react'

export interface PageProps {
    children: React.ReactNode
    pageClass?: string
}

export function Page({ children }: PageProps) {
    return (

        <div id='page'>
            <div className="canvas-blocker canvas-slidable"></div>
            <div className='canvas-slidable page-main'>
                {children}
            </div>
        </div>

    )
}
