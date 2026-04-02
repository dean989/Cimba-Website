"use client";

import { useRef, useState, useEffect } from "react";

const riseOptions: IntersectionObserverInit = {
  rootMargin: "-80px 0px -80px 0px",
  threshold: 0.1,
};

export default function WhoUsesRiseSection({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) setInView(true);
    }, riseOptions);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={`who-uses-rise ${inView ? "in-view" : ""} scroll-mt-24 ${className}`}
    >
      {children}
    </section>
  );
}
