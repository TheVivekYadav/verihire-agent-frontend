import { getAppConfig } from '@/lib/utils';
import { headers } from 'next/headers';

interface LayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  const hdrs = await headers();
  const { companyName } = await getAppConfig(hdrs);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full border-b border-input/50 bg-background/80 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/60">
              <span className="text-lg font-bold text-white">V</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">{companyName}</span>
          </div>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Interview Platform
          </span>
        </div>
      </header>

      <main className="pt-14">{children}</main>
    </>
  );
}
