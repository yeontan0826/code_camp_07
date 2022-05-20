import { ChangeEvent } from "react"

export interface IProps {
    isEdit: boolean // 무조건 있음
    boardData?: any // 있을수도 있고 없을수도 있음
}

export interface IMyVariables {
    number: Number
    writer?: string,
    title?: string,
    contents?: string
}

export interface IBoardWriteUIProps {
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void,
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void,
    onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void,
    onClickGraphqlApi: () => void
    onClickUpdate: () => void
    data: {
        _id?: string,
        number?: number,
        message?: string
    },
    boardData?: any,
    isEdit: boolean
}

export interface IWriteInputProps {
    backgroundColor?: string
}