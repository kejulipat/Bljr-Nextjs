"use client";

import { useRef } from "react";
import InfoTerkiniCard from "@/components/InfoTerkiniCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/Icons";

export default function BeritaTerkini({ items }) {
  const scrollerRef = useRef(null);
  const latestItems = items
    .slice()
    .sort((left, right) => right.tanggal.localeCompare(left.tanggal))
    .slice(0, 5);

  function getScrollStep() {
    const scroller = scrollerRef.current;
    const firstCard = scroller?.firstElementChild;

    if (!scroller || !firstCard) {
      return 0;
    }

    const styles = window.getComputedStyle(scroller);
    const gap = Number.parseFloat(styles.columnGap) || 0;

    return firstCard.getBoundingClientRect().width + gap;
  }

  function scrollNext() {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    if (scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 4) {
      scroller.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    scroller.scrollBy({ left: getScrollStep(), behavior: "smooth" });
  }

  function scrollPrevious() {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    if (scroller.scrollLeft <= 4) {
      scroller.scrollTo({
        left: scroller.scrollWidth - scroller.clientWidth,
        behavior: "smooth",
      });
      return;
    }

    scroller.scrollBy({ left: -getScrollStep(), behavior: "smooth" });
  }

  return (
    <section aria-label="Informasi terkini">
      <header className="mb-6 text-center">
        <h2 className="font-heading text-2xl text-navy sm:text-3xl">
          Informasi Terkini Seputar{" "}
          <strong className="font-bold">SMAN 3 Kota Serang</strong>
        </h2>
        <div
          className="mx-auto mt-4 h-1 w-16 bg-accent"
          aria-hidden="true"
        />
      </header>

      <div className="mb-4 flex justify-end gap-2 lg:hidden">
        <button
          type="button"
          onClick={scrollPrevious}
          aria-label="Informasi sebelumnya"
          className="flex size-10 items-center justify-center rounded-full bg-brand text-white transition hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link"
        >
          <ChevronLeftIcon className="size-5" />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          aria-label="Informasi berikutnya"
          className="flex size-10 items-center justify-center rounded-full bg-brand text-white transition hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link"
        >
          <ChevronRightIcon className="size-5" />
        </button>
      </div>

      <div
        ref={scrollerRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Lima informasi terbaru"
        tabIndex={0}
        className="flex min-w-0 max-w-full snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)_minmax(0,1.5fr)] lg:grid-rows-2 lg:gap-6 lg:overflow-visible lg:pb-0"
      >
        {latestItems.map((item, index) => (
          <div
            key={item.id}
            className={`h-auto min-w-0 shrink-0 basis-[80%] snap-start sm:basis-[45%] lg:basis-auto ${
              index === 0 ? "lg:row-span-2" : ""
            }`}
          >
            <InfoTerkiniCard
              item={item}
              variant={index === 0 ? "utama" : "kecil"}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
