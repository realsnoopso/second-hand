import { icons } from '@assets/icons';
import * as S from './DialogStyle';
import { Button } from '@commons/index';
import { createPortal } from 'react-dom';
import { ReactNode } from 'react';
import { DialogStyleProps } from './DialogStyle';

interface DialogProps extends DialogStyleProps {
  isOpen: boolean;
  children: ReactNode;
  btnInfos: { left: BtnInfo; right: BtnInfo };
  handleBackDropClick: () => void;
  width: number;
}

interface BtnInfo {
  text: string;
  icon: keyof typeof icons;
  onClick: () => void;
}

export const Dialog = ({
  isOpen,
  btnInfos,
  children,
  handleBackDropClick,
  width = 240,
}: DialogProps) => {
  return (
    isOpen &&
    createPortal(
      <>
        <S.Dialog width={width}>
          <S.Contents>{children}</S.Contents>
          <S.Footer>
            {Object.entries(btnInfos).map((info) => {
              const [key, value] = info;
              return (
                <Button
                  key={key}
                  color={key === 'right' ? 'neutralTextStrong' : 'neutralText'}
                  title={value.text}
                  icon={value.icon ?? undefined}
                  onClick={value.onClick}
                  textAlign="center"
                  hasBorderRadius={false}
                ></Button>
              );
            })}
          </S.Footer>
        </S.Dialog>
        <S.Backdrop onClick={handleBackDropClick}></S.Backdrop>
      </>,
      document.querySelector('#modal-root') ?? document.body
    )
  );
};
