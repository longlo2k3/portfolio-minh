import React from 'react';

interface LiveProjectButtonProps {
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  label?: string;
  href?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  onClick,
  className = '',
  label = 'Live Project',
  href,
}) => {
  const commonClasses = `rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 active:scale-95 transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-pointer select-none ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={commonClasses}
      >
        <span>{label}</span>
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={commonClasses}
    >
      <span>{label}</span>
    </button>
  );
};

export default LiveProjectButton;
