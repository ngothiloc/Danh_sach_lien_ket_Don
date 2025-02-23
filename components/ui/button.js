import React from "react";

const Button = ({ onClick, children, icon: Icon, style }) => {
    return (
        <button
            onClick={onClick}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                padding: "12px 24px",
                fontSize: "20px", // 🔥 Tăng cỡ chữ
                fontWeight: "bold",
                color: "white",
                background: "#3c82f6",
                border: "none",
                borderRadius: "50px",
                transition: "all 0.3s ease",
            }}
        >
            {Icon && <Icon style={{ width: "24px", height: "24px" }} />}
            {children}
        </button>
    );
};

export default Button;