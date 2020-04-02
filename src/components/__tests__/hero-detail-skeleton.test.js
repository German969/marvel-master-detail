import React from 'react';
import {configure, mount} from 'enzyme';
import HeroDetailSkeleton from "../hero-detail-skeleton";
import Skeleton from '@material-ui/lab/Skeleton';
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

describe('Hero Detail Skeleton', () => {
  const wrapper = mount(<HeroDetailSkeleton />);

  it('should render character fields skeleton', () => {
    const skeletons = wrapper.find(Skeleton);

    expect(skeletons).toHaveLength(3);
    expect(skeletons.at(0).props()).toMatchObject({
      variant: 'circle',
      className: 'HeroDetailSkeleton-avatarSkeleton-2',
      animation: 'wave'
    });
    expect(skeletons.at(1).props()).toMatchObject({
      variant: 'text',
      className: 'HeroDetailSkeleton-nameSkeleton-3',
      animation: 'wave'
    });
    expect(skeletons.at(2).props()).toMatchObject({
      variant: 'text',
      className: 'HeroDetailSkeleton-descriptionSkeleton-4',
      animation: 'wave'
    });
  });
});