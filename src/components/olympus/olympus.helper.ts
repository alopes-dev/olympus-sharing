import { Extrapolation,  SharedValue,  interpolate } from "react-native-reanimated";
import { HEADER_MIN_HEIGHT } from "./olympus.consts";

export const opacityInterpolate = (scrollY: SharedValue<number>): any =>{
  const opacityInterpolate = interpolate(
    scrollY.value,
    [0, HEADER_MIN_HEIGHT],
    [1, 0],
    Extrapolation.CLAMP
  );

  return {
    opacity: opacityInterpolate,
  } ;
}