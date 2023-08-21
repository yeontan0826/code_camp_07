import styled from "@emotion/styled";
import { Modal } from "antd";

export const PaymentModal = styled(Modal)`
    background-color: white;
    border-radius: 20px;
    overflow: hidden;
    padding: 0;
`;
export const PaymentDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    padding: 10px;
`;

export const PaymentTitle = styled.div`
    line-height: 100px;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
`;

export const PaymentButton = styled.button`
    width: 100%;
    height: 45px;
    background-color: black;
    border-radius: 10px;
    margin-top: 30px;
    color: white;
    border: none;
    cursor: pointer;
    :disabled {
        cursor: default;
        background-color: #bdbdbd;
    }
`;

export const PaymentSelect = styled.select`
    height: 50px;
    padding-left: 5px;
    outline: none;
    border: none;
    border-bottom: 2px solid black;
`;
