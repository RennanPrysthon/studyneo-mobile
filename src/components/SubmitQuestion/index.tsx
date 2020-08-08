import React, { useRef, useContext } from 'react';

import { Text } from './styles';
import { Animated } from 'react-native';
import ThemeContext from '~/contexts/themes';

const SubmitQuestion: React.FC<{ onPress: () => void, canShow?: boolean, fill?: boolean }> = ({ onPress, canShow = false, fill = false }) => {

  const { theme } = useContext(ThemeContext);

  const size = useRef(new Animated.Value(0)).current;

  const show = () => {
    Animated.timing(size, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true
    }).start();
  };

  const hide = () => {
    Animated.timing(size, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true
    }).start();
  };

  React.useEffect(() => {
    (() => { if (canShow) { hide() } else { show() } })();
  }, [canShow]);

  const dimensions = useRef(new Animated.Value(10)).current;

  const preencher = () => {
    Animated.timing(dimensions, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true
    }).start();
  }

  const desPreencher = () => {
    Animated.timing(dimensions, {
      toValue: 10,
      duration: 100,
      useNativeDriver: true
    }).start();
  }

  React.useEffect(() => {
    (() => { if (fill) { preencher() } else { desPreencher() } })();
  }, [fill])

  return (
    <Animated.View
      onTouchStart={onPress}
      style={[
        {
          zIndex: 100,
          position: 'absolute',
          backgroundColor: theme.primary,
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          bottom: 10,
          left: 10,
          right: 10,

          borderRadius: dimensions.interpolate({
            inputRange: [0, 10],
            outputRange: [0, 10],
            extrapolate: 'clamp'
          })
        },
        {
          transform: [{
            scaleX: size.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
              extrapolate: 'clamp',
            })
          }, {
            translateY: dimensions.interpolate({
              inputRange: [0, 10],
              outputRange: [10, 0],
              extrapolate: 'clamp'
            })
          }, {
            scaleX: dimensions.interpolate({
              inputRange: [1, 10],
              outputRange: [1.1, 1],
              extrapolate: 'clamp'
            })
          }],
        },
      ]}
    >
      <Text>
        Finalizar
      </Text>
    </Animated.View>
  )
}

export default SubmitQuestion;
