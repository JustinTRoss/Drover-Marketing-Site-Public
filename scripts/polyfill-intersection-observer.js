const polyfillIntersectionObserver = () => {
  // IntersectionObserver polyfill for gatsby-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`);
    console.log(`👍 IntersectionObserver is polyfilled`);
  }
};

export default polyfillIntersectionObserver;
