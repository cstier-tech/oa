import { type TabProps } from 'react-bootstrap/Tab';
import { type TabsProps as BSTabsProps } from 'react-bootstrap/Tabs';
export type TabItem = {
    id: string;
    label: string;
};
export interface TabsProps extends BSTabsProps {
    tabStyle?: 'standard' | 'line';
}
export declare function Tabs({ tabStyle, className, children, ...props }: TabsProps): import("react").JSX.Element;
export declare function Tab({ children, ...props }: TabProps): import("react").JSX.Element;
