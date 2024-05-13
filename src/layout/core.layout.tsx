import React from "react";
import {NoxuHeader} from "@/components/header/noxu-header";
import {NoxuFooter} from "@/components/footer/noxu-footer";

export default function CoreLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <header className="relative top-0 w-full bg-white z-10">
                <NoxuHeader />
            </header>

            {/* Content */}
            <main className="flex-1 bg-slate-100 pb-[150px]">
                {children}
            </main>

            {/* Footer */}
            <footer className="fixed bottom-0 bg-white w-full z-10">
                <NoxuFooter />
            </footer>
        </div>
    );
}
