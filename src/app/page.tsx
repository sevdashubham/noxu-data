import CoreLayout from "@/layout/core.layout";
import dynamic from "next/dynamic";
import RootLayout from "@/app/layout";

const QueryResults = dynamic(() => import('@/modules/results/queryResults'), {loading: () => <></>})

export default function ResultsPage() {
    return (
        <RootLayout>
            <CoreLayout>
                <QueryResults/>
            </CoreLayout>
        </RootLayout>
    );
}
