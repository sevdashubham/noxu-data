import Image from "next/image";

export const NoxuHeader = () => {
    return (
        <div className="flex py-8 lg:px-36 sm:px-8 px-2 gap-x-4">
            <Image width="0"
                   height="0"
                   sizes="100vw" className="h-10 w-10 flex-none rounded-full bg-gray-50"
                   src={'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}
                   alt="header avatar image"/>
            <div className="flex items-center">
                <p className="text-base leading-6 font-normal text-left text-slate-900">{'List my top 10 accounts'}</p>
            </div>
        </div>
    )
}
