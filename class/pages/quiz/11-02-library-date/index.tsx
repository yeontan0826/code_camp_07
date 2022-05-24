import { DatePicker, DatePickerProps } from "antd"
import { useState } from "react";

const LibraryDate = () => {

    const [date, setDate] = useState("")

    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        setDate(dateString)
        console.log(date, dateString);
    };

    return(
        <div>
            <DatePicker onChange={onChange} />
            {/* <div>{date}</div> */}
            <div>{date.slice(5, 7)}월</div>
        </div>
    )
}

export default LibraryDate