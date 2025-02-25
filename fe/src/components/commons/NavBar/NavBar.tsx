import * as S from './NavBarStyle';
import { Tab, Button } from '@commons/index';
import { TabProps } from '@commons/Tab/Tab';
import { Category } from '@type-store/services/category';
import { ReactNode, MouseEvent } from 'react';

export interface NavBarProps {
  title?: string;
  leftBtn?: ReactNode;
  rightBtn?: ReactNode;
  tabInfo?: TabProps;
  categoryInfo?: {
    categories: Category[];
    selectedCategoryIdx: number;
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  };
  isTransparent?: boolean;
  bottomComps?: ReactNode;
}

export const NavBar = ({
  title,
  leftBtn,
  rightBtn,
  tabInfo,
  isTransparent = false,
  categoryInfo,
  bottomComps,
}: NavBarProps) => {
  return (
    <S.Header isTransparent={isTransparent}>
      <S.HeaderTop>
        <S.ButtonContainer>{leftBtn}</S.ButtonContainer>
        <S.Title>{title}</S.Title>
        <S.ButtonContainer>{rightBtn}</S.ButtonContainer>
      </S.HeaderTop>

      {tabInfo && (
        <S.HeaderBottom hasTab={true}>
          <S.TabContainer>
            <Tab {...tabInfo}></Tab>
          </S.TabContainer>
        </S.HeaderBottom>
      )}

      {categoryInfo && (
        <S.HeaderBottom hasCategory={true}>
          <S.CategoryContainer>
            {categoryInfo.categories.map((category) => {
              const isActive =
                category.idx === categoryInfo.selectedCategoryIdx;
              return (
                <Button
                  key={category.idx}
                  id={String(category.idx)}
                  title={category?.text}
                  state={isActive ? 'active' : 'default'}
                  hasBorder={true}
                  shape="small"
                  color={isActive ? 'accentText' : 'neutralText'}
                  onClick={categoryInfo.onClick}
                ></Button>
              );
            })}
          </S.CategoryContainer>
        </S.HeaderBottom>
      )}

      {bottomComps && (
        <S.HeaderBottom>
          <S.BottomChildrenContainer>{bottomComps}</S.BottomChildrenContainer>
        </S.HeaderBottom>
      )}
    </S.Header>
  );
};
