import type { PropsWithChildren } from 'react';

export type BaseModalProps = PropsWithChildren<{
  isOpen: boolean;
  onClose: () => void;
  title: string;
  ariaLabelledby: string;
}>;

export type UseEscapeKeyProps = {
  isEnabled: boolean;
  onClose: () => void;
};
