import { useEffect, useState } from 'react';

export type Route = { page: 'home' } | { page: 'board'; id: string } | { page: 'legacy'; id: string };

function parse(): Route {
  const [, page, id] = location.hash.replace(/^#/, '').split('/');
  if (page === 'lesson' && id) return { page: 'board', id };
  if (page === 'legacy' && id) return { page: 'legacy', id };
  return { page: 'home' };
}

export function useRoute(): Route {
  const [route, setRoute] = useState(parse);
  useEffect(() => {
    const on = () => setRoute(parse());
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  return route;
}

export const go = (hash: string) => { location.hash = hash; };
