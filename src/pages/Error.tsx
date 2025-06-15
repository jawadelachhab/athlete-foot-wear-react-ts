// import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";
import { Link } from "react-router-dom";
import { LottieHandler } from "@components/feedback";

const Error = () => {
  // const error = useRouteError();
  // let errorStatus: number;
  // let errorStatusText: string;

  // if (isRouteErrorResponse(error)) {
  //   errorStatus = error.status;
  //   errorStatusText = error.statusText;
  // } else {
  //   errorStatus = 404;
  //   errorStatusText = "Page Not Found";
  // }

  return (
    <main>
      <div className="container px-8 xl:px-40 h-screen flex justify-center items-center">
        <div className="w-1/2 text-center">
          <LottieHandler type="notFound" />
          <Link
            to="/"
            replace={true}
            className="inline-block bg-black text-white uppercase px-8 py-4"
          >
            How about going back to safety ?
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Error;
