import promiseActionsMaker from './promiseActionsMaker'
import gql from '../helpers/gql'

let gqlGoodsThunk = () =>
    promiseActionsMaker(
        'goodAll',
        gql.request(
            `query goodAll{
                GoodFind(query: "[{}]"){
                    _id, name, description, price,
                    categories{
                        _id, name
                    }
                }
            }`
        )
    )()

export default gqlGoodsThunk