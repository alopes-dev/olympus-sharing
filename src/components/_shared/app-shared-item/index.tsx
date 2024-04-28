import { generatorKeys } from "@root/helpers";
import { AppDivider } from "../app-global/app-global.styles";
import * as S from "./app-shared-item.styles";
import { Fragment, ReactNode } from "react";

type SharedChildren = {
  title: string;
  detail: string;
};

type SharebleData = {
  title: string;
  children: SharedChildren[];
};
type AppSharedItemProps = {
  children?: ReactNode;
  sharebleData: SharebleData;
};

export const AppSharedItem = ({
  sharebleData: { title, children: cardChildren },
  children,
}: AppSharedItemProps) => {
  return (
    <S.Root>
      {title && <S.Title>{title}</S.Title>}
      <S.Card>
        {cardChildren?.map((item, index) => (
          <Fragment key={generatorKeys("cards")}>
            <S.CardTitle>{item?.title}</S.CardTitle>
            <S.CardDetail>{item?.detail}</S.CardDetail>
            {cardChildren.length - 1 !== index && <AppDivider />}
          </Fragment>
        ))}
        {children}
      </S.Card>
    </S.Root>
  );
};
