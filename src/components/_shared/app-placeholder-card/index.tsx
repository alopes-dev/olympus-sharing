import { LinearGradient } from 'expo-linear-gradient'
import React, { FC } from 'react'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'

import { AppPlaceholderCardProps as Props } from './app-placeholder-card.types'

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)

export const AppPlaceholderCard: FC<Props> = ({
  style,
  count = 1,
  variant = 'light',
  styleFirstCard = {},
  borderRadius = 8,
}) => (
  <>
    {new Array(count).fill(null).map((_, index) => (
      <ShimmerPlaceholder
        key={`placeholder_card-${variant}-${index}`}
        style={[style, index === 0 ? styleFirstCard : {}, { borderRadius }]}
        shimmerColors={
          variant === 'dark'
            ? [
                'rgba(200, 194, 194, 0.57)',
                'rgba(200, 194, 194, 0.47)',
                'rgba(200, 194, 194, 0.49)',
              ]
            : [
                'rgba(0, 0, 0, 0.07 )',
                'rgba(0, 0, 0, 0.17)',
                'rgba(0, 0, 0, 0.09)',
              ]
        }
      />
    ))}
  </>
)
