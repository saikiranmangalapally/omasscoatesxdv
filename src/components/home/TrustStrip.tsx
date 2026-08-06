'use client';

export default function TrustStrip() {
  const trustedBy = [
    'TechVista Solutions',
    'GreenLeaf Organics',
    'Murthy Enterprises',
    'Nexus Infra Pvt Ltd',
    'PixelCraft Studios',
    'Rao & Associates',
    'Al-Madina Exports',
    'Horizon Properties',
    'Skyline Developers',
    'Zenith Technologies',
  ];

  const items = [...trustedBy, ...trustedBy];

  return (
    <section className="py-6 bg-white border-b border-[#E2E8F0]">
      <div className="container-custom mb-3">
        <p className="text-center text-xs uppercase tracking-widest font-medium text-[#64748B]">
          Trusted by businesses across Hyderabad
        </p>
      </div>
      <div className="overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content">
            {items.map((name, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center gap-2 opacity-40 hover:opacity-70 transition-opacity"
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold bg-[#F8FAFC] text-[#475569]">
                  {name.charAt(0)}
                </div>
                <span className="text-sm font-medium whitespace-nowrap text-[#475569]">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
