import styled from "styled-components";

export const FooterStyle = styled.div`
  background: #90ac85;

  .footer-container {
    padding: 20px;
    h4 {
      color: #24241e;
    }

    ul {
      padding: 0;
      display: flex;
      li {
        margin: 0 20px;
        height: 40px;
        width: 40px;
        display: flex;
        justify-content: center;
        cursor: pointer;
        align-items: center;
        &:hover a {
          color: #3f6c2e;
        }
        a {
          color: #24241e;
          svg {
            height: 20px;
            width: 20px;
          }
        }
      }
    }
    @media (max-width: 750px) {
      .container {
        justify-content: center;
      }
    }
  }
`;
