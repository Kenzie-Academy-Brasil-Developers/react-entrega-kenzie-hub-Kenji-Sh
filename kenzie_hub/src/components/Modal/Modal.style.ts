import styled from "styled-components";

export const ModalContent = styled.div`
  width: 369px;
  height: 362px;
  border-radius: 4px;
  background: var(--grey_3);

  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    padding: 0 20px;
    border-radius: 4px 4px 0 0;
    background: var(--grey_2);

    h3 {
      font-size: 14px;
      font-weight: 700;
      line-height: 24px;
    }

    svg {
      cursor: pointer;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 22px;
    gap: 20px;

    .button-container {
      display: flex;
      gap: 22px;

      button {
        :last-child {
          width: 50%;
        }
      }
    }
  }
`;
