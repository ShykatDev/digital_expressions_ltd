import { gsap, Power3, Power0 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const tl = gsap.timeline({
  defaults: {
    duration: 0.75,
    ease: Power3.easeOut,
  },
});

gsap.registerPlugin(ScrollTrigger);

const animations = (creative, company, establish, context, mainCTA) => {
  tl.fromTo(creative, { opacity: 0, y: "-100%" }, { opacity: 1, y: 0 });

  tl.fromTo(company, { opacity: 0, y: "100%" }, { opacity: 1, y: 0 });

  tl.fromTo(context, { opacity: 0, x: "100%" }, { opacity: 1, x: 0 });

  tl.fromTo(establish, { opacity: 0, x: "-100%" }, { opacity: 1, x: 0 });

  tl.fromTo(mainCTA, { opacity: 0 }, { opacity: 1 });

  tl.fromTo(
    ".navLink",
    { opacity: 0 },
    { opacity: 1, ease: Power0.easeIn, stagger: 0.2 },
    "<20%"
  );

  tl.fromTo(
    ".banner",
    { opacity: 0, y: -30 },
    { opacity: 1, y: 0, ease: Power0.easeIn, duration: 0.3 },
    "<50%"
  );

  tl.fromTo(
    ".social-icon",
    { x: "-100%", opacity: 0 },
    { x: 0, opacity: 1, ease: Power0.easeIn, stagger: 0.3 },
    "<20%"
  );
};

export default animations;
