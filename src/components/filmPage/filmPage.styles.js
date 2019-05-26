import styled from 'styled-components';

export const SearchLinkContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    margin-top: 10px;
`;

export const SearchLink = styled.a`
    display: inline-block;
    color: #fff !important;
    background-color: #007bff;
    border-radius: 4px;
    text-align: center;
    vertical-align: middle;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    padding: 6px 12px;
    text-decoration: none;

    &:hover{
        text-decoration: none;
        cursor: pointer;
        background-color: #0069D9;
    }
`;

export const FilmPageImg = styled.img`
	width: 100%;
`;

export const FilmPageTitle = styled.span`
    margin-right: 15px;
`;

export const FilmPageRelease = styled.p`
    font-weight: bold;
`;

export const FilmPageDuration = styled.span`
    margin-left: 15px;
`;

export const FilmsSimilarGenre = styled.div`
    margin: 20px 0;
`;
