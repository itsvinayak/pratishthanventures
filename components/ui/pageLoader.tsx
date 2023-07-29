const styling = {
    minHeight: "100vh"
};

const PageLoader = () => {
    return (
        <div className="h-100 d-flex align-items-center justify-content-center text-center" style={styling}>
            <div className="spinner-border text-secondary"
                style={{ width: "3rem", height: "3rem" }}
                role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>

    )
};


export default PageLoader;