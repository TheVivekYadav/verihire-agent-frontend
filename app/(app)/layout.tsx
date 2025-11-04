import { headers } from 'next/headers';
import { getAppConfig } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  const hdrs = await headers();
  const { companyName } = await getAppConfig(hdrs);

  return (
    <>
      <header className="border-input/50 bg-background/80 fixed top-0 left-0 z-50 w-full border-b backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="from-primary to-primary/60 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br">
              <span className="text-lg font-bold text-white">V</span>
            </div>
            <span className="text-foreground text-xl font-bold tracking-tight">{companyName}</span>
          </div>
          <span className="text-muted-foreground font-mono text-xs font-semibold tracking-wider uppercase">
            Interview Platform
          </span>
        </div>
      </header>

      <main className="pt-14">{children}</main>
    </>
  );
}
