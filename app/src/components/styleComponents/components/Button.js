import styled from 'styled-components'
//----------------button-------------------
export const Button = styled.button`
    apperance:none;
    border: ${props => props.theme.borderButton};
    padding: .25em .5em;
    transition: all .5s;
    font-size:17px;
    border-radius: ${props => props.theme.borderRadiusButton};
    color: ${props => props.theme.txtBtnColor};
    &:hover, &:disabled:hover {
        background-color:${props => props.theme.hoverBgColor};
    }
`;

export const SuccessButton = styled(Button)`
    background-color: ${props => props.theme.bgSuccessBtnColor};
    &:disabled {
        background-color: ${props => props.theme.bgSuccessBtnColor};
        color: ${props => props.theme.txtBtnColor};
        border: ${props => props.theme.borderButton};
    }
    &:hover, &:disabled:hover {
        color: ${props => props.theme.hoverTxtSuccessColor};
        border-color: ${props => props.theme.hoverBorderSuccessColor};
    };
`;

export const PrimaryButton = styled(Button)`
    background-color: ${props => props.theme.bgPrimaryBtnColor};
    &:disabled {
        background-color: ${props => props.theme.bgPrimaryBtnColor};
        color: ${props => props.theme.txtBtnColor};
        border: ${props => props.theme.borderButton};
    }
    &:hover, &:disabled:hover {
        color: ${props => props.theme.hoverTxtPrimaryColor};
        border-color: ${props => props.theme.hoverBorderPrimaryColor};
    };
`;

export const DangerButton = styled(Button)`
    background-color: ${props => props.theme.bgDangerBtnColor};
    &:hover {
        color: ${props => props.theme.hoverTxtDangerColor};
        border-color: ${props => props.theme.hoverBorderDangerColor};
    };
`;