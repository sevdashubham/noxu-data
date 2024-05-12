import {MouseEventHandler} from "react";
import {ButtonVariant} from "@/utils/enum";

export interface ButtonProps {
    label?: string;
    onClick?: () => void;
    loading?: boolean;
    variant?: ButtonVariant.Alert | ButtonVariant.Primary;
}

export interface IconProps {
    icon: string,
    height: number,
    width: number,
    extraStyles?: object,
    id?: string,
    onClick?: MouseEventHandler<HTMLImageElement>
}

export interface SelectOption {
    value: string | number;
    label: string;
}

export interface SelectProps {
    options: SelectOption[];
    value?: SelectOption;
    onChange?: (value?: SelectOption) => void;
}

export type iconOptions = {
    [key: string]: string
}
