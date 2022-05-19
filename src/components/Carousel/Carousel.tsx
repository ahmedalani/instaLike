import React, {useState, useRef} from 'react';
import {Image, FlatList, useWindowDimensions, View, ViewabilityConfig, ViewToken} from 'react-native';
import colors from '../../theme/colors';
import DoublePressable from '../DoublePressable';

interface ICarousel {
  images: string[];
  onDoublePress?: () => void;
}
const Carousel = ({images, onDoublePress = () => {}}: ICarousel) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const {width} = useWindowDimensions();

  // configuration for onViewableItemsChanged property of the flatList (required)
  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };
  // the func wrapped in useRef so we percist fuction throgh renders, if we don't (basically get a new fuction every render) it will
  // break the flatList code as it expect same fuction address for this specific property (onViewableItemsChanged)
  const onViewableItemsChanged = useRef(({viewableItems}: {viewableItems: Array<ViewToken>}) => {
    if (viewableItems.length > 0) {
      setActiveImageIndex(viewableItems[0].index || 0);
    }
  });
  return (
    <View>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <DoublePressable onDoublePress={onDoublePress}>
            <Image source={{uri: item}} style={{width, aspectRatio: 1}} />
          </DoublePressable>
        )}
        horizontal
        pagingEnabled
        // to highlight selected/viewed image dot
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
      />
      <View style={{flexDirection: 'row', justifyContent: 'center', position: 'absolute', bottom: 0, width: '100%'}}>
        {images.map((_, i) => (
          <View
            key={i}
            style={{
              width: 10,
              aspectRatio: 1,
              borderRadius: 5,
              backgroundColor: activeImageIndex === i ? colors.primary : colors.white,
              margin: 10,
              marginHorizontal: 5,
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;
