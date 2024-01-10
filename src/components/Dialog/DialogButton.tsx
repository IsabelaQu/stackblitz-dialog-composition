import { ButtonHTMLAttributes, ReactNode } from 'react';

interface DialogButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onAction: () => void;
  name: string;
  children?: ReactNode;
}

export function DialogButton({
  onAction,
  name,
  children,
  ...rest
}: DialogButtonProps) {
  return (
    <button {...rest} onClick={onAction}>
      {name && <span>{name}</span>}
      {children}
    </button>
  );
}
