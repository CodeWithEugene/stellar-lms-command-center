
import React from 'react';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

const WelcomeBanner = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col md:flex-row justify-between items-center gap-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Welcome back, Admin!</h1>
        <p className="text-gray-600 mt-1 max-w-xl">
          Monitor your LMS performance, manage users, and keep track of course progress all from this dashboard.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button variant="outline">
          View Reports
        </Button>
        <Button className="bg-lms-primary hover:bg-lms-orange-dark flex items-center gap-2">
          <PlusCircle className="h-4 w-4" />
          <span>New Course</span>
        </Button>
      </div>
    </div>
  );
};

export default WelcomeBanner;
