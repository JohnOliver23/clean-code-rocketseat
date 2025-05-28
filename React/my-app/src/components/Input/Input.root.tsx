import { ReactNode } from "react";

interface InputRootProps {
    children: ReactNode;
}

export function InputRoot({ children }: InputRootProps) {
    return (
        <div>
            {children}
        </div>
    )
}