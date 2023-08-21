import styled from "@emotion/styled";

const AccountInput = (props: any) => {
    return <AccountInput1 type={props.type} placeholder={props.placeholder} {...props.register} autoComplete={"off"} />;
};

export default AccountInput;

const AccountInput1 = styled.input`
    height: 55px;
    border-radius: 10px;
    background-color: #f6f6f6;
    border: 1px solid #cccccc;
    padding: 0 15px;
    outline: none;
    :focus {
        border: 1px solid purple;
    }
`;
