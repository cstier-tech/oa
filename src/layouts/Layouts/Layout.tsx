import React from 'react'

export interface LayoutProps {
    children: React.ReactNode
    pageClass?: string
}

export function Layout({ children, pageClass = '' }: LayoutProps) {
    return (
        <div id="content-wrapper">
            <section id="content" className="container">
                <div id="content-body" className="row">
                    <div id="content-center" className="col-lg-12">
                        <div className={`page ${pageClass}`.trim()}>
                            {children}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
