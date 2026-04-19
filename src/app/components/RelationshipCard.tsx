interface RelationshipCardProps {
  icon: string;
  title: string;
  name: string;
  detail: string;
  urgency?: 'high' | 'medium' | 'low';
  className?: string;
}

export function RelationshipCard({ icon, title, name, detail, urgency = 'medium', className = '' }: RelationshipCardProps) {
  const cardStyles = {
    high: "bg-[#FFF8EF] border-[#F6D5A4]",
    medium: "bg-[#EEF6F8] border-[#C3E1E5]",
    low: "bg-white border-[#DCE7ED]"
  };

  const dotStyles = {
    high: "bg-[#F59E0B]",
    medium: "bg-[#5FA4AF]",
    low: "bg-[#9AAEBC]"
  };

  return (
    <div className={`${cardStyles[urgency]} backdrop-blur-sm border rounded-xl p-3.5 shadow-sm hover:shadow-md transition-all duration-300 ${className}`}>
      <div className="flex items-start gap-2.5">
        <div className="text-xl mt-0.5">{icon}</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-0.5">
            <div className={`w-1 h-1 rounded-full ${dotStyles[urgency]}`} />
            <span className="text-[10px] text-slate-600 uppercase tracking-wide">{title}</span>
          </div>
          <div className="text-[13px] text-slate-900 mb-0.5">{name}</div>
          <div className="text-[11px] text-slate-500 leading-tight">{detail}</div>
        </div>
      </div>
    </div>
  );
}
