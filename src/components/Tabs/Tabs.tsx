import BSTab, {type TabProps} from 'react-bootstrap/Tab';
import BSTabs, {type TabsProps as BSTabsProps} from 'react-bootstrap/Tabs';

export type TabItem = {
    id: string
    label: string
}

export interface TabsProps extends BSTabsProps {
    tabStyle?: 'standard' | 'line'
}

export function Tabs({tabStyle = 'standard', className, children, ...props}: TabsProps) {
    const classes = [tabStyle === 'line' && 'nav-tabs-line', className].filter(Boolean).join(' ')

    return (
        <BSTabs className={classes || undefined} {...props}>
            {children}
        </BSTabs>
    )
}

export function Tab({children, ...props}: TabProps) {
    return (
        <BSTab {...props}>
            {children}
        </BSTab>
    )
}