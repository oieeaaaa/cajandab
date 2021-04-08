export const breakpoints = {
  //mobile: 375,
  tablet: 768,
  tabletLandscape: 1024,
  desktop: 1280,
};

const breakpoint = () => {
  if (!window) return false;

  const { innerWidth: windowSize } = window;

  if (windowSize < breakpoints.tablet) {
    return "mobile";
  }

  if (windowSize < breakpoints.tabletLandscape) {
    return "tablet";
  }

  if (windowSize < breakpoints.desktop) {
    return "tabletLandscape";
  }

  if (windowSize >= breakpoints.desktop) {
    return "desktop";
  }
};

export default breakpoint;
