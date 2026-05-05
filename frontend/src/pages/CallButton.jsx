import React from "react";

const CallButton = () => {
  const phoneNumber = "+91 9044387783"; // 👉 apna number yaha daal

  return (
    <div style={{ padding: "20px" }}>
      <a href={`tel:${phoneNumber}`}>
        <button className="mt-2 bg-[#1E3A8A] text-white px-6 py-3 text-sm sm:text-base hover:bg-[#16307a] transition-all duration-300 shadow-md">
          📞 Call Us
        </button>
      </a>
    </div>
  );
};

export default CallButton;