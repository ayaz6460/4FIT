import React, { useState } from 'react';
import { generateWorkoutPlan } from '../services/geminiService';
import { FitnessLevel, Goal, WorkoutPlan } from '../types';
import Button from './Button';
import Reveal from './Reveal';

const AITrainer: React.FC = () => {
  const [level, setLevel] = useState<FitnessLevel>(FitnessLevel.Beginner);
  const [goal, setGoal] = useState<Goal>(Goal.MuscleGain);
  const [duration, setDuration] = useState<number>(45);
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<WorkoutPlan | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    setPlan(null);
    
    try {
      const result = await generateWorkoutPlan(level, goal, duration);
      if (result) {
        setPlan(result);
      } else {
        setError("Could not generate a plan. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Check your connection or API key.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-trainer" className="py-24 bg-zinc-900 relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              4FIT <span className="text-red-600">A.I.</span> TRAINER
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Powered by Google Gemini 2.5 Flash. Input your goals, and let our advanced AI construct the perfect workout for you instantly.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Controls */}
          <div className="lg:col-span-4">
            <Reveal delay={200}>
              <div className="space-y-8 bg-black/50 p-8 rounded-3xl border border-zinc-800 h-fit">
                <div>
                  <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Fitness Level</label>
                  <div className="grid grid-cols-3 gap-2">
                    {Object.values(FitnessLevel).map((l) => (
                      <button
                        key={l}
                        onClick={() => setLevel(l)}
                        className={`px-2 py-3 rounded-lg text-sm font-semibold transition-all ${
                          level === l 
                          ? 'bg-red-600 text-white shadow-lg shadow-red-600/20' 
                          : 'bg-zinc-800 text-gray-400 hover:bg-zinc-700'
                        }`}
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Goal</label>
                  <select 
                    value={goal}
                    onChange={(e) => setGoal(e.target.value as Goal)}
                    className="w-full bg-zinc-800 border-none rounded-xl p-4 text-white focus:ring-2 focus:ring-red-600 outline-none appearance-none"
                  >
                    {Object.values(Goal).map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Duration: {duration} min</label>
                  <input 
                    type="range" 
                    min="15" 
                    max="90" 
                    step="5" 
                    value={duration} 
                    onChange={(e) => setDuration(Number(e.target.value))}
                    className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-red-600"
                  />
                </div>

                <Button 
                  fullWidth 
                  onClick={handleGenerate} 
                  disabled={loading}
                  className="mt-4"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : 'Generate Workout'}
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Results Display */}
          <div className="lg:col-span-8 min-h-[500px] flex flex-col">
            <Reveal delay={400} className="flex-1 flex flex-col">
              {error && (
                <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-6 rounded-2xl mb-6">
                  {error}
                </div>
              )}

              {!plan && !loading && !error && (
                <div className="flex-1 flex flex-col items-center justify-center text-gray-500 border-2 border-dashed border-zinc-800 rounded-3xl p-12">
                  <svg className="w-16 h-16 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  <p className="text-xl font-medium">Ready to train? Configure your session.</p>
                </div>
              )}

              {plan && (
                <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 shadow-2xl animate-fade-in-up">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-zinc-800 pb-6">
                    <div>
                      <h3 className="text-3xl font-black text-white italic uppercase">{plan.title}</h3>
                      <p className="text-red-500 font-mono mt-2">{plan.duration}</p>
                    </div>
                    <div className="mt-4 md:mt-0 px-4 py-2 bg-zinc-900 rounded-lg border border-zinc-800">
                      <span className="text-sm text-gray-400">Target: </span>
                      <span className="text-white font-bold">{goal}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {plan.exercises.map((ex, idx) => (
                      <div key={idx} className="bg-zinc-900/50 p-6 rounded-xl border-l-4 border-red-600 hover:bg-zinc-800 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-xl font-bold text-white">{ex.name}</h4>
                          <div className="flex space-x-4 text-sm font-mono text-gray-400">
                            <span>{ex.sets} Sets</span>
                            <span>{ex.reps} Reps</span>
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm italic border-t border-dashed border-gray-700 pt-2 mt-2">
                          "{ex.notes}"
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITrainer;