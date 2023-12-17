import React, { useEffect, useState } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

const GoogleAnalyticsScript: React.FC = () => {
  const [isScriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
      script.async = true;
      script.onload = () => setScriptLoaded(true);

      document.head.appendChild(script);
    };

    if (process.env.NODE_ENV === 'production') {
      loadScript();
    }

    return () => {
      // Cleanup: Remove the script when the component unmounts
      const scriptElement = document.querySelector(`script[src="https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}"]`);
      if (scriptElement) {
        scriptElement.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (isScriptLoaded) {
      const script = document.createElement('script');
      script.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
          page_path: window.location.pathname
        });
      `;
      document.head.appendChild(script);
    }
  }, [isScriptLoaded]);

  return null; // No need to render anything for this component
};

export default GoogleAnalyticsScript;
