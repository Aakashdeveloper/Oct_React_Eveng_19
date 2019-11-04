import { combineReducers} from 'redux';
import articles from './article_reducer';
import galdata from './gallery_reducer';

const rootReducer = combineReducers({
    articles,
    galdata
})

export default rootReducer