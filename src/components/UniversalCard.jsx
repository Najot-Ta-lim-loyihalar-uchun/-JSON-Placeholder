import React from "react";

function UniversalCard({ type, data }) {
  const renderContent = (item) => {
    switch (type) {
      case "users":
        return (
          <div className="flex items-start gap-4">
            {/* Avatar */}
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-amber-400 text-white text-xl font-bold shadow-md">
              {item.name?.charAt(0).toUpperCase()}
            </div>

            {/* Info */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h2>
              <p className="text-sm text-gray-500">@{item.username}</p>

              <div className="mt-3 text-sm text-gray-600 space-y-1">
                <p>📧 {item.email}</p>
                <p>📍 {item.address?.city}</p>
                <p>🏢 {item.company?.name}</p>
              </div>
            </div>
          </div>
        );

      case "posts":
        return (
          <>
            <h2 className="text-lg font-semibold text-gray-800">
              {item.title}
            </h2>
            <p className="text-sm text-gray-600 mt-2 line-clamp-3">
              {item.body}
            </p>
            <p className="text-xs text-amber-400 mt-3">
              User ID: {item.userId}
            </p>
          </>
        );

      case "albums":
        return (
          <>
            <h2 className="text-lg font-semibold text-gray-800">
              🎵 {item.title}
            </h2>
            <p className="text-xs text-amber-400 mt-2">
              User ID: {item.userId}
            </p>
          </>
        );

      default:
        return <p>No data type matched</p>;
    }
  };

  return (
    <div className=" grid grid-cols-3  gap-6 my-[50px]">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
        >
          {renderContent(item)}
        </div>
      ))}
    </div>
  );
}

export default UniversalCard;
