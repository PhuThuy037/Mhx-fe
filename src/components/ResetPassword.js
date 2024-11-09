// src/components/ResetPassword.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./ResetPassword.css"; // Đường dẫn tới CSS của trang này

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // Khai báo useNavigate

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Xử lý logic reset mật khẩu ở đây
    console.log("Yêu cầu đặt lại mật khẩu cho email: ", email);
  };

  const handleBackToLogin = () => {
    navigate("/login"); // Điều hướng tới trang đăng nhập
  };

  return (
    <div className="reset-password-container">
      <h2>Đặt lại Mật Khẩu</h2>
      <form onSubmit={handleResetPassword}>
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Nhập email của bạn"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="reset-password-button">
          Đã Gửi Mật Khẩu Mới Qua Email
        </button>
      </form>
      <button onClick={handleBackToLogin} className="back-to-login-button">
        Quay Lại Trang Đăng Nhập
      </button>
    </div>
  );
}
