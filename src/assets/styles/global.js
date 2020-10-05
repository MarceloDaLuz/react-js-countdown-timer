import styled from 'styled-components';
import backgroundImage from '../images/background.jpg';

export const Container = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;  
`;