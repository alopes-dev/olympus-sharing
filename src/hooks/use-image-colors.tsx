import React, { useCallback, useEffect, useState } from "react";
import { getColors, ImageColorsResult } from "react-native-image-colors";

type UseImageColorsProps = {
  url: string;
};
type TColors = {
  background: string;
  primary: string;
  secondary: string;
};

type ReturnUseImageColors = {
  color: string | null;
  colors: TColors | null;
};

export const useImageColors = ({
  url,
}: UseImageColorsProps): ReturnUseImageColors => {
  const [color, setColor] = useState<string | null>(null);
  const [colors, setColors] = useState<TColors | null>({
    background: "#000000",
    primary: "#000000",
    secondary: "#000000",
  });

  const handleGeColors = useCallback(async () => {
    if (!url) return;
    const response = (await getColors(url, {
      fallback: "#000000",
      cache: true,
      key: url,
    })) as ImageColorsResult;

    if (response.platform === "ios") {
      setColor(response.background);
      setColors({
        background: response.background,
        primary: response.primary,
        secondary: response.secondary,
      });
    }
    if (response.platform === "android") {
      setColor(response.dominant);
      setColors({
        background: response.dominant,
        primary: response.average,
        secondary: response.vibrant,
      });
    }
  }, [url]);

  useEffect(() => {
    handleGeColors();
  }, [handleGeColors]);

  return { color, colors };
};
