import React, { useEffect, useState } from 'react'
import { StyledSearchContainerDiv, SearchBox, SearchButton, SearchParent, SearchResults } from './StyledSearchContainer.styled'
import { StyledSearchContainer } from './StyledSearchContainer.styled';
const SearchContainer = () => {
  const [inputState, setInputState] = useState("");
  const [returnedStated, setReturnedState] = useState(null);
  
  useEffect(() =>{
    if (returnedStated != null){
      for (let i = 0; i < returnedStated.webPages.value.length; i ++){
        console.log(returnedStated.webPages.value[i].url);
      }      
    }
 
  },[returnedStated]);


  const startCallChain = () => {
    GrabInputAndSanitise(inputState)
  }

  const GrabInputAndSanitise = (query) => {
    const trimmedQuery = addEncodedSpaceValues(removeNonAlphaNumericChars(query));
    console.log(trimmedQuery);
    callSearchAPI(trimmedQuery)
  }

  const removeNonAlphaNumericChars = (queryString) => {
    let queryStringtrimmed = queryString.replace(/[^a-zA-Z0-9\s+]+/g, "");
    return queryStringtrimmed;
  }

  const addEncodedSpaceValues = (queryString) => {
    return queryString.replace(/ +/g, " ").replaceAll(" ", "%20");
  }

  const callSearchAPI = (sanitisedString) => {

    const fetchPromise = fetch("http://localhost:8989/search",{
      method: "POST",
      headers: {
        'Content-type': 'application/json' 
      },
      body: JSON.stringify({query:sanitisedString})
    })
    .then(
      (response) => {
          if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
              response.status);
          return;
          }
  
          // Examine the text in the response
          response.json().then((data) => {
            setReturnedState(data);
          });
      }
      )
      .catch((err) => {
      console.log('Fetch Error :-S', err);
      });

  }
  return (
    <StyledSearchContainerDiv>
      <SearchBox>
        <SearchParent>
          <StyledSearchContainer onChange={(event) => setInputState(event.target.value)}></StyledSearchContainer>
          <SearchButton onClick={
            (e) =>{
              e.preventDefault();
              startCallChain();
            }
            }><p>Search</p></SearchButton>
        </SearchParent>
      </SearchBox>
      <SearchResults>

      </SearchResults>
    </StyledSearchContainerDiv>
  )
}
export default SearchContainer