/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback } from "react";

import { CarouselProps } from "@/types";
import { useRouter } from "next/navigation";
import Image from "next/image";

const EmblaCarousel = ({ fansLikeDetail }: CarouselProps) => {
  const router = useRouter();

  return (
    <section className="flex w-full flex-col gap-4 overflow-hidden">
      <div className="flex"></div>
      <div className="flex justify-center gap-2"></div>
    </section>
  );
};

export default EmblaCarousel;
