import { Triangle } from "react-loader-spinner";

export const Loader = ({text}) => {
    return (
        <div className="flex items-center justify-center h-[500px] flex-col gap-1.5">
            <Triangle
                visible={true}
                height="80"
                width="80"
                color="#0c2da5ba"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
            <p className="text-slate-800">{text || 'Please wait...'}</p>
        </div>
    );
};