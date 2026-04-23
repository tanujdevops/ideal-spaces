import React from 'react';
import { Link } from '@/lib/router';

const AuthHeader: React.FC = () => {
  return (
    <Link to="/" className="flex items-center justify-center gap-3 mb-8">
      <div className="bg-[#E0B030] rounded-lg w-10 h-10 flex items-center justify-center">
        <span className="material-icons text-white text-2xl">apartment</span>
      </div>
      <span className="font-fraunces text-3xl font-bold text-[#111827]">BuildEstate</span>
    </Link>
  );
};

export default AuthHeader;