import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import PincodeCard from "./components/PincodeCard";
import {
  searchPincodes,
  getAllPincodes,
} from "./services/api";

function App() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    const loadPincodes = async () => {
      try {
        const response = await getAllPincodes();
        setResults(response.data);
      } catch (err) {
        setError("Unable to connect to the server.");
      }
    };

    loadPincodes();
  }, []);

  const handleSearch = async () => {
    if (!search.trim()) {
      setError("Please enter a pincode or area name.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSearched(true);

      const response = await searchPincodes(search.trim());

      setResults(response.data);

      if (response.data.length === 0) {
        setError(`No results found for "${search}"`);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = async () => {
    setSearch("");
    setError("");
    setSearched(false);

    try {
      setLoading(true);

      const response = await getAllPincodes();

      setResults(response.data);
    } catch (err) {
      setError("Unable to load pincodes.");
    } finally {
      setLoading(false);
    }
  };

  const quickSearch = async (value) => {
    setSearch(value);

    try {
      setLoading(true);
      setError("");
      setSearched(true);

      const response = await searchPincodes(value);

      setResults(response.data);
    } catch (err) {
      setError("Search failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-black text-white">

      {/* Background Effects */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-[-250px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-600/20 blur-[140px]" />

        <div className="absolute left-[-200px] top-[30%] h-[400px] w-[400px] rounded-full bg-red-700/10 blur-[130px]" />

        <div className="absolute right-[-200px] top-[60%] h-[400px] w-[400px] rounded-full bg-red-600/10 blur-[130px]" />
      </div>

      {/* Grid Background */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Navbar */}
      <nav className="relative z-10 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-red-500/50 bg-red-500/10 text-xl font-black text-red-500 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
              P
            </div>

            <div>
              <h1 className="text-lg font-black tracking-tight">
                PINCODE<span className="text-red-500">EX</span>
              </h1>

              <p className="text-[8px] tracking-[3px] text-gray-500">
                BANGALORE EXPLORER
              </p>
            </div>

          </div>

          <div className="flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/5 px-3 py-1.5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />

            <span className="text-[9px] font-bold tracking-widest text-green-500">
              API ONLINE
            </span>
          </div>

        </div>
      </nav>

      {/* Main */}
      <main className="relative z-10 mx-auto max-w-7xl px-6 py-20">

        {/* Hero */}
        <section className="mx-auto max-w-4xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/5 px-4 py-2 text-[9px] font-bold tracking-[2px] text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.08)]">
            <span className="animate-spin">✦</span>
            BANGALORE LOCATION INTELLIGENCE
          </div>

          <h2 className="mt-8 text-6xl font-black leading-[0.9] tracking-[-4px] sm:text-7xl md:text-9xl">

            FIND YOUR

            <br />

            <span className="text-red-500 drop-shadow-[0_0_30px_rgba(239,68,68,0.35)]">
              BANGALORE
            </span>

            <br />

            <span className="text-transparent [-webkit-text-stroke:1px_#444]">
              PINCODE.
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-gray-500">
            Search Bangalore locations by pincode or area name.
            Discover your location instantly with our simple
            pincode explorer.
          </p>

          {/* Search */}
          <div className="mt-10">
            <SearchBar
              search={search}
              setSearch={setSearch}
              onSearch={handleSearch}
              loading={loading}
            />
          </div>

          {/* Quick Search */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-[10px]">

            <span className="mr-2 text-gray-600">
              TRY:
            </span>

            {["560038", "Indiranagar", "Koramangala"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => quickSearch(item)}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-gray-500 transition hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-400"
                >
                  {item}
                </button>
              )
            )}

          </div>

        </section>

        {/* Stats */}
        <section className="mt-24 grid gap-4 md:grid-cols-3">

          <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)]">

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 text-xl text-red-500">
                ⌖
              </div>

              <div>
                <p className="text-[9px] font-bold tracking-[2px] text-gray-600">
                  LOCATIONS
                </p>

                <h3 className="mt-1 text-2xl font-black">
                  {results.length}+
                </h3>
              </div>

            </div>

          </div>

          <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)]">

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 text-xl text-red-500">
                ◉
              </div>

              <div>
                <p className="text-[9px] font-bold tracking-[2px] text-gray-600">
                  REGION
                </p>

                <h3 className="mt-1 text-2xl font-black">
                  BANGALORE
                </h3>
              </div>

            </div>

          </div>

          <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)]">

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 text-xl text-red-500">
                ⚡
              </div>

              <div>
                <p className="text-[9px] font-bold tracking-[2px] text-gray-600">
                  API RESPONSE
                </p>

                <h3 className="mt-1 text-2xl font-black">
                  FAST
                </h3>
              </div>

            </div>

          </div>

        </section>

        {/* Results */}
        <section className="mt-24">

          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

            <div>

              <p className="text-[9px] font-bold tracking-[3px] text-red-500">
                SEARCH RESULTS
              </p>

              <h3 className="mt-2 text-2xl font-black sm:text-3xl">
                {searched
                  ? `MATCHING "${search.toUpperCase()}"`
                  : "EXPLORE LOCATIONS"}
              </h3>

            </div>

            <div className="rounded-full border border-white/10 px-4 py-2 text-[9px] font-bold tracking-widest text-gray-500">
              {results.length} RESULTS
            </div>

          </div>

          {/* Error */}
          {error && (
            <div className="mb-6 flex items-center gap-3 rounded-xl border border-red-500/20 bg-red-500/5 px-5 py-4 text-sm text-red-400">
              <span>⚠</span>
              {error}
            </div>
          )}

          {/* Loading */}
          {loading ? (

            <div className="flex min-h-[300px] flex-col items-center justify-center gap-5">

              <div className="h-12 w-12 animate-spin rounded-full border-2 border-white/10 border-t-red-500 shadow-[0_0_20px_rgba(239,68,68,0.2)]" />

              <p className="text-[10px] font-bold tracking-[3px] text-gray-600">
                SEARCHING DATABASE...
              </p>

            </div>

          ) : results.length > 0 ? (

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {results.map((item, index) => (
                <PincodeCard
                  key={`${item.pincode}-${item.area}`}
                  item={item}
                  index={index}
                />
              ))}

            </div>

          ) : (

            <div className="rounded-2xl border border-dashed border-white/10 px-6 py-24 text-center">

              <div className="text-5xl text-gray-700">
                ⌖
              </div>

              <h3 className="mt-5 text-lg font-black">
                NO LOCATIONS FOUND
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Try another pincode or Bangalore area.
              </p>

            </div>

          )}

        </section>

      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-20 border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-6 py-8 text-[9px] font-bold tracking-[2px] text-gray-600 sm:flex-row">

          <p>
            BANGALORE PINCODE EXPLORER
          </p>

          <p>
            BUILT WITH <span className="text-red-500">♥</span> REACT + NODE
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;