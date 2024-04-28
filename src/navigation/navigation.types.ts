import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// <NativeStackNavigationProp<ParamListBase>>

export type RootStackParamList = NonConnectedStackParamList;

type NonConnectedStackParamList = {
  NonConnectedOlympus: { olympusId: string };
  SharedIn: any;
};

export type NonConnectedOlympusRouteProp = RouteProp<
  RootStackParamList,
  "NonConnectedOlympus"
>;

export type SharedInRouteProp = RouteProp<RootStackParamList, "SharedIn">;
