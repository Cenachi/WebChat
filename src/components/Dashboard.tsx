import React, { useState } from "react";
import { Alert, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const Dashboard = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch (error) {
      setError("Failed to log out");
    }
  };

  return (
    <>
      <Card>
        <Card.Body >
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {currentUser.displayName && (
            <p>
              <strong>Name: </strong> {currentUser.displayName}
            </p>
          )}
          <strong>Email: </strong> {currentUser.email}
          <br />
          <Link className="w-100 btn btn-primary" to="/update-profile">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Logout out
        </Button>
      </div>
    </>
  );
};
