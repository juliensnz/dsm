import React, { ReactNode } from 'react';
declare const CoreButton: React.ForwardRefExoticComponent<{
    ariaLabel?: string | undefined;
    ariaLabelledBy?: string | undefined;
    ariaDescribedBy?: string | undefined;
    children: ReactNode;
    sizeMode?: "small" | "large" | undefined;
} & React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;
export { CoreButton };
