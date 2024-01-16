import { useSelector } from "react-redux";

export default function userAuth() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { user } = useSelector((state: any) => state.auth);
  if (user) {
    return true;
  } else {
    return false;
  }
}
