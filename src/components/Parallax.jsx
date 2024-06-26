import React from "react";

const Parallax = () => {
  return (
    <div className="">
      <div
        className="mx-auto h-80 w-full overflow-y-scroll bg-cover bg-fixed bg-center bg-no-repeat shadow-lg"
        // style={{
        //   backgroundImage: "url(
        //    ' https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp'
        //   )",
        // }}
        style={{
          backgroundImage: `url(
            "https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
          )`,
        }}
      >
        <div className="mt-40">
          <div className="bg-white p-4 sm:p-8">
            <div className="font-inter text-2xl font-extrabold tracking-tight text-black">
              Majestic peaks, nature's embrace.
            </div>
            <div className="mt-1 text-sm font-medium text-slate-500">
              Adventure calls, conquer mountain trails.
            </div>
            <p className="mt-4 leading-7 text-slate-500">
              In the realm of towering mountains, where the air is crisp and the
              vistas stretch endlessly, one finds solace, exhilaration, and a
              profound connection with the untamed beauty of the natural world.
            </p>
            <p className="mt-4 leading-7 text-slate-500">
              As the sun rises over the rugged peaks, casting a golden glow on
              the majestic landscape, a sense of awe fills the heart, reminding
              us of the grandeur and power that reside in the mountains.
            </p>
          </div>
        </div>
        <div className="mt-40">
          <div className="bg-white p-4 sm:p-8">
            <div className="font-inter text-2xl font-extrabold tracking-tight text-black">
              Majestic peaks, nature's embrace.
            </div>
            <div className="mt-1 text-sm font-medium text-slate-500">
              Adventure calls, conquer mountain trails.
            </div>
            <p className="mt-4 leading-7 text-slate-500">
              In the realm of towering mountains, where the air is crisp and the
              vistas stretch endlessly, one finds solace, exhilaration, and a
              profound connection with the untamed beauty of the natural world.
            </p>
            <p className="mt-4 leading-7 text-slate-500">
              As the sun rises over the rugged peaks, casting a golden glow on
              the majestic landscape, a sense of awe fills the heart, reminding
              us of the grandeur and power that reside in the mountains.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
