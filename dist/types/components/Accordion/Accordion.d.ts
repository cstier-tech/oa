import React from 'react';
import { type AccordionProps as BSAccordionProps } from 'react-bootstrap/Accordion';
export type AccordionItem = {
    id: string;
    label: string;
    body: string;
};
export interface AccordionProps extends BSAccordionProps {
    items: AccordionItem[];
    activeKey?: string | string[] | null | undefined;
    ref?: React.Ref<HTMLDivElement>;
}
export declare function Accordion({ children, ref, items, ...props }: AccordionProps): React.JSX.Element;
