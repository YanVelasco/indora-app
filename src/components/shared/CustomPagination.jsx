import { Pagination } from "@mui/material";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

export const CustomPagination = ({ numberOfPages }) => {
    const [searchParams] = useSearchParams();
    const pathName = useLocation().pathname;
    const params = new URLSearchParams(searchParams);
    const navigate = useNavigate();
    const paramValue = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

    const handleChange = (event, value) => {
        params.set("page", value.toString());
        navigate(`${pathName}?${params.toString()}`);
    }


    return (
        <div className="flex justify-center mt-8">
            <Pagination
                page={paramValue}
                count={numberOfPages}
                defaultPage={1}
                siblingCount={0}
                boundaryCount={2}
                shape={"rounded"}
                onChange={handleChange}
            />
        </div>
    );
}