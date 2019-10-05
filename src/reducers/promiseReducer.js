export default function PromiseReducer(state, action) {
    if (!state) return {}
    if (action.type === "PROMISE") {
        return {
            ...state,
            [action.name]: {
                status: action.status,
                payload: action.status === "PENDING" ?
                    state[action.name] && state[action.name].payload : action.payload,
                error: action.error
            }
        }
    }
    return state
}