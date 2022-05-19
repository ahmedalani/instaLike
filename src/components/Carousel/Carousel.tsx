import React from 'react';
import {Image, FlatList, useWindowDimensions} from 'react-native';
import DoublePressable from '../DoublePressable';

interface ICarousel {
  images: string[];
  onDoublePress: () => void;
}
const Carousel = ({images, onDoublePress}: ICarousel) => {
  const {width} = useWindowDimensions();
  return (
    <FlatList
      data={images}
      renderItem={({item}) => (
        <DoublePressable onDoublePress={onDoublePress}>
          <Image source={{uri: item}} style={{width, aspectRatio: 1}} />
        </DoublePressable>
      )}
      horizontal
      pagingEnabled
    />
  );
};

export default Carousel;
