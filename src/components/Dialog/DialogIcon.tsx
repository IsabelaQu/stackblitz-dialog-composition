import { ElementType } from 'react';

interface DialogIconProps {
  icon: ElementType;
}

export function DialogIcon({ icon: Icon }: DialogIconProps) {
  return <Icon style={{ width: '1.5rem' }} />;
}
