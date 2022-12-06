import React from 'react';
import './List.css';

interface listItem {
    id: string,
    firstname: string
}
interface PropsType {
    list: listItem[],
    handleListSelection (e: string): void;
}

const List = (props: PropsType) => {
    
const {list, handleListSelection} = props;

return (
    <div className='list-unordered-section'>
        {list.map(item => (
        <button onClick={() => handleListSelection(item.firstname)} key={item.id} className="btn">{item.firstname}</button>
        ))
        }
    </div>
)};

export default List;