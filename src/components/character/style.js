import styled from 'styled-components';

export const Card = styled.div`
  width: 600px;
  height: 220px;
  background: rgb(60, 62, 68);
  border-radius: 0.5rem;
  display: flex;
`;

export const Image = styled.img`
  width: 230px;
  border-bottom-left-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
`;

export const SectionInfo = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  color: #fff;
  margin: 0px 0px 3px;

  :hover {
    color: rgb(255, 152, 0);
  }
`;

export const Subtitle = styled.text`
  font-size: 16px;
  color: #fff;
  display: flex;
  align-items: center;
`;

export const Label = styled.text`
  color: rgb(158, 158, 158);
  font-size: 16px;
  margin: 20px 0px 8px;
`;

export const Text = styled.text`
  font-size: 18px;
  color: #fff;

  :hover {
    color: rgb(255, 152, 0);
  }
`;

export const Circle = styled.div`
  border-radius: 100%;
  background-color: ${(props) =>
    props.status === 'Alive' ? 'rgb(85, 204, 68)' : 'rgb(214, 61, 46)'};
  width: 0.5rem;
  height: 0.5rem;
  margin-right: 5px;
`;
