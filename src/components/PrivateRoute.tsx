import React from "react";
import { Navigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

interface Props {
  element: React.ComponentType;
  path?: string;
}

export const PrivateRoute: React.FC<Props> = ({ element: RouteElement }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" />;
  } else {
    return <RouteElement />;
  }
};
