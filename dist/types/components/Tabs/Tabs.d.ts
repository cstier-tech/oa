import { type TabProps } from 'react-bootstrap/Tab';
import { type TabsProps } from 'react-bootstrap/Tabs';
export type TabItem = {
    id: string;
    label: string;
};
export declare function Tabs({ children, ...props }: TabsProps): void;
export declare function Tab({ children, ...props }: TabProps): void;
