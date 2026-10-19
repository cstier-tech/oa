import React from 'react';
export interface LayoutProps {
    children: React.ReactNode;
    pageClass?: string;
}
export declare function Layout({ children, pageClass }: LayoutProps): React.JSX.Element;
