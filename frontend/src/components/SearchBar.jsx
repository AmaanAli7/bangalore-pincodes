function SearchBar({
  search,
  setSearch,
  onSearch,
  loading,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex h-16 w-full max-w-3xl overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-1.5 shadow-[0_0_40px_rgba(0,0,0,0.4)] backdrop-blur-xl transition focus-within:border-red-500/50 focus-within:shadow-[0_0_40px_rgba(239,68,68,0.12)]"
    >

      {/* Search Icon */}
      <div className="flex w-14 shrink-0 items-center justify-center text-xl text-red-500">
        ⌕
      </div>

      {/* Input */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search pincode or area..."
        className="min-w-0 flex-1 bg-transparent px-2 text-sm text-white outline-none placeholder:text-gray-600"
      />

      {/* Button */}
      <button
        type="submit"
        disabled={loading}
        className="flex shrink-0 items-center gap-3 rounded-lg bg-red-600 px-5 text-xs font-black tracking-wider text-white transition hover:bg-red-500 hover:shadow-[0_0_25px_rgba(239,68,68,0.35)] disabled:cursor-not-allowed disabled:opacity-50 sm:px-7"
      >
        {loading ? (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
        ) : (
          <>
            SEARCH
            <span className="text-lg">→</span>
          </>
        )}
      </button>

    </form>
  );
}

export default SearchBar;