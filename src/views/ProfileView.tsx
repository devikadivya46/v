import React from 'react';
import { User, Mail, Award, Target, Bell, Shield, Sliders, LogOut } from 'lucide-react';

interface ProfileViewProps {
  completedCount: number;
  currentStreak: number;
}

export const ProfileView: React.FC<ProfileViewProps> = ({ completedCount, currentStreak }) => {
  return (
    <div className="space-y-6 animate-fade-in pb-28">
      {/* Profile Header */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-center gap-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white text-2xl font-bold flex items-center justify-center shadow-md ring-4 ring-blue-50">
          D
        </div>
        <div className="text-center sm:text-left space-y-1">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <h1 className="text-2xl font-bold text-slate-900">Devika</h1>
            <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
              Pro Learner
            </span>
          </div>
          <p className="text-xs text-slate-500 flex items-center justify-center sm:justify-start gap-1.5">
            <Mail className="w-3.5 h-3.5" />
            <span>devikadivyasn@gmail.com</span>
          </p>
          <p className="text-xs text-slate-600 pt-1">
            Goal: Scoring 95th Percentile in National Entrance Examination
          </p>
        </div>
      </div>

      {/* Target & Schedule Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Target className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Study Streak & Goal</h3>
              <p className="text-xs text-slate-400">Daily target: 1 diagnostic mock</p>
            </div>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl flex items-center justify-between text-xs">
            <span className="text-slate-600 font-medium">Current Consistency</span>
            <span className="font-bold text-amber-600">{currentStreak} Consecutive Days</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Total Assessments</h3>
              <p className="text-xs text-slate-400">All tests verified and recorded</p>
            </div>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl flex items-center justify-between text-xs">
            <span className="text-slate-600 font-medium">Tests Completed</span>
            <span className="font-bold text-blue-600">{completedCount} Completed</span>
          </div>
        </div>
      </div>

      {/* Settings List */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs divide-y divide-slate-100 overflow-hidden">
        <div className="p-4 flex items-center justify-between hover:bg-slate-50 cursor-pointer">
          <div className="flex items-center gap-3">
            <Bell className="w-4 h-4 text-slate-500" />
            <span className="text-xs font-semibold text-slate-800">Assessment Notifications</span>
          </div>
          <span className="text-xs text-blue-600 font-semibold">Enabled</span>
        </div>

        <div className="p-4 flex items-center justify-between hover:bg-slate-50 cursor-pointer">
          <div className="flex items-center gap-3">
            <Shield className="w-4 h-4 text-slate-500" />
            <span className="text-xs font-semibold text-slate-800">Security & Account</span>
          </div>
          <span className="text-xs text-slate-400">Configured</span>
        </div>

        <div className="p-4 flex items-center justify-between hover:bg-rose-50 cursor-pointer text-rose-600">
          <div className="flex items-center gap-3">
            <LogOut className="w-4 h-4" />
            <span className="text-xs font-semibold">Log out</span>
          </div>
        </div>
      </div>
    </div>
  );
};
