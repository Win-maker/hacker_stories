import { useCallback, useEffect, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import styles from './App.module.css'
import List from './List'
import InputLabel from './InputLabel'
import axios from 'axios'
import styled from 'styled-components'
import { SearchForm } from './SearchForm'


function storiesReducer(state, action) {
  switch (action.type) {
    case 'STORIES_FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        hasError:false
      }
    
      case 'STORIES_FETCH_SUCCESS':
        return {
          ...state,
          isLoading: false,
          hasError: false,
          data:action.payload
        }  
    
        case 'STORIES_FECTH_FAILURE':
      return {
        ...state,
        isLoading: false,
        hasError: true
      }
    
    case 'REMOVE_STORIES':
      return {
        ...state,
       data: state.data.filter(story => story.objectID !== action.payload.objectID)
      }
    
    default:
      throw new Error();

  }
}

function App() {

  const [query, setQuery] = useStorageState('', 'search');
  const[stories,dispatchStories] = useReducer(storiesReducer,{data:[],isLoading:false,hasError:false})
  const [url, setUrl] = useState(`${API_ENDPOINT}${query}`)
  
  const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=';

      //Custom Hook
      const useStorageState = (initialState, storageKey) => {
        const [value, setValue] = useState(localStorage.getItem('search') || initialState)
    
        useEffect(() => {
          localStorage.setItem(storageKey,value) 
        }, [value]) 
        
         return [value,setValue]
  } 
  



  //Use Callback
  const fetchStoreis = useCallback(
    async () => {

        if (!query) return;
        dispatchStories({
          type: 'STORIES_FETCH_INIT'
        })
        try {
       const res = await axios.get(url)
        dispatchStories({
            type: 'STORIES_FETCH_SUCCESS',
            payload:res.data.hits,
            
          })
      }
          
      catch {
        dispatchStories({
            type:'STORIES_FECTH_FAILURE'
          })
      }
      
    } ,[url]
  )
  
  useEffect(() => {
    fetchStoreis();
    },[fetchStoreis])

  


  const handleSearchInput = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  }


  function handleSearchSubmit() {
    setUrl(`${API_ENDPOINT}${query}`)
  }

  function handleRemoveStory(item) {
    const newStories = stories.data.filter(story => story.objectID !== item.objectID)
    dispatchStories({
      type: 'REMOVE_STORIES',
      payload: item
    })
  }

  const StyledContainer = styled.div`
  height: 100%;
  padding:1em;
  background-color:#cbddec;
  color:#333;
  `;

  const StyledHeadline = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  `;

  return (
    
      <StyledContainer>
      <StyledHeadline>Hacker Stories</StyledHeadline>
      <SearchForm handleSearchSubmit={handleSearchSubmit} handleSearchInput={handleSearchInput} query={query}>
      </SearchForm>
      <hr />
      
      {stories.hasError&& <p>something went wrong .... </p>}
      {stories.isLoading ? (<p>is loading...</p>) : ( <List stories={stories.data} onRemoveItem={handleRemoveStory}  />)}
      </StyledContainer>
    
  )
}

export default App



