import styled from "styled-components";

export const HeaderStyle = styled.header`
  background: #24241e;
  * {
    text-align: start;
  }

  .container {
    .profile {
      padding: 4rem 0 2rem;
      @media (max-width: 700px) {
        flex-direction: column;
      }
      .profile-details {
        margin-right: 30px;
        h1 {
          color: #cfdfc9;
          font-size: 2.5rem;
          line-height: 3.5rem;
        }
        p {
          color: #90ac85;
        }
        .social-handle {
          a {
            margin-right: 20px;
          }
        }
        @media (max-width: 700px) {
          &,
          * {
            text-align: center !important;
          }
          margin: 0 0 2rem;
        }
      }
    }

    .about {
      padding: 1rem 0 2rem;
      p {
        color: #cfdfc9;
        margin-bottom: 10px;
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
