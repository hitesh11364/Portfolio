// components/ThreeDButton.tsx
import React from 'react';

type Props = {
    label: string;
    onClick: () => void;
};

const ThreeDButton: React.FC<Props> = ({ label, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="px-6 py-2 bg-primaryColor text-bgColor font-semibold rounded-xl
                 shadow-[0_4px_0_#0f766e] hover:translate-y-[2px] hover:shadow-[0_2px_0_#0f766e]
                 active:translate-y-[4px] active:shadow-none transition-all duration-200"
        >
            {label}
        </button>
    );
};

export default ThreeDButton;
