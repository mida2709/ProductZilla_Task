const formReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SUBMIT_FORM_DATA':
        return {
          ...state,
          formData: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default formReducer;
  