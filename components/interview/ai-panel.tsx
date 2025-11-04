'use client';

import { BarVisualizer, useVoiceAssistant } from '@livekit/components-react';
import { cn } from '@/lib/utils';

export function AIPanel({ className }: { className?: string }) {
  const { state: agentState, audioTrack: agentAudioTrack } = useVoiceAssistant();

  return (
    <div
      className={cn(
        'border-input from-primary/5 to-primary/10 flex h-full flex-col overflow-hidden rounded-lg border bg-gradient-to-br',
        className
      )}
    >
      {/* Header */}
      <div className="border-input border-b px-4 py-3">
        <h3 className="text-foreground font-mono text-sm font-semibold">AI Interviewer</h3>
        <p className="text-muted-foreground mt-1 text-xs">
          {agentState === 'speaking'
            ? 'Speaking...'
            : agentState === 'listening'
              ? 'Listening...'
              : 'Ready'}
        </p>
      </div>

      {/* AI Visualizer */}
      <div className="flex flex-1 items-center justify-center p-8">
        <div className="relative">
          {/* Pulsing background */}
          <div
            className={cn(
              'bg-primary/20 absolute inset-0 rounded-full blur-xl transition-all duration-500',
              agentState === 'speaking' && 'bg-primary/30 scale-150'
            )}
          />

          {/* AI Avatar */}
          <div className="from-primary to-primary/60 relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br shadow-2xl">
            <BarVisualizer
              barCount={5}
              state={agentState}
              options={{ minHeight: 8 }}
              trackRef={agentAudioTrack}
              className="flex h-16 items-center justify-center gap-1"
            >
              <span className="h-2 w-2 rounded-full bg-white/90 transition-all duration-200 data-[lk-highlighted=true]:h-8" />
            </BarVisualizer>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="border-input grid grid-cols-3 gap-2 border-t p-4">
        <div className="text-center">
          <p className="text-muted-foreground text-xs">Questions</p>
          <p className="text-foreground font-mono text-lg font-bold">0</p>
        </div>
        <div className="text-center">
          <p className="text-muted-foreground text-xs">Duration</p>
          <p className="text-foreground font-mono text-lg font-bold">0:00</p>
        </div>
        <div className="text-center">
          <p className="text-muted-foreground text-xs">Status</p>
          <p
            className={cn(
              'font-mono text-lg font-bold',
              agentState === 'speaking' ? 'text-green-500' : 'text-foreground'
            )}
          >
            {agentState === 'speaking' ? 'Active' : 'Idle'}
          </p>
        </div>
      </div>
    </div>
  );
}
