import styled from '@emotion/styled';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.5;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;

  & .modal {
    z-index: 1051;
    background: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 1000px;
    width: 600px;
    height: 480px;
    border-radius: 10px;

    & .modalHeader {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 30px;
      height: 120px;
      background-color: #3C5654;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;

      & .ant-avatar {
        position: absolute;
        top: 55px;
        left: 40px;
      }
      
      & > .modalDescription {
        position: absolute;
        left: 200px;
        top: 64px;
        font-size: 18px;
        & > p {
          margin: 0;
        }
        & > p.white {
          color: white;
        }
      }
    }

    

    & .modalContent {
      padding: 80px 30px 30px 40px;
      height: 360px;
    }

    & .modalHeader > .modalCloseButton {
      width: 30px;
      height: 30px;
      cursor: pointer;
      border: 0;
    }
  }
`;
