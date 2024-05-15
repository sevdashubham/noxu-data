"use client";

import CoreLayout from "@/layout/core.layout";
import dynamic from "next/dynamic";
import RootLayout from "@/app/layout";
import {useEffect, useState} from "react";
import {socket} from "@/lib/socket-client/socket-client";

const QueryResults = dynamic(() => import('@/modules/results/queryResults'), {loading: () => <></>})

export default function ResultsPage() {
    const [isConnected, setIsConnected] = useState(false);
    const [transport, setTransport] = useState("N/A");
    useEffect(() => {
        if (socket.connected) {
            onConnect();
        }

        function onConnect() {
            setIsConnected(true);
            setTransport(socket.io.engine.transport.name);

            socket.io.engine.on("upgrade", (transport) => {
                setTransport(transport.name);
            });
        }

        function onDisconnect() {
            setIsConnected(false);
            setTransport("N/A");
        }

        socket.on("connect", onConnect);
        socket.on("disconnect", onDisconnect);

        return () => {
            socket.off("connect", onConnect);
            socket.off("disconnect", onDisconnect);
        };
    }, [])

    return (
        <RootLayout>
            <CoreLayout>
                <QueryResults/>
            </CoreLayout>
        </RootLayout>
    );
}
