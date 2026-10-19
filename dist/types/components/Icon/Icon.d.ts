import React from 'react';
export interface IconProps extends React.HTMLAttributes<HTMLElement> {
    name: string;
    variant?: "solid" | "regular" | "brands";
    ref?: React.Ref<HTMLElement>;
}
export default function Icon({ name, variant, className, ...props }: IconProps): React.JSX.Element;
