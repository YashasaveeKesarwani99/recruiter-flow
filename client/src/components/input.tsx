import React from 'react';

export interface InputProps {
  type?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void
}

const Input: React.FC<InputProps> = ({ type = 'input', placeholder, onChange }) => {
  if (type === 'input') {
    return (
      <div className="w-full max-w-xs">
        <input
          type="text"
          onChange={onChange}
          placeholder={placeholder}
          className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-primary-grey transition-border bg-primary-background text-white"
        />
      </div>
    );
  } else {
    return (
      <div className="w-full min-h-24">
        <textarea
          placeholder={placeholder}
          onChange={onChange}
          className="w-full h-24 px-4 py-2 border-2 border-gray-300 focus:outline-none focus:border-primary-grey transition-border bg-primary-background text-white"
        />
      </div>
    );
  }
};

export default Input;
