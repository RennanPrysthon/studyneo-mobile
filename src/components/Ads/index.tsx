import React from 'react';

import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';
import { Container } from './styles';

interface Props {
  size?: 'REGULAR' | 'LARGE';
}
export const Banner: React.FC<Props> = ({ size = 'REGULAR' }) => (
  <Container>
    <BannerAd
      unitId={TestIds.BANNER}
      size={
        size === 'REGULAR' ? BannerAdSize.BANNER : BannerAdSize.LARGE_BANNER
      }
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
      onAdLoaded={() => {
        console.log('Advert loaded');
      }}
    />
  </Container>
);
