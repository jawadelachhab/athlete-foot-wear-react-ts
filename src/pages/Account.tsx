import { useAppSelector } from "@store/hooks";

const Account = () => {
  const accountInfo = useAppSelector((state) => state.auth.user);

  return (
    <>
      <ul>
        <li className="mb-2">Name : {accountInfo?.name}</li>
        <li>Email address : {accountInfo?.email}</li>
      </ul>
    </>
  );
};

export default Account;
