function PincodeCard({ item, index }) {
  return (
    <div
      className="group relative min-h-[280px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-red-500/40 hover:bg-white/[0.05] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
    >

      {/* Red Glow */}
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-red-600/20 blur-[70px] opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Top */}
      <div className="relative flex items-center justify-between">

        <span className="font-mono text-[9px] text-gray-700">
          #{String(index + 1).padStart(2, "0")}
        </span>

        <span className="flex items-center gap-1.5 text-[8px] font-bold tracking-widest text-red-500">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]" />
          AVAILABLE
        </span>

      </div>

      {/* Location Icon */}
      <div className="relative mt-8 text-4xl text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)] transition duration-500 group-hover:scale-110">
        ⌖
      </div>

      {/* Area */}
      <p className="relative mt-5 text-[8px] font-bold tracking-[3px] text-gray-600">
        AREA
      </p>

      <h3 className="relative mt-2 text-2xl font-black tracking-tight text-white">
        {item.area}
      </h3>

      {/* Bottom */}
      <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between border-t border-white/[0.07] pt-4">

        <div>

          <p className="text-[8px] font-bold tracking-[2px] text-gray-600">
            PINCODE
          </p>

          <p className="mt-1 font-mono text-lg font-bold tracking-widest text-red-500">
            {item.pincode}
          </p>

        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-500 transition duration-300 group-hover:rotate-45 group-hover:border-red-500/50 group-hover:text-red-500">
          ↗
        </div>

      </div>

    </div>
  );
}

export default PincodeCard;