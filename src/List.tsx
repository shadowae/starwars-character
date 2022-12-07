import React from 'react';
import './List.css';

interface listItem {
    id: string,
    name: string
}
interface PropsType {
    list: listItem[],
    handleListSelection (e: any): void;
}

const List = (props: PropsType) => {
    
const {list, handleListSelection} = props;

return (
    <div className='list-unordered-section'>
        {list.map(item => (
        <button onClick={() => handleListSelection(item.id)} key={item.id} className="btn">{item.name}</button>
        ))
        }
    </div>
)};

export default List;