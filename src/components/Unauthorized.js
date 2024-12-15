import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = useCallback(() => navigate(-1), [navigate]);

    return (
        <section>
            <h1>Unauthorized</h1>
            <p>You do not have access to the requested page.</p>
            <div className="flexGrow">
                <button onClick={goBack}>Go Back</button>
            </div>
        </section>
    );
}

export default Unauthorized;
