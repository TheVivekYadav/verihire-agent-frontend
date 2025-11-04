import { Button } from '@/components/livekit/button';

function VeriHireLogo() {
  return (
    <div className="mb-8 flex flex-col items-center gap-4">
      <div className="flex items-center gap-3">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/60 shadow-2xl">
          <span className="text-3xl font-bold text-white">V</span>
        </div>
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">VeriHire</h1>
          <p className="text-sm text-muted-foreground">AI-Powered Interview Platform</p>
        </div>
      </div>
    </div>
  );
}

interface WelcomeViewProps {
  startButtonText: string;
  onStartCall: () => void;
}

export const WelcomeView = ({
  startButtonText,
  onStartCall,
  ref,
}: React.ComponentProps<'div'> & WelcomeViewProps) => {
  return (
    <div ref={ref} className="flex min-h-screen items-center justify-center">
      <section className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <VeriHireLogo />

        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
          Welcome to Your Interview
        </h2>

        <p className="mb-8 max-w-prose text-lg leading-relaxed text-muted-foreground">
          Experience the future of technical interviews with our AI-powered platform featuring live coding, 
          collaborative whiteboarding, and intelligent voice interaction.
        </p>

        <div className="mb-8 grid grid-cols-3 gap-6 text-left">
          <div className="rounded-lg border border-input bg-background p-4">
            <div className="mb-2 text-2xl">💻</div>
            <h3 className="mb-1 font-semibold text-foreground">Live Coding</h3>
            <p className="text-xs text-muted-foreground">Write and execute code in real-time</p>
          </div>
          <div className="rounded-lg border border-input bg-background p-4">
            <div className="mb-2 text-2xl">✏️</div>
            <h3 className="mb-1 font-semibold text-foreground">Whiteboard</h3>
            <p className="text-xs text-muted-foreground">Draw diagrams and explain concepts</p>
          </div>
          <div className="rounded-lg border border-input bg-background p-4">
            <div className="mb-2 text-2xl">🤖</div>
            <h3 className="mb-1 font-semibold text-foreground">AI Interviewer</h3>
            <p className="text-xs text-muted-foreground">Natural voice conversations</p>
          </div>
        </div>

        <Button 
          variant="primary" 
          size="lg" 
          onClick={onStartCall} 
          className="h-14 min-w-[280px] text-base font-bold shadow-xl hover:shadow-2xl"
        >
          {startButtonText}
        </Button>

        <p className="mt-6 text-xs text-muted-foreground">
          Make sure your microphone is enabled for the best experience
        </p>
      </section>
    </div>
  );
};
