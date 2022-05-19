import { Radio } from 'antd'
import * as S from './BoardWrite.style'

const BoardWriteUI = (props) => {
    return(
        <S.Wrapper>
            <S.Header>
            </S.Header>
            <S.Container>
                <S.Box>
                    <S.Title>{props.isEdit ? "게시물 수정" : "게시물 등록"}</S.Title>
                    <S.Main>
                        <S.InputRow>
                            <S.InputBox>
                                <S.Label>작성자</S.Label>
                                <S.Input type='text' placeholder='이름을 적어주세요.' onChange={props.onChangeWriter}/>
                                <S.ErrorText>{props.writerError}</S.ErrorText>
                            </S.InputBox>
                            <S.InputBox>
                                <S.Label>비밀번호</S.Label>
                                <S.Input type='text' placeholder='비밀번호를 입력해주세요.' onChange={props.onChangePassword}/>
                                <S.ErrorText>{props.passwordError}</S.ErrorText>
                            </S.InputBox>
                        </S.InputRow>
                        <S.InputColumn>
                            <S.Label>제목</S.Label>
                            <S.Input type='text' placeholder='제목을 작성해주세요.' onChange={props.onChangeTitle}/>
                            <S.ErrorText>{props.titleError}</S.ErrorText>
                        </S.InputColumn>
                        <S.InputColumn>
                            <S.Label>내용</S.Label>
                            <S.InputArea type='text' placeholder='내용을 작성해주세요.' onChange={props.onChangeContents}/>
                            <S.ErrorText>{props.contentsError}</S.ErrorText>
                        </S.InputColumn>
                        <S.InputColumn>
                            <S.Label>주소</S.Label>
                            <S.AddressBox>
                                <S.AddressInput type='text' placeholder='07250' maxLength={5} onChange={props.onChangeAddress}/>
                                <S.AddressFindButton>우편번호 검색</S.AddressFindButton>
                            </S.AddressBox>
                            <S.Input></S.Input>
                            <S.Input></S.Input>
                            <S.ErrorText>{props.addressError}</S.ErrorText>
                        </S.InputColumn>
                        <S.InputColumn>
                            <S.Label>유튜브</S.Label>
                            <S.Input type='text' placeholder='링크를 복사해주세요.' onChange={props.onChangeYoutube}/>
                            <S.ErrorText>{props.youtubeError}</S.ErrorText>
                        </S.InputColumn>
                        <S.InputColumn>
                            <S.Label>사진 첨부</S.Label>
                            <S.DivRow>
                                <S.PhotoBox>
                                    <S.PhotoText>+</S.PhotoText>
                                    <S.PhotoText>Upload</S.PhotoText>
                                </S.PhotoBox>
                                <S.PhotoBox>
                                    <S.PhotoText>+</S.PhotoText>
                                    <S.PhotoText>Upload</S.PhotoText>
                                </S.PhotoBox>
                                <S.PhotoBox>
                                    <S.PhotoText>+</S.PhotoText>
                                    <S.PhotoText>Upload</S.PhotoText>
                                </S.PhotoBox>
                            </S.DivRow>
                        </S.InputColumn>
                        <S.InputColumn>
                            <S.Label>메인 설정</S.Label>
                            <S.RadioBox>
                                <Radio name='main'>유튜브</Radio>
                                <Radio name='main' checked={true}>사진</Radio>
                            </S.RadioBox>
                        </S.InputColumn>
                        <S.SubmitButton isActive={props.isActive} disabled={!props.buttonEnabled} onClick={props.isEdit ? props.onClickUpdate : props.onClickWrite}>
                            {props.isEdit ? "수정하기" : "등록하기"}
                        </S.SubmitButton>
                    </S.Main>
                </S.Box>
            </S.Container>
        </S.Wrapper>
    )
}

export default BoardWriteUI