import React, { useRef } from 'react';

import { Animated, Pressable } from 'react-native';

import { Matter, MatterTitle } from './styles';
import { TapGestureHandler, TapGestureHandlerStateChangeEvent, State } from 'react-native-gesture-handler';

interface Matter {
  id: number;
  area_id: number;
  title: string;
}

interface Props {
  color: { c1: string, c2: string };
  item: Matter;
  onPress: (id: number, title: string) => void;
}

const Area: React.FC<Props> = ({ item, color, onPress }) => {

  const size = useRef(new Animated.Value(0)).current;

  const onPressIn = () => {
    Animated.timing(size, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true
    }).start();
  }

  const onPressOut = () => {
    Animated.timing(size, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true
    }).start();
  }

  const { c1, c2 } = color;

  function onHandler(event: TapGestureHandlerStateChangeEvent) {
    if (event.nativeEvent.state === State.BEGAN) {
      onPressIn()
    }
    if (
      event.nativeEvent.state === State.CANCELLED ||
      event.nativeEvent.state === State.END ||
      event.nativeEvent.state === State.FAILED
    ) {
      onPressOut()
    }
  }

  return (
    <Pressable
      key={item.id}
      onPress={() => {
        onPress(item.id, item.title)
      }}
    >
      <TapGestureHandler
        onHandlerStateChange={onHandler}
      >
        <Animated.View
          style={{
            transform: [
              {
                scale: size.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.8],
                  extrapolate: 'clamp'
                })
              }
            ]
          }}
        >
          <Matter
            colors={[c1, c2]}
            start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }}
          >
            <MatterTitle>
              {item.title}
            </MatterTitle>
          </Matter>
        </Animated.View>
      </TapGestureHandler>
    </Pressable>
  )
};

export default Area;
