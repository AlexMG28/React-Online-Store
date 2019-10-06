export default function promiseActionsMaker(name, promise) {
    const actionPending = () => ({
        type: 'PROMISE',
        name,
        status: 'PENDING',
        payload: null,
        error: null
    })
    const actionResolved = payload => ({
        type: 'PROMISE',
        name,
        status: 'RESOLVED',
        payload,
        error: null
    })
    // const actionClean = payload => ({
    //     type: 'PROMISE',
    //     name,
    //     status: 'RESOLVED',
    //     payload: null,
    //     error: null
    // })
    const actionRejected = error => ({
        type: 'PROMISE',
        name,
        status: 'REJECTED',
        payload: null,
        error
    })

    function actionPromiseThunk() {
        return async dispatch => {
            dispatch(actionPending())
            try {
                let data = await promise
                dispatch(actionResolved(data))
            }
            catch (e) {
                if (e.response && e.response.data) {
                    dispatch(actionResolved(e.response.data))
                } else
                    dispatch(actionRejected(e))
            }

        }
    }
    return actionPromiseThunk;
}