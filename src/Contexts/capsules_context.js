import React, { useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import reducer from './capsules_reducer';
import { paginate } from '../paginate';
import { CURRENT_PAGE, FILTER_CAPSULE, GET_CAPSULES_BEGIN, GET_CAPSULES_ERROR, GET_CAPSULES_SUCCESS, NEXT_PAGE, POPUP_CLOSE, POPUP_OPEN, PREVIOUS_PAGE, SEARCH_CAPSULE } from './actions';

const initialState = {
      capsules: [],
      popCapsule: [],
      filterCapsules: [],
      page: 0,
      search: '',
      capsulesError: false,
      capsulesLoading: false,
      isPopupOpen: false,
}

const CapsuleContext = React.createContext();

const url = 'https://api.spacexdata.com/v3/capsules';

export const CapsuleProvider = ({ children }) => {
      const [state, dispatch] = useReducer(reducer, initialState);

      const fetchCapsules = async (url) => {
            dispatch({ type: GET_CAPSULES_BEGIN });

            try {
                  const response = await axios.get(url);
                  const capsules = await response.data;
                  dispatch({ type: GET_CAPSULES_SUCCESS, payload: paginate(capsules) });
            }
            catch (err) {
                  dispatch({ type: GET_CAPSULES_ERROR });
            }
      }
      
      const openPopup = (id) => {
            dispatch({ type: POPUP_OPEN, payload: id })
      }
      
      
      const closePopup = () => {
            dispatch({ type: POPUP_CLOSE, payload: state.capsules })
      }
      
      const handlePage = (idx) => {
            if (idx === 'previous') {
                  dispatch({ type: PREVIOUS_PAGE })
            } else if (idx === 'next') {
                  dispatch({ type: NEXT_PAGE })
            } else {
                  dispatch({ type: CURRENT_PAGE, payload: idx })
            }
      }

      const searchCapsule = (e) => {
            let name = e.target.name;
            let value = e.target.value;

            dispatch({ type: SEARCH_CAPSULE, payload: { name, value }, filter: state.capsules[state.page]});
      }

      useEffect(() => {
            fetchCapsules(url);  
      }, []);

      useEffect(() => {
            dispatch({ type: FILTER_CAPSULE, payload: state.capsules[state.page] })
      }, [state.capsules, state.page]);



      return (
            <CapsuleContext.Provider value={({
                  ...state,
                  handlePage,
                  searchCapsule,
                  openPopup,
                  closePopup,
            })}>
            {children}
            </CapsuleContext.Provider>
      )
}

export const useCapsuleContext = () => {
      return useContext(CapsuleContext);
}