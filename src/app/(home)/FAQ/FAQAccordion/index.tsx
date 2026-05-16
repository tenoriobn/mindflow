'use client';
import { useRef, useState } from 'react';
import { useSmoothCenterScroll } from './useSmoothCenterScroll';
import faqItems from './faqItems.json';
import ArrowIcon from 'public/icons/arrow.svg';

const FAQAccordion = () => {
  const [openFAQId, setOpenFAQId] = useState<number>(faqItems[0].id);

  const itemRefs = useRef<Record<number, HTMLButtonElement | null>>({});

  const userInteractedRef = useRef(false);

  useSmoothCenterScroll(openFAQId, itemRefs, userInteractedRef, 300);

  const toggleItem = (serviceId: number) => {
    userInteractedRef.current = true;

    setOpenFAQId((currentId) => (currentId === serviceId ? -1 : serviceId));
  };

  return (
    <div className="flex h-full w-full flex-1 pl-4 md:pl-8 lg:pl-0">
      <ul className="3xl:gap-[1.667vw] 3xl:p-[1.667vw] 3xl:pr-0 3xl:rounded-tl-[2.083vw] flex w-full flex-1 flex-col gap-4 rounded-tl-[1.25rem] bg-slate-300 p-4 pr-0 md:gap-8 md:rounded-tl-[2.5rem] md:p-8 md:pr-0">
        {faqItems.map(({ id, title, description }) => {
          const isOpen = openFAQId === id;

          const buttonId = `faq-accordion-button-${id}`;

          const panelId = `faq-accordion-panel-${id}`;

          return (
            <li
              key={id}
              className="bg-gradient-accordion 3xl:rounded-[2.083vw] relative rounded-[1.25rem] md:rounded-[2.5rem]"
            >
              <h3>
                <button
                  ref={(el) => {
                    itemRefs.current[id] = el;
                  }}
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleItem(id)}
                  className="3xl:p-[1.667vw] relative flex w-full cursor-pointer flex-col p-4 text-left md:p-8"
                >
                  <div className="xs:gap-2 flex w-full items-center justify-between gap-3 text-white/95 transition-colors duration-300">
                    <span className="3xl:text-[1.667vw] text-lg font-semibold text-white/95 md:text-2xl">
                      {title}
                    </span>

                    <ArrowIcon
                      aria-hidden="true"
                      className={`3xl:h-[.521vw] h-2.5 shrink-0 transition-transform duration-300 ease-out ${
                        isOpen ? 'rotate-0' : 'rotate-180'
                      }`}
                    />
                  </div>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="3xl:text-[1.46vw] 3xl:mt-[1.25vw] mt-4 overflow-hidden text-base text-white/75 md:mt-6 md:text-xl">
                        {description}
                      </p>
                    </div>
                  </div>
                </button>
              </h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FAQAccordion;
