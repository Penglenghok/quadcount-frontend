import { useDispatch, useSelector } from "react-redux";
import { IReducers } from "../redux/store";
import { isEmpty } from "lodash";
import AuthRouter from "../routes/AuthRoutes";
import Router from "../routes";
import { useEffect } from "react";
import { checkAuthenticationAction } from "../redux/actions/auth.action";

export default function Layout() {
  const { user } = useSelector((reducer: IReducers) => reducer.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthenticationAction() as any);
  }, []);

  if (isEmpty(user)) return <AuthRouter />;
  return <Router />;
}
