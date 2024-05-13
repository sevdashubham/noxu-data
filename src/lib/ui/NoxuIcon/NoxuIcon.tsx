"use client";
import React, { FC } from 'react'
import Image from "next/image";

import getIconByKey from "@/utils/getIconByKey";
import {IconProps} from "@/types/ui-lib";

const NoxuIcon: FC<IconProps> = ({ icon, width, height, onClick, ...props }) => {
    return (
        <Image loading={"lazy"} src={getIconByKey(icon)} alt={`icon-${icon}`}
               height={0}
               width={0}
               style={{width: `${width}rem`, height: `${height}rem` }}
               onClick={onClick ? onClick: undefined} {...props} />
    )
}

export default NoxuIcon;
