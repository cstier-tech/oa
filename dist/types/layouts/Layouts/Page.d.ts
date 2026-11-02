import React from 'react';
export interface PageProps {
    children: React.ReactNode;
    pageClass?: string;
}
export declare function Page({ children }: PageProps): React.JSX.Element;
