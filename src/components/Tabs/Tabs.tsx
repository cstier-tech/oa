import BSTab, {type TabProps} from 'react-bootstrap/Tab';
import BSTabs, {type TabsProps as BSTabsProps} from 'react-bootstrap/Tabs';

export type TabItem = {
    id: string
    label: string
}

export interface TabsProps extends BSTabsProps {
    tabStyle?: 'standard' | 'line'
}

export function Tabs({tabStyle = 'standard', children, ...props}: TabsProps) {
    return (
        <BSTabs className={tabStyle === 'line' ? 'nav-tabs-line' : undefined} {...props}>
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

