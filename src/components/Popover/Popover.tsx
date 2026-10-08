import { cloneElement, isValidElement, useId } from 'react';
import type { ReactElement, ReactNode } from 'react';
import BSOverlayTrigger from 'react-bootstrap/OverlayTrigger';
import type { OverlayTriggerProps } from 'react-bootstrap/OverlayTrigger';
import BSPopover from 'react-bootstrap/Popover';
import BSPopoverHeader from 'react-bootstrap/PopoverHeader'
import BSPopoverBody from 'react-bootstrap/PopoverBody'

type ChildProps = {
    title?: string
    'data-toggle': string
    'data-content'?: string
    'data-placement'?: OverlayTriggerProps['placement']
    'data-trigger'?: OverlayTriggerProps['trigger']
}

export interface PopoverProps {
    title?: string;
    content: string
    children: ReactNode;
    placement?: OverlayTriggerProps['placement'];
    trigger?: OverlayTriggerProps['trigger'];
    id?: string;
}

export function Popover({ title, children, placement, id, content, trigger='click' }: PopoverProps) {
    const generatedId = useId();
    const popoverId = id ?? generatedId;

    // OverlayTrigger needs a single element it can attach a ref to,
    // so wrap anything that isn't a valid element (text, fragments, arrays) in a span
    const child: ReactElement<{ title?: string }> = isValidElement(children)
        ? cloneElement(children as ReactElement<ChildProps>, {
            title,
            'data-toggle': 'popover',
            'data-placement': placement,
            'data-content': content,
            'data-trigger': trigger
        })
        : <span title={title} data-content={content}>{children}</span>;

    const popover = title !== '' ? <BSPopover id={popoverId}>
        <BSPopoverHeader>{title}</BSPopoverHeader>
        <BSPopoverBody>{content}</BSPopoverBody>
    </BSPopover>
        : <BSPopover id={popoverId}>
            <BSPopoverBody>{content}</BSPopoverBody>
        </BSPopover>

    return (
        <BSOverlayTrigger
            placement={placement}
            overlay={popover}
            trigger={trigger}
        >
            {child}
        </BSOverlayTrigger>
    );
}
