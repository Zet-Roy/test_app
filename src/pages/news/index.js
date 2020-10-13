import React, { useEffect } from 'react'
import { Row } from 'react-bootstrap'
import ViewNews from './ViewNews'
import { fetchNews } from '../../redux/redusers/News/news.actions';
import { useSelector, useDispatch } from 'react-redux';

export default function News() {

    const dispatch = useDispatch();
    const list = useSelector(state => state.news.list)

    useEffect(() => {
        dispatch(fetchNews())
    }, [dispatch])

    return (
        <Row className="ml-0 mr-0 justify-content-center">
            <ViewNews list={list} />
        </Row>
    )
}
