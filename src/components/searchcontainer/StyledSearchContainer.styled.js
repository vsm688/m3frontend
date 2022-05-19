import styled from "styled-components";


export const StyledSearchContainerDiv = styled.div`
    width: 100%;
    flex: 1 1 auto;
    display:flex;
    align-items: center;
    flex-direction: column;
`

export const SearchBox = styled.div`
    display:flex;
    height: 40%;
    align-items: flex-end;
    
`
export const SearchButton = styled.div`
    height: 40px;
    background: green;
    width: auto;
    display:flex;
    margin:0;
    padding: 0 20px;
    justify-content: center;
    align-items: center;
    :hover{
        opacity: 0.6;
        cursor: pointer;
    }

`
export const SearchParent = styled.div`
    display:flex;
    border: 1px solid black;
`

export const SearchResults = styled.div`
    display:flex;
    padding: 20px;
    background-color: aliceblue;
`
export const StyledSearchContainer = styled.input`

    height: 40px;
    margin:0;
    padding:0;
    border :0;
    font-size: 1.5rem;

`