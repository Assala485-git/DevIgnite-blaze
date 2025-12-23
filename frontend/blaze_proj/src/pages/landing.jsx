import React, { useRef } from "react";
import Hero from "../sections/hero.jsx";
import Posts from "../sections/posts.jsx";
import Departments from "../sections/departments.jsx";
import More from "../sections/more.jsx";
import Footer from "../sections/footer.jsx";

export default function LandingPage() {
  const postsRef = useRef(null);
  const departmentsRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Hero scrollToSection={scrollToSection} postsRef={postsRef} departmentsRef={departmentsRef} />

      <section ref={postsRef}>
        <Posts />
      </section>

      <section ref={departmentsRef}>
        <Departments />
      </section>

      <section>
        <More />
      </section>

      <Footer />
    </>
  );
}