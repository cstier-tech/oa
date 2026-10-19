import BSTab, {type TabProps} from 'react-bootstrap/Tab';
import BSTabs, {type TabsProps} from 'react-bootstrap/Tabs';

export type TabItem = {
    id: string
    label: string
}

export function Tabs({children, ...props}: TabsProps) {
    <BSTabs {...props}>
        {children}
    </BSTabs>
}

export function Tab({children, ...props}: TabProps) {
    <BSTab {...props}>
        {children}
    </BSTab>
}

