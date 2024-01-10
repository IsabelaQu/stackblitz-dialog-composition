import { ReactNode } from 'react';

interface DialogTitleProps {
  title: string;
  children?: ReactNode;
}

export function DialogTitle({ title, children }: DialogTitleProps) {
  return (
    <div className="card-title d-flex align-items-center p-1 gap-2">
      <h2>{title}</h2>
      {children}
    </div>
  );
}
