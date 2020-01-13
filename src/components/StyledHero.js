import styled from 'styled-components';

import defaultImg from '../images/room-1.jpeg';

const StyledHero = styled.header`
	align-items: center;
	background: url(${props => props.img ? props.img : defaultImg}) center/cover no-repeat;
	display: flex;
	justify-content: center;
  min-height: 60vh;  
`;

export default StyledHero;