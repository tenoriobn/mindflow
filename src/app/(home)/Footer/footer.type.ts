import type { FOOTER_BUTTONS } from './modelTypes';

export type ModalType = (typeof FOOTER_BUTTONS)[number]['key'] | null;
