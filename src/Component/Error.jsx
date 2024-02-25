import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <div>
            <h2>Opoos!!!</h2>
            <h4>Something went wrong!!!</h4>
            <p>{err.Error}</p>
            <h5>{err.status} : {err.statusText}</h5>
        </div>
    )
};

export default Error;
