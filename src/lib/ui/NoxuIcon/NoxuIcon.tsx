"use client";
import React, { FC } from 'react'
import Image from "next/image";

import getIconByKey from "@/utils/getIconByKey";
import {IconProps} from "@/types/ui-lib";

const ECIcon: FC<IconProps> = ({ icon, width, height,extraStyles, onClick, ...props }) => {
    return (
        <Image src={getIconByKey(icon)} alt={`icon-${icon}`} width={width} height={height} style={extraStyles} onClick={onClick ? onClick: undefined} {...props} />
    )
}

export default ECIcon;
