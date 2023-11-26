"use client";
import { fetchAnime } from "@/app/action";
import Image from "next/image";
import { useEffect, useState } from "react";

// The premise of the LOAD MORE is to continuously load a new page, without the screen mentioning a new page
// To PAGINATE, normally but now AS WE SCROLL DOWN the page

// Triggering point is not the clicking of a new page, but THE SCROLL DOWN

// react-intersection-observer is a dependency that founds out when the user hits the END of the page
import { useInView } from "react-intersection-observer";
import AnimeCard, { AnimeProp } from "./AnimeCard";

let page = 2;

function LoadMore() {
  // the prefix USE means that it is a HOOK and you CAN'T use hooks on the server-side
  // it needs to be converted to a client-side component
  // NOW the only thing on the client-side is the LOAD MORE comp
  const { ref, inView } = useInView({});
  // the "<AnimeProp>" is a TypeScript semantic to strict the value type as an array
  const [data, setData] = useState<AnimeProp[]>([]);

  const [pagination, setPage] = useState(page);

  useEffect(() => {
    if (inView) {
      setPage(pagination + 1);

      fetchAnime(pagination).then((res) => {
        // We want the new page data, but ALSO the previous one
        setData([...data, ...res]);
      });
    }
  }, [inView, data]);

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {/* the TYPE of the ITEM prop is the AnimeProp prop itself */}
        {data.map((item: AnimeProp, index: number) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
