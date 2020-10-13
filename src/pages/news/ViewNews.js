import React from 'react'
import ItemNews from './ItemNews'

export default function ViewNews(props) {
    return (
        <>
            {props.list.map((item) => <ItemNews key={item.id} item={item} />)}
        </>
    )
}
