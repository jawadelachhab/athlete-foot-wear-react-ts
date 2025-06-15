import { Navigate } from "react-router-dom";
import useLogin from "@hooks/useLogin";
import { Button, Spinner, Input } from "@components/ui";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { addToast } from "@store/toasts/toastsSlice";
import { useAppDispatch } from "@store/hooks";

const Login = () => {
  const {
    error,
    loading,
    accessToken,
    formErrors,
    searchParams,
    register,
    handleSubmit,
    submitForm,
  } = useLogin();

  const dispatch = useAppDispatch();

  useEffect(() => {
    const message = searchParams.get("message");

    if (message === "login_required") {
      dispatch(
        addToast({
          title: "Login Required",
          type: "primary",
          message: "You need to login to view this content",
        })
      );
    } else if (message === "account_created") {
      dispatch(
        addToast({
          title: "Account Created",
          type: "success",
          message: "Your account was created successfully, please login",
        })
      );
    }
  }, []);

  if (accessToken) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex justify-center items-center my-24">
      <div className="w-[26rem] shadow-card p-8">

        <h2 className="text-3xl font-bold capitalize text-center mb-6">
          Log in
        </h2>

        <form onSubmit={handleSubmit(submitForm)}>
          <Input
            name="email"
            placeholder="Email Address"
            register={register}
            error={formErrors.email?.message}
          />

          <Input
            type="password"
            placeholder="Password"
            name="password"
            register={register}
            error={formErrors.password?.message}
          />

          <Button variant="dark" className="w-full mb-3">
            {loading === "pending" ? (
              <>
                <Spinner></Spinner> Loading...
              </>
            ) : (
              "Submit"
            )}
          </Button>

          <p className="text-center">
            Don't Have an Account ?
            <Link to="/register" className="text-dark link-hover ml-2">
              Sign up now
            </Link>
          </p>

          {error && <p className="text-primary">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
