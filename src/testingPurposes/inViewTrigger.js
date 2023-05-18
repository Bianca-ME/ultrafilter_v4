function addClassOnInView(elementId, className) {
    const element = document.getElementById(elementId);
  
    if (!element) {
      console.warn(`Element with ID '${elementId}' not found.`);
      return;
    }
  
    const handleScroll = () => {
      // Get the position of the element relative to the viewport
      const boundingRect = element.getBoundingClientRect();
      const elementTop = boundingRect.top;
      const elementBottom = boundingRect.bottom;
  
      // Check if the element is in view
      const inView = (elementTop >= 0) && (elementBottom <= window.innerHeight);
  
      // Add or remove the class based on whether the element is in view or not
      if (inView) {
        element.classList.add(className);
      } else {
        element.classList.remove(className);
      }
    };
  
    // Add the class immediately if the element is already in view
    handleScroll();
  
    // Add the event listener to update the class when the user scrolls the page
    window.addEventListener("scroll", handleScroll);
  
    return () => window.removeEventListener("scroll", handleScroll);
  }
  
  export default addClassOnInView;