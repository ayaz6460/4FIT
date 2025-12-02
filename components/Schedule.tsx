import React, { useState } from 'react';
import Button from './Button';
import Reveal from './Reveal';

type DaySchedule = {
  time: string;
  name: string;
  trainer: string;
  duration: string;
  intensity: 'Low' | 'Medium' | 'High';
};

const scheduleData: Record<string, DaySchedule[]> = {
  Monday: [
    { time: '06:00 AM', name: 'Morning Yoga Flow', trainer: 'Priya Sharma', duration: '60 min', intensity: 'Low' },
    { time: '07:30 AM', name: 'HIIT Blast', trainer: 'Rajesh Kumar', duration: '45 min', intensity: 'High' },
    { time: '05:00 PM', name: 'Zumba Dance', trainer: 'Sneha Patel', duration: '60 min', intensity: 'Medium' },
    { time: '07:00 PM', name: 'CrossFit WOD', trainer: 'Vikram Singh', duration: '60 min', intensity: 'High' },
  ],
  Tuesday: [
    { time: '06:30 AM', name: 'Strength & Conditioning', trainer: 'Arjun Mehta', duration: '60 min', intensity: 'High' },
    { time: '08:00 AM', name: 'Pilates Core', trainer: 'Anjali Desai', duration: '50 min', intensity: 'Medium' },
    { time: '06:00 PM', name: 'Kickboxing', trainer: 'Rohan Gupta', duration: '60 min', intensity: 'High' },
    { time: '07:30 PM', name: 'Spin Cycle', trainer: 'Neha Verma', duration: '45 min', intensity: 'High' },
  ],
  Wednesday: [
    { time: '06:00 AM', name: 'Power Yoga', trainer: 'Priya Sharma', duration: '60 min', intensity: 'Medium' },
    { time: '07:30 AM', name: 'Tabata Cardio', trainer: 'Rajesh Kumar', duration: '45 min', intensity: 'High' },
    { time: '05:30 PM', name: 'Bollywood Dance', trainer: 'Sneha Patel', duration: '60 min', intensity: 'Medium' },
    { time: '07:00 PM', name: 'Heavy Lifting', trainer: 'Vikram Singh', duration: '90 min', intensity: 'High' },
  ],
  Thursday: [
    { time: '06:30 AM', name: 'Functional Training', trainer: 'Arjun Mehta', duration: '60 min', intensity: 'High' },
    { time: '08:00 AM', name: 'Abs & Glutes', trainer: 'Anjali Desai', duration: '30 min', intensity: 'Medium' },
    { time: '06:00 PM', name: 'MMA Drills', trainer: 'Rohan Gupta', duration: '75 min', intensity: 'High' },
    { time: '07:30 PM', name: 'RPM Cycle', trainer: 'Neha Verma', duration: '45 min', intensity: 'High' },
  ],
  Friday: [
    { time: '06:00 AM', name: 'Sunrise Yoga', trainer: 'Priya Sharma', duration: '60 min', intensity: 'Low' },
    { time: '07:30 AM', name: 'Bootcamp', trainer: 'Rajesh Kumar', duration: '60 min', intensity: 'High' },
    { time: '05:00 PM', name: 'Masala Bhangra', trainer: 'Sneha Patel', duration: '60 min', intensity: 'Medium' },
    { time: '06:30 PM', name: 'Powerlifting', trainer: 'Vikram Singh', duration: '90 min', intensity: 'High' },
  ],
  Saturday: [
    { time: '08:00 AM', name: 'Weekend Warrior', trainer: 'All Trainers', duration: '120 min', intensity: 'High' },
    { time: '11:00 AM', name: 'Mobility Flow', trainer: 'Anjali Desai', duration: '60 min', intensity: 'Low' },
    { time: '05:00 PM', name: 'Open Gym', trainer: 'Staff', duration: '3 hrs', intensity: 'Medium' },
  ],
  Sunday: [
    { time: '09:00 AM', name: 'Recovery Yoga', trainer: 'Priya Sharma', duration: '75 min', intensity: 'Low' },
    { time: '10:00 AM', name: 'Sunday Run Club', trainer: 'Rohan Gupta', duration: '60 min', intensity: 'Medium' },
  ]
};

const Schedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState('Monday');
  const days = Object.keys(scheduleData);

  return (
    <section id="schedule" className="py-24 bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">WEEKLY SCHEDULE</h2>
            <p className="text-gray-400">Join our group sessions. Book early to secure your spot.</p>
          </div>
        </Reveal>

        {/* Days Navigation */}
        <Reveal delay={200}>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 ${
                  activeDay === day
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                    : 'bg-zinc-800 text-gray-400 hover:bg-zinc-700 hover:text-white'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Schedule Grid */}
        <Reveal delay={400}>
          <div className="bg-black/40 rounded-3xl overflow-hidden border border-zinc-800 backdrop-blur-sm">
            {scheduleData[activeDay].map((item, index) => (
              <div 
                key={index} 
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 p-6 md:p-8 border-b border-zinc-800/50 last:border-0 hover:bg-zinc-800/30 transition-colors items-center"
              >
                {/* Time */}
                <div className="md:col-span-2">
                  <span className="text-2xl font-black text-white block">{item.time.split(' ')[0]}</span>
                  <span className="text-sm font-bold text-red-600 uppercase tracking-widest">{item.time.split(' ')[1]}</span>
                </div>

                {/* Class Info */}
                <div className="md:col-span-5">
                  <h3 className="text-xl font-bold text-white mb-1">{item.name}</h3>
                  <p className="text-gray-500 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-600"></span>
                    with {item.trainer}
                  </p>
                </div>

                {/* Details */}
                <div className="md:col-span-3 flex items-center gap-4 text-sm font-mono text-gray-400">
                  <div className="bg-zinc-900 px-3 py-1 rounded border border-zinc-800">
                    ⏱ {item.duration}
                  </div>
                  <div className={`px-3 py-1 rounded border ${
                    item.intensity === 'High' ? 'bg-red-900/20 border-red-900/40 text-red-500' :
                    item.intensity === 'Medium' ? 'bg-yellow-900/20 border-yellow-900/40 text-yellow-500' :
                    'bg-green-900/20 border-green-900/40 text-green-500'
                  }`}>
                    {item.intensity}
                  </div>
                </div>

                {/* Action */}
                <div className="md:col-span-2 text-right">
                  <Button variant="outline" className="text-xs py-2 px-4 w-full md:w-auto">
                    Book Slot
                  </Button>
                </div>
              </div>
            ))}
            
            {scheduleData[activeDay].length === 0 && (
              <div className="p-12 text-center text-gray-500">
                No classes scheduled for this day.
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Schedule;