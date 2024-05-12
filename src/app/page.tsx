import CoreLayout from "@/layout/core.layout";
import dynamic from "next/dynamic";

const QueryResults = dynamic(() => import('@/modules/results/queryResults'), {loading: () => <></>})

export default function ResultsPage() {
    return (
        <CoreLayout>
            <QueryResults/>
        </CoreLayout>
    );
}
