import * as React from "react";
import { cn } from "../../lib/utils"; // Adjust if your utils path is different

export const Input = React.forwardRef(({ className, type, ...props }, ref) => {
    return (
        <input
            type={type}
            ref={ref}
            {...props}
            className={cn(
                "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                className
            )}
        />
    );
});

Input.displayName = "Input";
