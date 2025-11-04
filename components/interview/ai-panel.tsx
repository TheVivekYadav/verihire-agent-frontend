'use client';

import { cn } from '@/lib/utils';
import { BarVisualizer, useVoiceAssistant } from '@livekit/components-react';

export function AIPanel({ className }: { className?: string }) {
  const { state: agentState, audioTrack: agentAudioTrack } = useVoiceAssistant();

  return (
    <div className={cn('flex h-full flex-col overflow-hidden rounded-lg border border-input bg-gradient-to-br from-primary/5 to-primary/10', className)}>
      {/* Header */}
      <div className="border-b border-input px-4 py-3">
        <h3 className="font-mono text-sm font-semibold text-foreground">AI Interviewer</h3>
        <p className="mt-1 text-xs text-muted-foreground">
          {agentState === 'speaking' ? 'Speaking...' : agentState === 'listening' ? 'Listening...' : 'Ready'}
        </p>
      </div>

      {/* AI Visualizer */}
      <div className="flex flex-1 items-center justify-center p-8">
        <div className="relative">
          {/* Pulsing background */}
          <div className={cn(
            'absolute inset-0 rounded-full bg-primary/20 blur-xl transition-all duration-500',
            agentState === 'speaking' && 'scale-150 bg-primary/30'
          )} />
          
          {/* AI Avatar */}
          <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/60 shadow-2xl">
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
      <div className="grid grid-cols-3 gap-2 border-t border-input p-4">
        <div className="text-center">
          <p className="text-xs text-muted-foreground">Questions</p>
          <p className="font-mono text-lg font-bold text-foreground">0</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-muted-foreground">Duration</p>
          <p className="font-mono text-lg font-bold text-foreground">0:00</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-muted-foreground">Status</p>
          <p className={cn(
            'font-mono text-lg font-bold',
            agentState === 'speaking' ? 'text-green-500' : 'text-foreground'
          )}>
            {agentState === 'speaking' ? 'Active' : 'Idle'}
          </p>
        </div>
      </div>
    </div>
  );
}
