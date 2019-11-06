import reducer from '../reducers';

describe('Reducer', () => {
  it('should return the initial state', () => {
      expect(JSON.stringify(reducer(undefined, {}))).toEqual(JSON.stringify(
          {
            movies:null
          }
      ))
  })

  it('reducer test for MOVIES_LIST',() => {
      let state ={
          movies:[]
      }
      state = reducer(state, {
          action: "MOVIES_LIST"
      })
      expect(state).toEqual({
          movies:[]
      })
  })
})
