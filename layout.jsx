function Dashboard() {
  const [activeTab, setActiveTab] = React.useState("dashboard");
  const [categories, setCategories] = React.useState({
    cultural: true,
    bedtime: true,
    funny: true,
    inspirational: true,
  });
  const [timeLimits, setTimeLimits] = React.useState({
    daily: 60,
    perSession: 20,
  });

  // Responsive metrics data
  const usageData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Minutes",
        data: [45, 52, 38, 65, 41, 55, 30],
        borderColor: "#FF9F1C",
        backgroundColor: "rgba(255, 159, 28, 0.1)",
        borderWidth: 2,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const categoryDistribution = {
    labels: ["Cultural", "Bedtime", "Funny", "Inspirational"],
    datasets: [
      {
        data: [35, 25, 20, 20],
        backgroundColor: ["#FF9F1C", "#2EC4B6", "#E71D36", "#662E9B"],
      },
    ],
  };

  React.useEffect(() => {
    // Initialize charts with mobile-responsive options
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            boxWidth: 12,
          },
        },
      },
    };

    new Chart(document.getElementById("usageChart"), {
      type: "line",
      data: usageData,
      options: {
        ...chartOptions,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function (value) {
                return value + "m";
              },
            },
          },
        },
      },
    });

    new Chart(document.getElementById("categoryChart"), {
      type: "doughnut",
      data: categoryDistribution,
      options: chartOptions,
    });
  }, []);

  return (
    <div className="min-h-[100dvh] bg-gray-50">
      {/* Mobile-friendly header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-amber-500 p-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <span className="ml-3 text-lg font-semibold text-gray-800">
              Cuddle Tales
            </span>
          </div>
          <button className="p-2 rounded-full bg-gray-100 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Bottom tab navigation for mobile */}
      <nav className="fixed max-w-[500px] bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 flex justify-around">
        {["dashboard", "controls", "rewards"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex flex-col items-center py-3 px-4 ${
              activeTab === tab ? "text-amber-500" : "text-gray-500"
            }`}
          >
            {tab === "dashboard" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={activeTab === tab ? 2 : 1.5}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            )}
            {tab === "controls" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={activeTab === tab ? 2 : 1.5}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            )}
            {tab === "rewards" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={activeTab === tab ? 2 : 1.5}
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            )}
            <span className="text-xs mt-1 capitalize">{tab}</span>
          </button>
        ))}
      </nav>

      {/* Main Content */}
      <main className="pb-16 md:pb-0 px-4 py-4">
        {activeTab === "dashboard" && (
          <div className="space-y-6">
            {/* Welcome card */}
            <div className="bg-gradient-to-r from-amber-400 to-amber-500 rounded-2xl p-5 text-white shadow-lg">
              <h2 className="text-xl font-bold">Hello, Parent!</h2>
              <p className="mt-1 opacity-90">Here's your weekly summary</p>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-sm">Today's usage</p>
                  <p className="text-2xl font-bold">42m</p>
                </div>
                <div className="bg-white/20 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3">
              <StatCard title="Weekly Avg" value="48m" icon="📊" />
              <StatCard title="Top Category" value="Cultural" icon="🏆" />
              <StatCard title="Stories Read" value="27" icon="📚" />
              <StatCard title="Badges" value="3" icon="🎖️" />
            </div>

            {/* Charts */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-4">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Weekly Usage
                </h3>
                <div className="h-60">
                  <canvas id="usageChart"></canvas>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-4">
                <h3 className="font-semibold text-gray-800 mb-3">Categories</h3>
                <div className="h-60">
                  <canvas id="categoryChart"></canvas>
                </div>
              </div>
            </div>

            <RecentActivity />
          </div>
        )}

        {activeTab === "controls" && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-800">
              Content Controls
            </h2>

            {/* Content Categories */}
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-semibold text-gray-800 mb-4">
                Story Categories
              </h3>
              <div className="space-y-3">
                {Object.entries(categories).map(([category, enabled]) => (
                  <div
                    key={category}
                    className="flex items-center justify-between py-2"
                  >
                    <span className="capitalize font-medium text-gray-700">
                      {category}
                    </span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={enabled}
                        onChange={(e) =>
                          setCategories((prev) => ({
                            ...prev,
                            [category]: e.target.checked,
                          }))
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Time Limits */}
            <div className="bg-white rounded-xl shadow-sm p-5">
              <h3 className="font-semibold text-gray-800 mb-4">Time Limits</h3>
              <div className="space-y-5">
                <TimeLimitControl
                  label="Daily Limit"
                  value={timeLimits.daily}
                  onChange={(val) =>
                    setTimeLimits((prev) => ({ ...prev, daily: val }))
                  }
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  }
                />
                <TimeLimitControl
                  label="Per Session"
                  value={timeLimits.perSession}
                  onChange={(val) =>
                    setTimeLimits((prev) => ({ ...prev, perSession: val }))
                  }
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  }
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "rewards" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Add Reward
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-100">
                <svg
                  className="w-6 h-6 text-indigo-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
                <h3 className="font-semibold text-lg text-gray-800">
                  Badge Collection
                </h3>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {[
                  {
                    child: "Anika",
                    rewards: [
                      {
                        name: "Gold Star",
                        icon: "star",
                        color: "text-amber-400",
                      },
                      {
                        name: "Explorer Badge",
                        icon: "compass",
                        color: "text-emerald-500",
                      },
                      {
                        name: "Story Master",
                        icon: "book-open",
                        color: "text-purple-500",
                      },
                    ],
                    avatar: (
                      <svg
                        className="w-10 h-10 text-pink-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ),
                  },
                  {
                    child: "Rohan",
                    rewards: [
                      {
                        name: "Silver Star",
                        icon: "star",
                        color: "text-gray-400",
                      },
                      {
                        name: "Bedtime Champ",
                        icon: "moon",
                        color: "text-blue-500",
                      },
                      {
                        name: "Quick Reader",
                        icon: "lightning-bolt",
                        color: "text-yellow-500",
                      },
                    ],
                    avatar: (
                      <svg
                        className="w-10 h-10 text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ),
                  },
                ].map((entry, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="relative">
                        {entry.avatar}
                        <div className="absolute -bottom-1 -right-1 bg-indigo-100 rounded-full p-1">
                          <svg
                            className="w-4 h-4 text-indigo-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      <h4 className="font-semibold text-gray-800">
                        {entry.child}'s Badges
                      </h4>
                    </div>
                    <ul className="space-y-3">
                      {entry.rewards.map((reward, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 bg-white px-3 py-2 rounded-lg border border-gray-100"
                        >
                          <div
                            className={`p-2 rounded-full ${reward.color} bg-opacity-20`}
                          >
                            {reward.icon === "star" && (
                              <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            )}
                            {reward.icon === "compass" && (
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                                />
                              </svg>
                            )}
                            {reward.icon === "book-open" && (
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                />
                              </svg>
                            )}
                            {reward.icon === "moon" && (
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                />
                              </svg>
                            )}
                            {reward.icon === "lightning-bolt" && (
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                              </svg>
                            )}
                          </div>
                          <span className="text-gray-700 font-medium">
                            {reward.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <button className="mt-4 text-sm text-indigo-600 hover:text-indigo-800 flex items-center gap-1">
                      View all achievements
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-indigo-50/30 p-5 rounded-xl border border-indigo-100 flex items-start gap-3">
              <svg
                className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 className="font-medium text-indigo-800 mb-1">Pro Tip</h3>
                <p className="text-sm text-indigo-700">
                  Celebrate small wins! Consider adding a special reward when
                  your child completes 5 books.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-xl font-bold mt-1">{value}</p>
        </div>
        <span className="text-2xl">{icon}</span>
      </div>
    </div>
  );
}

function TimeLimitControl({ label, value, onChange, icon }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          {icon}
          <span className="ml-2 text-gray-600">{label}</span>
        </div>
        <span className="font-semibold bg-amber-100 text-amber-800 px-2 py-1 rounded-md">
          {value}m
        </span>
      </div>
      <input
        type="range"
        min="15"
        max="120"
        step="15"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
      />
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>15m</span>
        <span>30m</span>
        <span>45m</span>
        <span>60m</span>
        <span>120m</span>
      </div>
    </div>
  );
}

function RecentActivity() {
  const activities = [
    {
      time: "2h ago",
      child: "Anika",
      action: "watched Cultural story",
      icon: "📺",
    },
    {
      time: "4h ago",
      child: "Rohan",
      action: "completed bedtime series",
      icon: "🛌",
    },
    {
      time: "1d ago",
      child: "Anika",
      action: 'earned "Explorer" badge',
      icon: "🏆",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-5">
      <h3 className="font-semibold text-gray-800 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start">
            <span className="text-xl mr-3 mt-1">{activity.icon}</span>
            <div className="flex-1">
              <p className="font-medium text-gray-800">{activity.child}</p>
              <p className="text-gray-600">{activity.action}</p>
            </div>
            <span className="text-sm text-gray-500">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

ReactDOM.render(<Dashboard />, document.getElementById("root"));
