import styled from "styled-components";

export const ProjectsStyle = styled.div`
  background: #24241e;
  display: flex;

  .container {
    border-top: 1px solid #cfdfc9;
    border-bottom: 1px solid #cfdfc9;
    text-align: start;
    padding: 4rem 0;
    margin-bottom: 4rem;

    .sub-container {
      width: 100%;

      .title {
        font-size: 20px;
        font-weight: 700;
      }

      ul {
        li {
          position: relative;
          padding-left: 40px;
          margin-top: 30px;
          &:before {
            content: "/";
            height: 25px;
            width: 25px;
            background: #3f6c2e;
            left: 0;
            position: absolute;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
          }
        h3 {
          font-weight: 500;
        }
          .source {
            margin-top: 10px;
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
