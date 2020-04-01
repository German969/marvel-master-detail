import { ReactComponent as ComicIcon } from './assets/comic.svg';
import { ReactComponent as ComicIconDisabled } from './assets/comic-disable.svg';
import { ReactComponent as EventIcon } from './assets/event.svg';
import { ReactComponent as EventIconDisabled } from './assets/event-disabled.svg';
import { ReactComponent as StoryIcon } from './assets/story.svg';
import { ReactComponent as StoryIconDisabled } from './assets/story-disabled.svg';

export default function ({comics, series, events, stories, classes}) {
  const contentAvailable = [comics, series, events, stories].map((item) => {
    return item.returned > 0;
  });

  const getAvailableLabel = (count, content) => {
    return `This superhero appears in ${count} ${content}.`;
  };
  const getUnavailableLabel = (content) => {
    return `This superhero doesn't appear in any ${content}.`;
  };

  const comicIconComponent = contentAvailable[0] ? ComicIcon : ComicIconDisabled;
  const seriesIconClass = contentAvailable[1] ? classes.seriesIcon : classes.seriesIconDisabled;
  const eventIconComponent = contentAvailable[2] ? EventIcon : EventIconDisabled;
  const storyIconComponent = contentAvailable[3] ? StoryIcon : StoryIconDisabled;

  const comicTooltipLabel = contentAvailable[0] ?
    getAvailableLabel(comics.returned, 'comics') :
    getUnavailableLabel('comics');

  const seriesTooltipLabel = contentAvailable[1] ?
    getAvailableLabel(series.returned, 'series') :
    getUnavailableLabel('series');

  const eventsTooltipLabel = contentAvailable[2] ?
    getAvailableLabel(events.returned, 'events') :
    getUnavailableLabel('events');

  const storiesTooltipLabel = contentAvailable[3] ?
    getAvailableLabel(stories.returned, 'stories') :
    getUnavailableLabel('stories');

  return {
    comics: {
      icon: comicIconComponent,
      label: comicTooltipLabel
    },
    series: {
      class: seriesIconClass,
      label: seriesTooltipLabel
    },
    events: {
      icon: eventIconComponent,
      label: eventsTooltipLabel
    },
    stories: {
      icon: storyIconComponent,
      label: storiesTooltipLabel
    }
  }
}