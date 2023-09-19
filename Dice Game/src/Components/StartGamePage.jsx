
import styled from "styled-components";

const StartGamePage = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="./Images/main-logo.png" />
      </div>

      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGamePage;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  padding-top: 70px;
  margin: 0 auto;
  /* border: 2px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;

  .content h1 {
    font-size: 96px;
    white-space: nowrap;
  }
  .content{
    display: flex;
    flex-direction: column;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  width: 220px;
  padding: 10px 18px;
  border-radius: 5px;
  background: #000;
  color: white;
  border: none;
  cursor: pointer;
  border: 1px solid transparent;
  /* transition: 0.4s background ease-in; */

  &:hover{
    background-color: #d1d1d1;
    color: black;
    border: 1px solid black;
    transition: 0.3s ease-in;
  }
`;
