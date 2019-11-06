export function moviesList(){
    return{
        type:'MOVIES_LIST',
        payload:[
            {id:1, name:'Rambo'},
            {id:2, name:'Avengers'},
            {id:3, name:'Black Panther'}
        ]
    }
}


export function articleNews(){
    const output = fetch('https://ngmovies.herokuapp.com/api/getMovies',{method:'GET'})
    .then(response => response.json())

    return{
        type:'GET_ARTICLE',
        payload:output
    }
}
