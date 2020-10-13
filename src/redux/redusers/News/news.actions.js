import { FETCH_NEWS, FETCH_NEWS_SUCCESS, FETCH_NEWS_ERROR } from './news.type';
import { request } from '../../../utils/rest';
import moment from 'moment'

export const fetchNews = () => async (dispatch) => {
    dispatch({ type: FETCH_NEWS })

    const date = moment().format("YYYY-MM-DD")

    try {
        const { data } = await request.get(`everything?q=bitcoin&from=${date}&sortBy=publishedAt&pageSize=10&apiKey=6ed7aaddeb88442e9c6977ee44e69a3f`);

        dispatch({
            type: FETCH_NEWS_SUCCESS,
            payload: data.articles
        });
    } catch (error) {
        console.log('Error ', error);
        dispatch({ type: FETCH_NEWS_ERROR, payload: 'Ошибка при запросе.' });
    }
};