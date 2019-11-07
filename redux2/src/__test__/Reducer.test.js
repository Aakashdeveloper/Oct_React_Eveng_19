import reducer from '../reducers';

describe('Reducer', () => {
    it('should return initial state', () => {
        expect(JSON.stringify(reducer(undefined, {}))).toEqual(JSON.stringify({
            articles: {},
            galdata:{}
        }))
    })

    it('reduceer test for GET_LATEST',()=>{
        let state ={
            articles: [],
            galdata:[]
        }

        state = reducer(state,{
            action:"GET_LATEST"
        })
        expect(state).toEqual({
            articles: [],
            galdata:[]
        })
    })
})
