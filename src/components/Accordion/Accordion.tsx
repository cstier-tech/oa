import React from 'react'
import BSAccordion, { type AccordionProps as BSAccordionProps } from 'react-bootstrap/Accordion';
import AccordionItem from 'react-bootstrap/AccordionItem';
import AccordionHeader from 'react-bootstrap/AccordionHeader';
import AccordionBody from 'react-bootstrap/AccordionBody';

export type AccordionItem = {
    id: string
    label: string
    body: string
}

export interface AccordionProps extends BSAccordionProps {
    items: AccordionItem[]
    activeKey?: string | string[] | null | undefined
    ref?: React.Ref<HTMLDivElement>
}

export function Accordion({ children, ref, items, ...props }: AccordionProps) {
    return (
        <BSAccordion ref={ref} {...props} flush>
            {items.map((item) => (
                <AccordionItem eventKey={item.id} key={item.id}>
                    <AccordionHeader>{item.label}</AccordionHeader>
                    <AccordionBody>{item.body}</AccordionBody>
                </AccordionItem>
            ))}
        </BSAccordion>
    )
}