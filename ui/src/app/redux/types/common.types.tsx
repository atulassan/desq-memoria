export const FETCH_REQUEST = "FETCH_REQUEST"
export const FETCH_FAILURE = "FETCH_FAILURE"
export const KUNDENLIST = "KUNDENLIST"

interface FetchRequestAction  {
    type: typeof FETCH_REQUEST
}

interface FetchFailureAction  {
    type: typeof FETCH_FAILURE,
    payload: any
}

export type FetchActionTypes = FetchRequestAction | FetchFailureAction

