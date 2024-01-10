import { ReactNode } from 'react';

interface DialogRootProps {
  children: ReactNode;
}

const styleDialogRoot = {
  borderStyle: 'solid',
  borderWidth: '0.6px',
  borderRadius: '10px',
};

export function DialogRoot({ children }: DialogRootProps) {
  return (
    <div
      className="card shadow-sm rounded m-2"
      style={{ width: '25rem', ...styleDialogRoot }}
    >
      <div className="card-body">{children}</div>
    </div>
  );
}
