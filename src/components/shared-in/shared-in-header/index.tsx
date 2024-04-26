import React from 'react'
import { Ionicons } from '@expo/vector-icons'

import * as S from './shared-in-header.styles'
import theme from '@root/styles/theme'

type SharedInHeaderProps = {
  totalOnline: number
  totalShared: number
}
const SharedInHeader = ({
  totalOnline = 0,
  totalShared = 0,
}: SharedInHeaderProps) => {
  return (
    <S.Root>
      <S.OlympusInWrapper>
        <S.OlympusInAvatar
          source={{
            uri: 'https://avatars.githubusercontent.com/u/49714406?v=4',
          }}
        />
        <S.OlympusInContainer>
          <S.OlympusInName>Anthony Lopez</S.OlympusInName>
          <S.OlympusAvailableContainer>
            <S.OlympusAvailable>{totalShared} Olympus</S.OlympusAvailable>
            <S.OlympusOline>{totalOnline} Online</S.OlympusOline>
          </S.OlympusAvailableContainer>
        </S.OlympusInContainer>
      </S.OlympusInWrapper>
      <S.OlympusChatWrapper>
        <S.OlympusIcon>
          <Ionicons name="search-outline" color={'white'} size={22} />
        </S.OlympusIcon>
      </S.OlympusChatWrapper>
    </S.Root>
  )
}

export default SharedInHeader
