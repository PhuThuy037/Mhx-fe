import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./ChangePassword.css"; // Đường dẫn đến tệp CSS của bạn

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // Khai báo useNavigate

  const validatePassword = (newPassword) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return passwordRegex.test(newPassword);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();

    if (!validatePassword(newPassword)) {
      setError(
        "Mật khẩu phải có ít nhất 6 ký tự, bao gồm chữ in hoa, chữ thường, số và ký hiệu đặc biệt."
      );
      setMessage("");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Mật khẩu mới và xác nhận mật khẩu không khớp!");
      setMessage("");
      return;
    }

    setError("");
    setMessage("Mật khẩu mới đã được đổi thành công!");
  };

  // Hàm để quay lại trang đăng nhập
  const handleBackToLogin = () => {
    navigate("/login"); // Điều hướng tới trang đăng nhập
  };

  return (
    <div className="change-password-container">
      <h2>Đổi Mật Khẩu</h2>
      <form onSubmit={handleChangePassword}>
        <div className="input-group">
          <label>Mật Khẩu Cũ:</label>
          <input
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Mật Khẩu Mới:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
              setError("");
            }}
            required
          />
        </div>
        <div className="input-group">
          <label>Xác Nhận Mật Khẩu Mới:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setError("");
            }}
            required
          />
        </div>
        <button type="submit" className="change-password-button">
          Đổi Mật Khẩu
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {message && <p className="success-message">{message}</p>}

      {/* Nút quay lại trang đăng nhập */}
      <button onClick={handleBackToLogin} className="back-to-login-button">
        Quay Lại Trang Đăng Nhập
      </button>
    </div>
  );
}
