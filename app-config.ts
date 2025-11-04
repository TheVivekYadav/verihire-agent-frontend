export interface AppConfig {
  pageTitle: string;
  pageDescription: string;
  companyName: string;

  supportsChatInput: boolean;
  supportsVideoInput: boolean;
  supportsScreenShare: boolean;
  isPreConnectBufferEnabled: boolean;

  logo: string;
  startButtonText: string;
  accent?: string;
  logoDark?: string;
  accentDark?: string;

  // for LiveKit Cloud Sandbox
  sandboxId?: string;
  agentName?: string;
}

export const APP_CONFIG_DEFAULTS: AppConfig = {
  companyName: 'VeriHire',
  pageTitle: 'VeriHire Voice AI',
  pageDescription: 'Voice AI agent for conducting interviews',

  supportsChatInput: true,
  supportsVideoInput: true,
  supportsScreenShare: true,
  isPreConnectBufferEnabled: true,

  logo: '/verihire-logo.svg',
  accent: '#4F46E5',
  logoDark: '/verihire-logo-dark.svg',
  accentDark: '#818CF8',
  startButtonText: 'Start Interview',

  // for LiveKit Cloud Sandbox
  sandboxId: undefined,
  agentName: undefined,
};
