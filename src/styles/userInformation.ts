import styled from 'styled-components';

export const UserInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const UserInformationH2 = styled.h2`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1.5rem;
`;

export const UserInformationBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
`;

export const UserInformationSpan = styled.span`
  margin-top: 1rem;
  border: 1px solid var(--color-gray-light);
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: 30rem;
  height: 4rem;
  display: flex;
  align-items: center;
`;

export const BtnBox = styled.div`
  margin-top: 2rem;
`;

/*
 * 모달 스타일
 */

// 레이블을 위한 컨테이너 스타일
export const LabelBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export interface UserModalBtnBoxProps {
  isOpen: boolean;
  onClose: () => void;
}

// 사용자 정보 모달의 메인 컨테이너 스타일
export const UserInformationModalBox = styled.div<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? 'block' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-white);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  width: 40%;
  height: auto;
`;

// 모달의 배경 스타일
export const ModalBackgroundBox = styled.div<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const UserInformationModalBtnBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 1rem;
`;

export const UserModalInformationH2 = styled.h2`
  margin-bottom: 2rem;
`;
