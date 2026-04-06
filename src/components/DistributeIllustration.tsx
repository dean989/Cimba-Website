'use client';

export default function DistributeIllustration() {
  const destinations = [
    {
      name: 'Email',
      color: '#3B82F6',
      icon: (
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-full h-full">
          <path d="M2.5 3.5h15a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1zm.5 1.5v9l4.5-3.5L3 5zm14 0l-4.5 3.5 4.5 3.5V5z" />
        </svg>
      ),
    },
    {
      name: 'Slack',
      color: '#8B5CF6',
      icon: (
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-full h-full">
          <path d="M4 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0zM12 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0zM14 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0zM6 14a2 2 0 1 0-4 0 2 2 0 0 0 4 0z" />
        </svg>
      ),
    },
    {
      name: 'Dashboard',
      color: '#0D9488',
      icon: (
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-full h-full">
          <path d="M3 4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V4zM3 14a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" />
        </svg>
      ),
    },
    {
      name: 'Google Sheets',
      color: '#10B981',
      icon: (
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-full h-full">
          <path d="M2 4a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm4 2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1V6zm6 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V6z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full h-full bg-[#F3F4F6] rounded-xl p-8 flex items-center justify-center">
      <div className="w-full max-w-md">
        {/* White card */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          {/* Title */}
          <h3 className="text-[18px] font-semibold text-gray-900 mb-1">
            Month-End Close Report
          </h3>

          {/* Status label */}
          <div className="flex items-center gap-2 mb-6">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-4 h-4 text-teal-600"
            >
              <path d="M4 8l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[12px] font-medium text-gray-700">Distributed</span>
          </div>

          {/* Destinations list */}
          <div className="space-y-0">
            {destinations.map((dest, idx) => (
              <div key={dest.name}>
                <div className="flex items-center justify-between py-3">
                  {/* Left: icon and name */}
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className="w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center text-white"
                      style={{ backgroundColor: dest.color }}
                    >
                      {dest.icon}
                    </div>
                    <span className="text-[13px] text-gray-800 font-medium">
                      {dest.name}
                    </span>
                  </div>

                  {/* Right: checkmark */}
                  <div className="w-5 h-5 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0 ml-2">
                    <svg
                      viewBox="0 0 16 16"
                      fill="white"
                      className="w-3 h-3"
                    >
                      <path d="M13.3 3.3L6 10.6 2.7 7.3" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                {/* Dashed separator (except after last item) */}
                {idx < destinations.length - 1 && (
                  <div className="border-t border-dashed border-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
