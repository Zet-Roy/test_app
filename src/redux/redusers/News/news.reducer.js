import { FETCH_NEWS, FETCH_NEWS_SUCCESS, FETCH_NEWS_ERROR } from './news.type';
import nextId, { resetId } from "react-id-generator";

const INITIAL_STATE = {
    isLoading: false,
    list: [],
    error: null
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_NEWS:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_NEWS_SUCCESS:
            resetId()
            const list = action.payload.map((item) => {
                return {
                    id: nextId(),
                    title: item.title,
                    description: item.description
                }
            })

            return {
                ...state,
                list,
                isLoading: false
            }
        case FETCH_NEWS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default: return state;
    }
};

export default reducer;