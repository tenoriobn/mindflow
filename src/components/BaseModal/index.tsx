'use client';
import { createPortal } from 'react-dom';
import CloseIcon from 'public/icons/close.svg';
import SectionTitle from 'src/components/SectionTitle';
import { useBodyOverflow } from 'src/hooks';
import { useEscapeKey } from './useEscapeKey';
import type { BaseModalProps } from './baseModal.type';

const BaseModal = ({ isOpen, onClose, title, ariaLabelledby, children }: BaseModalProps) => {
  useBodyOverflow(isOpen);
  useEscapeKey({ isEnabled: isOpen, onClose });

  if (!isOpen) {
    return null;
  }

  const descriptionId = `${ariaLabelledby}-description`;

  return createPortal(
    <div
      className="3xl:p-[4.375vw] fixed inset-0 z-50 grid items-center justify-center overflow-auto bg-black/65 p-4 backdrop-blur-sm md:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby={ariaLabelledby}
      aria-describedby={descriptionId}
      onClick={onClose}
    >
      <section
        className="bg-gradient-header 3xl:max-w-[82.92vw] 3xl:rounded-[2.083vw] 3xl:p-[1.667vw] max-w-398 rounded-[1.25rem] bg-slate-950 p-4 md:rounded-[2.5rem] md:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="3xl:mb-[1.667vw] mb-4 grid grid-cols-[1fr_auto] items-center gap-3 md:mb-8 md:grid-cols-[1fr_auto_1fr]">
          <div aria-hidden="true" className="hidden md:block" />

          <SectionTitle
            id={ariaLabelledby}
            className="max-xs:text-xl mb-0! text-white/95 max-md:text-left"
          >
            {title}
          </SectionTitle>

          <button
            type="button"
            aria-label={`Fechar ${title}`}
            className="transition-default justify-self-end text-slate-300 hover:text-slate-300/75 active:scale-90 active:text-slate-300/90"
            onClick={onClose}
          >
            <CloseIcon
              className="3xl:h-[1.25vw] 3xl:w-[1.042vw] h-5.5 w-4 md:h-6 md:w-5"
              aria-hidden="true"
              focusable="false"
            />
          </button>
        </header>

        <article id={descriptionId}>{children}</article>
      </section>
    </div>,
    document.body
  );
};

export default BaseModal;
