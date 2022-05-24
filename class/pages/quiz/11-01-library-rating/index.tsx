import { Rate } from 'antd';
import { useState } from 'react';

const LibraryRating = () => {

    const [value, setValue] = useState(3);

    const onChangeRate = (value: number) => {
        setValue(value)
        alert(`${value}점`)
    }

    return (
        <div>
            <Rate onChange={onChangeRate} value={value}/>
            {/* {value ? <div><div className="ant-rate-text">{value}</div></div> : ''} */}
        </div>
    );
}

export default LibraryRating