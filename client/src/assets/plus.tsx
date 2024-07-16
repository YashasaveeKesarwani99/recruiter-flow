import React from 'react';

export interface PlusOutlinedProps {
  height?: number;
  width?: number;
  fill?: string;
}

const PlusOutlined: React.FC<PlusOutlinedProps> = ({
  height = 20,
  width = 20,
  fill = '#242529',
}) => {
  return (
    <svg
      width={height}
      height={width}
      viewBox="0 0 75 69"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M37.5 2.70833V66.2917M2.79163 34.5H72.2083"
        stroke={fill}
        stroke-width="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default PlusOutlined;
