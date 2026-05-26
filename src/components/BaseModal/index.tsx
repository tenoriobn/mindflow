'use client';

import { createPortal } from 'react-dom';
import { useEffect, useRef, useState } from 'react';

import CloseIcon from 'public/icons/close.svg';

import SectionTitle from 'src/components/SectionTitle';

import { useBodyOverflow } from 'src/hooks';
import { gsap, useGSAP } from 'src/lib/gsap';

import { useEscapeKey } from './useEscapeKey';
import type { BaseModalProps } from './baseModal.type';

const BaseModal = ({ isOpen, onClose, title, ariaLabelledby, children }: BaseModalProps) => {
  const [shouldRender, setShouldRender] = useState(isOpen);

  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<GSAPTimeline | null>(null);

  useBodyOverflow(shouldRender);

  useEscapeKey({
    isEnabled: isOpen,
    onClose,
  });

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    }
  }, [isOpen]);

  useGSAP(
    () => {
      if (!shouldRender) {
        return;
      }

      const overlay = overlayRef.current;
      const modal = modalRef.current;

      if (!overlay || !modal) {
        return;
      }

      const contentBlocks = modal.querySelectorAll('.modal-content > *');

      gsap.set(overlay, {
        opacity: 0,
      });

      gsap.set(modal, {
        opacity: 0,
        scale: 0.96,
        y: 20,
        filter: 'blur(12px)',
      });

      const tl = gsap.timeline({
        paused: true,
        onReverseComplete: () => {
          setShouldRender(false);
        },
      });

      tl.to(overlay, {
        opacity: 1,
        duration: 0.18,
        ease: 'power2.out',
      });

      tl.to(
        modal,
        {
          opacity: 1,
          scale: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.42,
          ease: 'power3.out',
          clearProps: 'filter',
        },
        0
      );

      tl.from(
        '.modal-header',
        {
          opacity: 0,
          y: -12,
          duration: 0.22,
          ease: 'power2.out',
        },
        0.08
      );

      tl.from(
        contentBlocks,
        {
          opacity: 0,
          y: 10,
          stagger: 0.03,
          duration: 0.18,
          ease: 'power2.out',
        },
        0.12
      );

      timelineRef.current = tl;

      tl.play(0);
    },
    {
      scope: modalRef,
      dependencies: [shouldRender],
      revertOnUpdate: true,
    }
  );

  useEffect(() => {
    const tl = timelineRef.current;

    if (!tl || isOpen) {
      return;
    }

    tl.timeScale(2.4);
    tl.reverse();
  }, [isOpen]);

  if (!shouldRender) {
    return null;
  }

  const descriptionId = `${ariaLabelledby}-description`;

  return createPortal(
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 grid items-center justify-center overflow-auto bg-black/65 p-4 backdrop-blur-sm md:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby={ariaLabelledby}
      aria-describedby={descriptionId}
      onClick={onClose}
    >
      <section
        ref={modalRef}
        className="bg-gradient-header 3xl:max-w-[82.92vw] 3xl:rounded-[2.083vw] 3xl:p-[1.667vw] max-w-398 rounded-[1.25rem] bg-slate-950 p-4 md:rounded-[2.5rem] md:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="modal-header 3xl:mb-[1.667vw] mb-4 grid grid-cols-[1fr_auto] items-center gap-3 md:mb-8 md:grid-cols-[1fr_auto_1fr]">
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

        <article id={descriptionId} className="modal-content">
          {children}
        </article>
      </section>
    </div>,
    document.body
  );
};

export default BaseModal;
