import styled from "styled-components";

export const NewsLetterStyle = styled.div`
  background: #404036;
  display: flex;

  .newsLetter-container {
    padding: 7rem 0;

    .newsLetter-sub-container {
      p {
        padding: 2rem 0;
      }

      form {
        .formSub {
          .inputMain {
            flex: 1;
            border-radius: 6px 0 0 6px;
            input {
              border: 1px solid #cfdfc9;
              background: #24241e;
              font-size: 1.125rem;
              padding: 0.75rem 1.5rem;
              width: 100%;
              border-right: none;
              @media (max-width: 700px) {
                border: 1px solid #cfdfc9;
                border-radius: 0.25rem;
              }
            }
          }
          .btn {
            button {
              width: 100%;
              padding: 0.75rem 2rem;
              border-radius: 0 0.25rem 0.25rem 0;
              @media (max-width: 700px) {
                border-radius: 0.25rem;
              }
            }
            @media (max-width: 700px) {
              margin-top: 15px;
            }
          }

          @media (max-width: 700px) {
            flex-direction: column;
            align-items: stretch;
          }
        }
      }
    }

    @media (max-width: 1000px) {
      width: 80%;
    }
    @media (max-width: 700px) {
      width: 90%;
    }
  }
`;
