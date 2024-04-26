import { View, Text } from 'react-native'
import React from 'react'
import theme from '@root/styles/theme'
import { AntDesign } from '@expo/vector-icons'
import { AppModalContainer } from '@root/components/_shared/'

import * as S from './discovery.styles'

const Discovery = () => {
  return (
    <S.Root>
      <AntDesign name="dingding" color={theme.COLORS.dark.primary} size={40} />
      <Text style={{ color: theme.COLORS.dark.primary }}>Olympus</Text>
      <AppModalContainer
        snapPoints={['10%']}
        contentContainerStyle={{ paddingBottom: 0 } as any}
      >
        <S.OlympusNears>
          <S.AvatarsWrapper>
            {new Array(3).fill(null).map(() => (
              <S.Avatar
                key={Math.random().toString()}
                source={{
                  uri: 'https://picsum.photos/200',
                }}
                stype={{
                  shadowOffset: { width: 0, height: 8 },
                  shadowOpacity: 0.3,
                  shadowRadius: 15,
                }}
              />
            ))}
            <S.OverXOlympusNearText>
              + 89 Olympus near you
            </S.OverXOlympusNearText>
          </S.AvatarsWrapper>
        </S.OlympusNears>
      </AppModalContainer>
    </S.Root>
  )
}

export default Discovery
