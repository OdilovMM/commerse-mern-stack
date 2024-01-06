import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
`;

const Announcement = () => {
  return (
    <Container>
      Free shipping first online market for everyone is looking for!!!
    </Container>
  );
};

export default Announcement;
