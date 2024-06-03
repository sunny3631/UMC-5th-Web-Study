import styled from 'styled-components';

export const MovieContainer = styled.div`
    position : relative;
    width : 150px;
    margin : 16px;
    background-color: #373b69;
    color : white;
    border-radius : 5px;
    box-shadow : 3px 3px 5px rgba(0,0,0,0.1);
`;

export const MovieImage = styled.img`
    width : 100%;
`;

export const MovieInfo = styled.div`
    display : flex;
    padding : 20px;
    justify-content: space-between;
    align-items: center;
`;