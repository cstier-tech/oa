import { type TabProps } from 'react-bootstrap/Tab';
import { type TabsProps } from 'react-bootstrap/Tabs';
export type TabItem = {
    id: string;
    label: string;
};
export declare function Tabs({ children, ...props }: TabsProps): import("react").JSX.Element;
export declare function Tab({ children, ...props }: TabProps): import("react").JSX.Element;
