import React from 'react';
import {configure, mount} from 'enzyme';
import HeroRowSkeleton from "../hero-row-skeleton";
import Skeleton from '@material-ui/lab/Skeleton';
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

describe('Hero Row Skeleton', () => {
  const wrapper = mount(<HeroRowSkeleton />);

  it('should render detail page skeleton', () => {
    const skeletons = wrapper.find(Skeleton);

    expect(skeletons).toHaveLength(3);
    expect(skeletons.at(0).props()).toMatchObject({
      variant: 'circle',
      className: 'HeroRowSkeleton-avatarSkeleton-2',
      animation: 'wave'
    });
    expect(skeletons.at(1).props()).toMatchObject({
      variant: 'text',
      className: 'HeroRowSkeleton-nameSkeleton-3',
      animation: 'wave'
    });
    expect(skeletons.at(2).props()).toMatchObject({
      variant: 'rect',
      className: 'HeroRowSkeleton-flagsSkeleton-4',
      animation: 'wave'
    });
  });
});