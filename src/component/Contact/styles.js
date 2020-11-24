import styled from "styled-components";

export const ContactStyle = styled.div`
  background: #33332a;
  display: flex;

  .contact-container {
    text-align: start;
    padding: 4rem 0;
    .contact-sub-container {
      h3 {
        margin-bottom: 2rem;
      }

      .form-container {
        form {
          label {
            margin-bottom: 15px;
            display: inline-block;
          }
          .inputMain {
            width: 46%;
            text-align: start;
            margin-top: 3rem;
            input {
              border: 1px solid #cfdfc9;
              background: #24241e;
              width: 100%;
              font-size: 1.25rem;
              padding: 15px;
            }
            @media (max-width: 700px) {
              width: 100%;
            }
          }
          .textAreaMain {
            text-align: start;
            width: 100%;
            margin-top: 3rem;
            textarea {
              border: 1px solid #cfdfc9;
              background: #24241e;
              width: 100%;
              padding: 20px;
              height: 200px;
              resize: vertical;
              font-size: 1.25rem;
            }
          }
          .btn {
              margin-top: 3rem
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
