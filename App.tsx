/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import colors from './src/theme/colors';
import font from './src/theme/fonts';

const App = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: colors.primary, fontSize: font.size.xlg}}>
        this is instaLike
      </Text>
      <AntDesign name="instagram" size={50} color={colors.primary} />
    </View>
  );
};

export default App;
