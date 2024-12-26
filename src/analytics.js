// src/analytics.js
export const initGA = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-YWDFCK5NPF"); // Replace with your Measurement ID
  };
  
  export const logPageView = (url) => {
    if (window.gtag) {
      window.gtag("config", "G-YWDFCK5NPF", { page_path: url }); // Replace Measurement ID
    }
  };
  
  // src/analytics.js
export const trackEvent = ({ action, category, label, value }) => {
  if (window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
