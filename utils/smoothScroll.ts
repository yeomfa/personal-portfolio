import { scroller } from 'react-scroll';

// TODO:  Refactor this function
const smoothScroll = (id: string) => {
  scroller.scrollTo(id, { duration: 500, smooth: true, offset: -80 });
};

export default smoothScroll;
