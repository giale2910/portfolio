"use client";

export default function ProfileHeader() {
  return (
    <div className="w-full">
      {/* COVER */}
      <div className="relative h-56 md:h-80 w-full overflow-hidden ">
        <img
          src="/cover.jpg"
          alt="cover"
            className="w-full h-80 object-cover"

        />
      </div>

      {/* BOTTOM SECTION */}
      <div className="relative px-6 md:px-10">
        {/* AVATAR (LEFT OVERLAP) */}
        <div className="absolute -top-12 left-6 md:left-10">
          <img
            src="/avatar1.jpg"
            alt="avatar"
            className="
              w-50 h-50 md:w-50 md:h-50
              rounded-full
              border-4 border-white
              shadow-lg
              object-cover
            "
          />
        </div>

        {/* INFO (RIGHT SIDE OF AVATAR) */}
        <div className="ml-50 md:ml-57 pt-7">
          <h1 className="text-2xl md:text-3xl font-bold">
            Gia Lệ Đặng
          </h1>
          <p className="text-gray-500">
            Frontend Developer • React • Next.js
          </p>

          <div className="flex gap-3 mt-3">
            <button className="px-4 py-2 rounded-full bg-pink-400 text-white text-sm">
              Follow
            </button>
            <button className="px-4 py-2 rounded-full border text-sm">
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}