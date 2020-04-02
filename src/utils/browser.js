import { toHashPath } from "./string-converter";

export function pushNewHeroPath(name) {
  const heroURLFromName = window.location.href.split('#')[0] + '#' + toHashPath(name);

  window.scrollTo(0, 0);

  window.history.pushState(null, null, heroURLFromName);
}