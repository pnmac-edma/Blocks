import { useEffect, useState } from 'react';

export default function ScrollToTopController () {
  const { pathname, search } = useState();

  useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } catch (error) {
      // just a fallback for older browsers
      window.scrollTo(0, 0);
    }
  }, [pathname, search]);
  return null;
}
