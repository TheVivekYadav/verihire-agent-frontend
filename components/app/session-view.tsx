'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import type { AppConfig } from '@/app-config';
import { ChatTranscript } from '@/components/app/chat-transcript';
import { PreConnectMessage } from '@/components/app/preconnect-message';
import { AIPanel } from '@/components/interview/ai-panel';
import { CodeEditor } from '@/components/interview/code-editor';
import { Whiteboard } from '@/components/interview/whiteboard';
import {
  AgentControlBar,
  type ControlBarControls,
} from '@/components/livekit/agent-control-bar/agent-control-bar';
import { useChatMessages } from '@/hooks/useChatMessages';
import { useConnectionTimeout } from '@/hooks/useConnectionTimout';
import { useDebugMode } from '@/hooks/useDebug';
import { cn } from '@/lib/utils';
import { ScrollArea } from '../livekit/scroll-area/scroll-area';

const MotionBottom = motion.create('div');

const IN_DEVELOPMENT = process.env.NODE_ENV !== 'production';
const BOTTOM_VIEW_MOTION_PROPS = {
  variants: {
    visible: {
      opacity: 1,
      translateY: '0%',
    },
    hidden: {
      opacity: 0,
      translateY: '100%',
    },
  },
  initial: 'hidden',
  animate: 'visible',
  exit: 'hidden',
  transition: {
    duration: 0.3,
    delay: 0.5,
    ease: 'easeOut',
  },
};

interface FadeProps {
  top?: boolean;
  bottom?: boolean;
  className?: string;
}

export function Fade({ top = false, bottom = false, className }: FadeProps) {
  return (
    <div
      className={cn(
        'from-background pointer-events-none h-4 bg-linear-to-b to-transparent',
        top && 'bg-linear-to-b',
        bottom && 'bg-linear-to-t',
        className
      )}
    />
  );
}
interface SessionViewProps {
  appConfig: AppConfig;
}

export const SessionView = ({
  appConfig,
  ...props
}: React.ComponentProps<'section'> & SessionViewProps) => {
  useConnectionTimeout(200_000);
  useDebugMode({ enabled: IN_DEVELOPMENT });

  const messages = useChatMessages();
  const [chatOpen, setChatOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'code' | 'whiteboard'>('code');
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const controls: ControlBarControls = {
    leave: true,
    microphone: true,
    chat: appConfig.supportsChatInput,
    camera: appConfig.supportsVideoInput,
    screenShare: appConfig.supportsVideoInput,
  };

  useEffect(() => {
    const lastMessage = messages.at(-1);
    const lastMessageIsLocal = lastMessage?.from?.isLocal === true;

    if (scrollAreaRef.current && lastMessageIsLocal) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <section className="bg-muted/20 relative z-10 h-full w-full overflow-hidden" {...props}>
      {/* Main Dashboard Grid */}
      <div className="grid h-full grid-cols-1 gap-4 p-4 md:grid-cols-3">
        {/* Left Column - Code/Whiteboard */}
        <div className="flex flex-col gap-2 md:col-span-2">
          {/* Tab Selector */}
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('code')}
              className={cn(
                'flex-1 rounded-lg border px-4 py-2 font-mono text-sm font-semibold transition-all',
                activeTab === 'code'
                  ? 'border-primary bg-primary text-primary-foreground shadow-lg'
                  : 'border-input bg-background text-muted-foreground hover:bg-muted'
              )}
            >
              💻 Code Editor
            </button>
            <button
              onClick={() => setActiveTab('whiteboard')}
              className={cn(
                'flex-1 rounded-lg border px-4 py-2 font-mono text-sm font-semibold transition-all',
                activeTab === 'whiteboard'
                  ? 'border-primary bg-primary text-primary-foreground shadow-lg'
                  : 'border-input bg-background text-muted-foreground hover:bg-muted'
              )}
            >
              ✏️ Whiteboard
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1">{activeTab === 'code' ? <CodeEditor /> : <Whiteboard />}</div>
        </div>

        {/* Right Column - AI Panel */}
        <div className="flex flex-col gap-4">
          <AIPanel />

          {/* Chat Transcript */}
          {chatOpen && (
            <div className="border-input bg-background flex-1 overflow-hidden rounded-lg border">
              <div className="border-input border-b px-4 py-2">
                <h3 className="font-mono text-sm font-semibold">Transcript</h3>
              </div>
              <ScrollArea ref={scrollAreaRef} className="h-[calc(100%-3rem)] p-4">
                <ChatTranscript messages={messages} className="space-y-3" />
              </ScrollArea>
            </div>
          )}
        </div>
      </div>

      {/* Control Bar - Fixed Bottom */}
      <div className="from-background via-background fixed inset-x-0 bottom-0 z-50 bg-gradient-to-t to-transparent p-4">
        <div className="mx-auto max-w-7xl">
          {appConfig.isPreConnectBufferEnabled && (
            <PreConnectMessage messages={messages} className="pb-4" />
          )}
          <AgentControlBar controls={controls} onChatOpenChange={setChatOpen} />
        </div>
      </div>
    </section>
  );
};
