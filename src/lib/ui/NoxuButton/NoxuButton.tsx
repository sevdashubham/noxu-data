"use client";
import React, {forwardRef} from 'react';
import {ButtonProps} from "@/types/ui-lib";
import {ButtonVariant} from "@/utils/enum";

const NoxuButton = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            label,
            onClick,
            loading = false,
            variant = ButtonVariant.Primary
        },
        ref,
    ) => {
        const handleOnClick = () => {
            if (loading) {
                return;
            }
            onClick?.();
        };
        const handleVariant = () =>{
            switch (variant) {
                case ButtonVariant.Alert:
                    return `text-red-600 border-red-600`;
                default:
                    return `text-slate-900 border-slate-300`;
            }
        }
        return (
            <button
                className={`text-sm leading-6 py-2 px-4 font-medium bg-white border rounded-md hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 inline-flex items-center ${handleVariant()}`}
                ref={ref}
                onClick={handleOnClick}
                type="button"
            >
                {loading && <div className="spinner">
                    <div className="w-6 h-6 border-t-4 border-blue-500 rounded-full animate-spin" />
                </div>}
                {!loading && (
                    <>{label}</>
                )}
            </button>
        );
    },
);

export default NoxuButton;

NoxuButton.displayName = 'NoxuButton';
