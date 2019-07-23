// This data model is based off the UI at http://dev.huntermarcks.net/search/
// I'm not sure about the relationship between "time" and "type". It looks like "time"
// is the future time of eligibility subject to conditions (e.g. no conviction within the
// past three years).
//
// Pasted from the UI:
//
// Time: Eligible now
// Type: Eligible 137.225(5)(b)
// Charge: 4759924B - Poss Controlled Sub 2
// Disposition: Convicted
// Convicted: 2/12/1987
// Case: ZA0061902
// Case Balance: None
export interface Record {
  time: string;
  type: string;
  charge: string;
  disposition: string;
  convicted: number;
  case: string;
  caseBalance: string;
}

export interface RecordsState {
  loading: boolean;
  records: any;
  error: any;
}

// These constants are used as the 'type' field in Redux actions.
export const LOAD_RECORDS = 'LOAD_RECORDS';
export const LOAD_RECORDS_LOADING = 'LOAD_RECORDS_LOADING';
export const LOAD_RECORDS_ERROR = 'LOAD_RECORDS_ERROR';

interface LoadRecordsAction {
  //since the payload can be a type Record[] or a string(error), the type of records
  // in RecordsState needs to be any.  From my research TypeScript doesn't support
  // conditional checks on if the payload is of type string or array.  see eample
  //EXAMPLE(doesn't work with TS) records: typeof(action.payload) === typeof([]) ? action.payload :  []
  //same applies to error type of any in RecordsState -By Olli

  type: string;
  payload: Record[] | string;
}

// Add other Action types here like so:
// export type RecordActionTypes = LoadRecordsAction | OtherRecordsAction;
export type RecordActionTypes = LoadRecordsAction;
