import styled from "styled-components";

export const Footer = () => {
  return (
    <SFooter>
      <small>Copyright &copy; 2021 こえむすび Inc.</small>
    </SFooter>
  );
};

const SFooter = styled.footer`
  display: flex;
  background-color: #ebbbbb;
  color: #fff;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 4vh;
  font-family: "Hannari", serif;
`;
