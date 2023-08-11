import { makeRequest } from "./Action"
import { DELETE_USER, FAIL_REQUEST, GET_USER_LIST, MAKE_REQUEST,ADD_USER,UPDATE_USER,GET_USER_OBJ} from "./ActionType"

const initialstate = {
    loading: true,
    userlist: [],
    userobj: {},
    errmessage: ''

}
export const Reducer = (state = initialstate, action) => {
    switch (action.type) {
        case MAKE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FAIL_REQUEST:
            return {
                ...state,
                loading: false,
                errmessage: action.payload
            }
        case GET_USER_LIST:
            return {
                loading: false,
                errmessage: '',
                userlist: action.payload,
                userobj: {}
            }
        case DELETE_USER:
            return {
                ...state,
                loading: false
            }
        case ADD_USER: return {
            ...state,
            loading: false
        }
        case UPDATE_USER:return{
            ...state,
            loading:false
        }
        case GET_USER_OBJ:return{
            ...state,
            loading:false,
            userobj:action.payload
        }
        default: return state
    }
}