import gqlGoodsThunk from './gqlGoodsThunk'

const refresh = async dispatch => {
    await gqlGoodsThunk()(dispatch)
   
}

export default refresh