import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPgae = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // 1. Load the authenticated user
  const { user, isLoading, isAuthenticated } = useUser();

  //2. If NO authenticated user, redirect back to login page
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  //3. While Loading show a spinner
  if (isLoading) {
    return (
      <FullPgae>
        <Spinner />
      </FullPgae>
    );
  }
  //4. IF there is a user, render the app

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
