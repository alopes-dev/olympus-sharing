import { getSharedOlympus } from '@root/services/get-shared-olympus'
import { TOlympus } from '@root/types'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { ScrollView } from 'react-native'
import { AppPlaceholderCard } from '../_shared'

import SharedInHeader from './shared-in-header'
import SharedInOnlineOlympus from './shared-in-online-olympus'
import * as S from './shared-in.styles'
import SharedOlympus from './shared-olympus'

const SharedIn = () => {
  const [sharedOlympus, setSharedOlympus] = useState<TOlympus[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleGetSharedOlympus = useCallback(async () => {
    setIsLoading(true)
    const sharedOlympusResult = await getSharedOlympus()
    setSharedOlympus(sharedOlympusResult ?? [])
    setIsLoading(false)
  }, [])

  useEffect(() => {
    handleGetSharedOlympus()
  }, [handleGetSharedOlympus])

  const onlineOlympus = useMemo(
    () => sharedOlympus?.filter((olympus) => olympus.isOnline),
    [sharedOlympus],
  )

  return (
    <S.Root>
      <SharedInHeader
        totalShared={sharedOlympus?.length ?? 0}
        totalOnline={onlineOlympus?.length ?? 0}
      />
      <ScrollView>
        <SharedInOnlineOlympus
          isLoading={isLoading}
          onlineOlympus={onlineOlympus}
        />
        <S.SharedOlympusTitle>Shared Olympus</S.SharedOlympusTitle>

        {isLoading && (
          <AppPlaceholderCard
            count={10}
            variant="dark"
            style={{
              width: '100%',
              height: 50,
              marginBottom: 16,
            }}
          />
        )}

        {sharedOlympus?.map((olympus) => (
          <SharedOlympus olympus={olympus} key={Math.random().toString()} />
        ))}
      </ScrollView>
    </S.Root>
  )
}

export default SharedIn
