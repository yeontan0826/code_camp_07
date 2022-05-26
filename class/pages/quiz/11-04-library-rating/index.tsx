/* eslint-disable react/prop-types */
import styled from "@emotion/styled"
import { useState } from "react"

interface IStarProps {
    isActive: boolean
}

const starPoint = [1, 2, 3, 4, 5]

const LibraryRating = () => {

    const [rating, setRating] = useState(0)

    const onClickStar = (num: number) => {
        setRating(num)
    }

    const Wrapper = styled.div`
        display: flex;     
    `

    const Star = styled.div`
        width: 50px;
        height: 50px;
        background-image: url(${(props: IStarProps) => props.isActive ? "/image/11-04-library-rating/ic_star_purple.svg" : "/image/11-04-library-rating/ic_star_gray.svg"});
        background-repeat: no-repeat;
        background-position: center;
    `

    return(
        <>
            <Wrapper>
                {starPoint.map((num) => {
                    return (
                        <Star isActive={(num <= rating)} onClick={() => onClickStar(num)} key={num}/>
                    )
                })}
            </Wrapper>
            <div>{rating}점</div>
        </>
    )
}

export default LibraryRating