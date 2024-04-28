import React from "react";
import { Ionicons, FontAwesome6, Feather, Entypo } from "@expo/vector-icons";

import * as S from "./buttons-actions.styles";
import theme from "@root/styles/theme";

const ButtonsActions = () => {
  return (
    <S.Root>
      <S.ButtonOptions>
        <S.Button style={{ width: 143 }}>
          <FontAwesome6
            name="share-from-square"
            size={18}
            color={theme.COLORS.dark.text}
          />
          <S.ButtonText>Share</S.ButtonText>
        </S.Button>
        <S.Button style={{ width: 50 }}>
          <Feather name="phone" color={theme.COLORS.dark.text} size={20} />
        </S.Button>
        <S.Button style={{ width: 50 }}>
          <Ionicons
            name="chatbubbles-outline"
            size={22}
            color={theme.COLORS.dark.text}
          />
        </S.Button>
        <S.Button
          style={{ width: 50, backgroundColor: theme.COLORS.dark.attention }}
        >
          <Entypo name="block" size={20} color={theme.COLORS.dark.text} />
        </S.Button>
      </S.ButtonOptions>
    </S.Root>
  );
};

export default ButtonsActions;
