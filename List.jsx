import React from 'react'
import ListItem from './ListItem';

const List = ({stories,onRemoveItem}) => {
    return (
        <>
            <ul>
                {stories.map(story => <ListItem story={story} key={story.objectID} onRemoveItem={onRemoveItem} />)}
         </ul>
        </>
    )
}

export default List;