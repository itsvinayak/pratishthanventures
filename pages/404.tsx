import ErrorPage from "@/components/errorPage";

const error404 = () => {
    return (
        <ErrorPage errorCode={404} message="Page Not Found" />
    );
};

export default error404;