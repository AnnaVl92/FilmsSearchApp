import styled from 'styled-components';

export const FilmLink = styled.a`
    display: block;
    cursor: pointer;
    margin-bottom: 10px;

    &:hover{
        text-decoration: none;
        
        h2,p {
            color: #0056b3;
        }
    }
`;

export const FilmImageContainer = styled.div`
    max-height: 492px;
    overflow: hidden;
`;
