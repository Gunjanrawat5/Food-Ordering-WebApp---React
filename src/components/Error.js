import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError();
    console.log(err)
    return(
        <div>
            <h1>uWu wrong page</h1>
            <img src="https://img.freepik.com/free-photo/cute-domestic-kitten-sits-window-staring-outside-generative-ai_188544-12519.jpg?size=626&ext=jpg"></img>
            <h3>
                {err.status} : {err.statusText}
            </h3>
        </div>
    )
}

export default Error