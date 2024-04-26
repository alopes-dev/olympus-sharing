import { AppPlaceholderCard } from '@root/components/_shared'
import { getOnlineOlympus } from '@root/services/get-online-olympus'
import { TOlympus } from '@root/types'
import React, { useCallback, useEffect, useState } from 'react'
import { ScrollView } from 'react-native'

import * as S from './shared-in-online-olympus.styles'

type SharedInOlineOlympusProps = {
  onlineOlympus: TOlympus[]
  isLoading?: boolean
}

const SharedInOlineOlympus = ({
  isLoading,
  onlineOlympus,
}: SharedInOlineOlympusProps) => {
  return (
    <S.Root>
      <S.OlympusOlineTitle>Onlines</S.OlympusOlineTitle>
      <ScrollView horizontal contentContainerStyle={{ paddingLeft: 15 }}>
        {isLoading && (
          <AppPlaceholderCard
            count={10}
            borderRadius={50}
            variant="dark"
            style={{
              width: 42,
              height: 42,
              marginRight: 16,
            }}
          />
        )}

        {onlineOlympus?.map((olympus) => (
          <S.OlympusAvailableContainer key={Math.random().toString()}>
            <S.OlympusOlineAvatar
              source={{
                uri: olympus.picture,
              }}
            />
            <S.OlympusOnlineName>{olympus.firstName}</S.OlympusOnlineName>
          </S.OlympusAvailableContainer>
        ))}
      </ScrollView>
    </S.Root>
  )
}

export default SharedInOlineOlympus
