import { DownSquareOutlined } from "@ant-design/icons"
import styled from '@emotion/styled'
import ReactPlayer from "react-player"

const MyIcon = styled(DownSquareOutlined)`
    color: red;
    font-size: 50px;
    
`

const LibraryIconPage = () => {
    return(
        <div>
            <MyIcon />
            <ReactPlayer
                url={"https://youtu.be/lspHuBx6b5k"}
                controls={true}
                muted={true}
            />
        </div>
    )
}

export default LibraryIconPage