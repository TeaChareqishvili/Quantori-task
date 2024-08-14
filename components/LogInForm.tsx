export default function LogInForm() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-14 py-10 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-[#66837e] mb-6">Login</h2>
      <form className="space-y-6">
        <div className="relative">
          <label
            htmlFor="email"
            className="absolute -top-3 left-2 bg-white px-1 text-sm font-medium text-[#66837e]"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full text-[#66837e] px-3 py-2 border border-[#66837e] rounded-md shadow-sm focus:outline-none focus:ring-[#66837e] focus:border-[#66837e]"
            placeholder="email@example.com"
          />
        </div>
        <div className="relative">
          <label
            htmlFor="password"
            className="absolute -top-3 left-2 bg-white px-1 text-sm font-medium text-[#66837e]"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block text-[#66837e] w-full px-3 py-2 border border-[#66837e] rounded-md shadow-sm focus:outline-none focus:ring-[#66837e] focus:border-[#66837e]"
            placeholder="********"
          />
        </div>
        <div className="flex justify-between items-center mt-6">
          <button
            type="button"
            className="px-4 py-2 bg-gray-100 text-[#66837e] border border-[#66837e] rounded-md hover:bg-gray-200 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-[#66837e] text-white rounded-md hover:bg-[#556e6b] transition"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
