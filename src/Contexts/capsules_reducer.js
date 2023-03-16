import {
      GET_CAPSULES_BEGIN,
      GET_CAPSULES_SUCCESS,
      GET_CAPSULES_ERROR,
      POPUP_OPEN,
      POPUP_CLOSE,
      PREVIOUS_PAGE,
      NEXT_PAGE,
      CURRENT_PAGE,
      SEARCH_CAPSULE,
      FILTER_CAPSULE,
} from './actions';

const search_reducer = (state, action) => {

      switch (action.type) {

            case GET_CAPSULES_BEGIN:
                  return { ...state, capsulesLoading: true };

            case GET_CAPSULES_SUCCESS:
                  return { ...state, capsulesLoading: false, capsules: action.payload  };

            case GET_CAPSULES_ERROR:
                  return { ...state, capsulesLoading: false, capsulesError: true };

            case FILTER_CAPSULE:
                  return { ...state, filterCapsules: action.payload };

            case PREVIOUS_PAGE:
                  return { ...state, page: state.page === 0 ? state.page + (state.capsules.length - 1) : state.page - 1 };

            case NEXT_PAGE:
                  return { ...state, page: state.page >= (state.capsules.length - 1) ? 0 : state.page + 1 };

            case CURRENT_PAGE:
                  return { ...state, page: action.payload };

            case POPUP_OPEN:
                  const { capsules, page } = state;

                  let popCapsule = [...capsules];

                  popCapsule = popCapsule[page].filter(capsule => capsule.capsule_serial === action.payload)

                  return { ...state, isPopupOpen: true, popCapsule: popCapsule };

            case POPUP_CLOSE:
                  return { ...state, isPopupOpen: false };

            case SEARCH_CAPSULE:
                  const { name, value } = action.payload;
                  const filterCapsules = [...state.capsules];

                  if (!value) {
                       return {...state, [name]: value, filterCapsules: action.filter }
                  } 
                        
                  let flatten = filterCapsules.flat();

                  if (state.search) {
                        flatten = flatten.filter(capsule => String(capsule.status).toLowerCase().startsWith(value) || String(capsule.type).toLowerCase().startsWith(value) || String(capsule.original_launch).startsWith(value))
                  }

                  return { ...state, [name]: value, filterCapsules: flatten };
                        
            default:

                  throw new Error(`No Matching "${action.type}" - action type`)
      }
}

export default search_reducer;