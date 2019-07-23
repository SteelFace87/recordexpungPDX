import {
  RecordsState,
  LOAD_RECORDS,
  LOAD_RECORDS_LOADING,
  LOAD_RECORDS_ERROR,
  RecordActionTypes
} from './types';

const initialState: RecordsState = {
  records: [],
  loading: false,
  error: null
};

export function recordsReducer(
  state = initialState,
  action: RecordActionTypes
): RecordsState {
  switch (action.type) {
    case LOAD_RECORDS_LOADING:
      return { ...state, loading: true };

    case LOAD_RECORDS:
      // The new state is the records returned in the
      // action. We ignore existing records and do not
      // necessarily include them in the new state. This
      // is a "destructive update".
      return {
        records: typeof action.payload === typeof [] ? action.payload : [],
        loading: false,
        error: null
      };

    case LOAD_RECORDS_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
}
