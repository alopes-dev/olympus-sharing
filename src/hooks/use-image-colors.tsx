import React, { useCallback, useEffect, useState } from 'react'
import { getColors, ImageColorsResult } from 'react-native-image-colors'

type useImageColorsProps = {
  url: string
}

type IOSColors = {
  background: string
  primary: string
  secondary: string
  detail: string
  platform: 'ios'
}

type AndroidColors = {
  dominant: string
  average: string
  vibrant: string
  darkVibrant: string
  lightVibrant: string
  darkMuted: string
  lightMuted: string
  muted: string
  platform: 'android'
}

export const useImageColors = ({ url }: useImageColorsProps) => {
  const [color, setColor] = useState<string | null>(null)

  const handleGeColors = useCallback(async () => {
    const response = (await getColors(url, {
      fallback: '#000000',
      cache: true,
      key: url,
    })) as ImageColorsResult

    if (response.platform === 'ios') setColor(response.background)
    if (response.platform === 'android') setColor(response.dominant)
  }, [])

  useEffect(() => {
    handleGeColors()
  }, [handleGeColors])

  return { color }
}
