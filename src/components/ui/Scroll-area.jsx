import * as React from "react";
import { cn } from "../../lib/utils"; // Adjust if needed

export const ScrollArea = ({ className, children, ...props }) => {
    return (
        <div
            {...props}
            className={cn("overflow-y-auto", className)}
        >
            {children}
        </div>
    );
};
