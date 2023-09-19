import styled from "styled-components";

const NumberSelector = ({selectedNumber,setselectedNumber,error}) => {
  const arrayNumber = [1, 2, 3, 4, 5, 6];

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrayNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => setselectedNumber(value)}
          >
            {value}
          </Box>
        ))}
        {/* its Old way 
          <Box>1</Box>
          <Box>2</Box>
          <Box>3</Box>
          */}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`


  display: flex;
  flex-direction: column;
  /* border: 2px solid black; */
  align-items: end;


  .error{
    color: red;
    transition: 0.1s ease-in-out;
  }
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border-radius: 3px;
  color: black;
  display: grid;
  place-items: center;
  border: 1px solid black;
  cursor: pointer;
  font-size: 24px;
  font-weight: 700;
  transition: 0.4s ease-in;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
