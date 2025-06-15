import { Button, Spinner, Input } from "@components/ui";
import { Link } from "react-router-dom";
import useRegister from "@hooks/useRegister";
import { Navigate } from "react-router-dom";

const Register = () => {
  const {
    loading,
    error,
    accessToken,
    formErrors,
    emailAvailabilityStatus,
    submitForm,
    register,
    handleSubmit,
    emailOnBlurHandler,
  } = useRegister();

  if (accessToken) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex justify-center items-center my-24">
      <div className="w-[26rem] shadow-card p-8">
        
        <h2 className="text-3xl font-bold capitalize text-center mb-6">
        Sign up
        </h2>

        <form onSubmit={handleSubmit(submitForm)}>
          <Input
            placeholder="Name"
            name="name"
            register={register}
            error={formErrors.name?.message}
          />

          <Input
            placeholder="Email Address"
            name="email"
            register={register}
            onBlur={emailOnBlurHandler}
            error={
              formErrors.email?.message
                ? formErrors.email?.message
                : emailAvailabilityStatus === "notAvailable"
                ? "This email is already in use."
                : emailAvailabilityStatus === "failed"
                ? "Error from the server."
                : ""
            }
            status={
              emailAvailabilityStatus === "checking"
                ? "We're currently checking the availability of this email address. Please wait a moment."
                : ""
            }
            success={
              emailAvailabilityStatus === "available"
                ? "This email is available for use."
                : ""
            }
            disabled={emailAvailabilityStatus === "checking" ? true : false}
          />

          <Input
            placeholder="Password"
            name="password"
            type="password"
            register={register}
            error={formErrors.password?.message}
          />

          <Input
            placeholder="Confirm password"
            name="confirmPassword"
            type="password"
            register={register}
            error={formErrors.confirmPassword?.message}
          />

          <Button
            variant="dark"
            className="w-full mb-3"
            disabled={emailAvailabilityStatus === "checking" ? true : false}
          >
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
            <Link
              to="/login"
              className="text-dark link-hover ml-2"
            >
              Log in
            </Link>
          </p>
          {error && <p className="text-primary">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Register;
