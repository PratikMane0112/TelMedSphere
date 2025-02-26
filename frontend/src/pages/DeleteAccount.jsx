import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import httpClient from "../httpClient";
import { Alert } from "@mui/material";
import commonContext from "../contexts/common/commonContext";

const DeleteAccount = () => {
  const accountEmail = localStorage.getItem("email");
  const [email, setEmail] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const profilePic = localStorage.getItem("profile_picture") ?? null;
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [isAlert, setIsAlert] = useState(false);
  const { userLogout, toggleForm } = useContext(commonContext);
  const [isAccountDletedAlert, setIsAccountDletedAlert] = useState(false);
  const navigate = useNavigate();
  const handleDeleteAccount = async () => {
    if (email !== accountEmail) {
      setIsAlert(true);
      return;
    }

    setLoading(true);
    try {
      httpClient.post("/delete_account", { email: accountEmail }).then(() => {
        userLogout();
      });
    } catch (error) {
      setIsAccountDletedAlert(true);
    } finally {
      setLoading(false);
      setShowDialog(false);
    }
  };

  useEffect(() => {
    if (!accountEmail) {
      navigate("/");
      toggleForm(true);
    }
  }, [accountEmail]);

  return (
    <div className="flex justify-center mt-6 h-full w-full px-10 max-md:my-24">
      <div className="w-full max-w-[700px] h-auto bg-white-1 shadow-sm rounded-xl p-10">
        {/* Alert if email does not match */}
        {isAccountDletedAlert && (
          <Alert
            severity="error"
            className="my-4 dark:bg-red-4 dark:text-red-7"
          >
            Could not delete account
          </Alert>
        )}
        <h2 className="text-xl font-semibold text-center text-blue-8">
          Delete Account
        </h2>
        <div className="flex justify-center rounded-full relative w-[25%] aspect-square mx-auto bg-white-1 shadow-md border-2 border-blue-3 mt-6 max-md:w-[35%]">
          {isImageLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-blue-3 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <img
            src={profilePic}
            alt="Profile"
            className="w-full h-full rounded-full"
            onLoad={() => setIsImageLoading(false)}
          />
        </div>

        <p className="text-sm text-blue-7 text-center mt-6">
          Enter your email to request account deletion. This action is
          irreversible.
        </p>

        {/* Alert if email does not match */}
        {isAlert && (
          <Alert
            severity="error"
            className="mt-4 dark:bg-red-4 dark:text-red-7"
          >
            Email does not match the registered account!
          </Alert>
        )}

        <div className="w-full flex justify-center mt-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="py-3 px-3 text-blue-7 border border-blue-3 w-[60%] outline-none rounded-md focus:border-2 focus:border-blue-9 placeholder-blue-4 placeholder-opacity-40 max-md:w-full"
            value={email}
            onChange={(e) => {
              const newEmail = e.target.value;
              setEmail(newEmail);
              setIsAlert(newEmail !== accountEmail);
              setIsAccountDletedAlert(false);
            }}
          />
        </div>

        <div className="w-full flex justify-center">
          <button
            className="w-[60%] px-6 py-4 mt-4 bg-red-5 text-white-1 rounded hover:bg-red-700 transition cursor-pointer disabled:bg-red-5 disabled:cursor-not-allowed max-md:w-full"
            onClick={() => {
              if (email === accountEmail) {
                setShowDialog(true); // Open confirmation dialog
              } else {
                setIsAlert(true); // Show alert message
              }
              setIsAccountDletedAlert(false);
            }}
            disabled={email !== accountEmail}
          >
            Delete My Account
          </button>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black-1 bg-opacity-50">
          <div className="bg-blue-3 p-6 rounded-lg shadow-md w-full max-w-sm">
            <h3 className="text-lg font-semibold text-white-1">
              Confirm Account Deletion
            </h3>
            <p className="text-sm text-white-1 mt-2">
              Are you sure you want to delete your account? This action cannot
              be undone.
            </p>
            <div className="mt-6 flex justify-end gap-2">
              <button
                className="bg-gray-300 text-black px-4 py-3 rounded hover:bg-gray-400 transition"
                onClick={() => setShowDialog(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-600 text-white-1 px-4 py-3 rounded hover:bg-red-700 transition"
                onClick={handleDeleteAccount}
                disabled={loading}
              >
                {loading ? "Deleting..." : "Confirm Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteAccount;
