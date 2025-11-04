<div align="center">

# 🎯 VeriHire - AI-Powered Interview Platform

**Transform Your Hiring Process with Intelligent AI Interviews**

[Visit VeriHire.live](https://verihire.live) • [Documentation](#getting-started) • [Features](#features) • [Tech Stack](#-tech-stack)

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![LiveKit](https://img.shields.io/badge/LiveKit-Powered-00A3E0?style=flat-square)](https://livekit.io/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

</div>

---

## 📖 About VeriHire

**VeriHire** is a next-generation AI-powered interview platform that revolutionizes technical hiring. Built on [verihire.live](https://verihire.live), our platform combines cutting-edge voice AI technology with collaborative tools to create an immersive, efficient interview experience.

<picture>
  <source srcset="./.github/assets/readme-hero-dark.webp" media="(prefers-color-scheme: dark)">
  <source srcset="./.github/assets/readme-hero-light.webp" media="(prefers-color-scheme: light)">
  <img src="./.github/assets/readme-hero-light.webp" alt="VeriHire Platform Screenshot">
</picture>

### Why VeriHire?

- **🤖 Intelligent AI Interviewer**: Natural, conversational interviews powered by advanced voice AI
- **⚡ Real-time Interaction**: Seamless voice communication with minimal latency
- **💼 Professional**: Designed for enterprise-grade technical assessments
- **🚀 Efficient**: Reduce hiring time while improving candidate experience

---

## ✨ Features

### Core Capabilities

| Feature | Description |
|---------|-------------|
| **🎙️ AI Voice Interviewer** | Conduct natural, intelligent interviews with real-time voice interaction and adaptive questioning |
| **💻 Live Code Editor** | Built-in IDE with syntax highlighting, multi-language support, and code execution capabilities |
| **🎨 Interactive Whiteboard** | Digital canvas for system design discussions, architecture diagrams, and problem-solving |
| **📺 Screen Sharing** | Share and collaborate on code, designs, or documentation in real-time |
| **🎬 Session Recording** | Automatic recording and playback of interview sessions for review and evaluation |
| **📊 Multi-language Support** | Support for JavaScript, Python, Java, C++, Go, and 20+ programming languages |
| **🔒 Secure & Private** | Enterprise-grade security with encrypted communications and data protection |
| **📱 Responsive Design** | Works seamlessly across desktop, tablet, and mobile devices |

---

## 🛠️ Tech Stack

VeriHire is built with modern, industry-leading technologies:

### Frontend
- **[Next.js 15.5](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library with latest features
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework

### Real-time Communication
- **[LiveKit](https://livekit.io/)** - Real-time audio/video infrastructure
- **[LiveKit Agents](https://docs.livekit.io/agents/)** - AI agent framework

### UI Components
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Phosphor Icons](https://phosphoricons.com/)** - Beautiful icon set
- **[Motion](https://motion.dev/)** - Smooth animations

### Developer Tools
- **[pnpm](https://pnpm.io/)** - Fast, disk-efficient package manager
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.x or higher
- **pnpm** 9.x or higher (install with `npm install -g pnpm`)
- **LiveKit Account** - [Sign up free](https://cloud.livekit.io/)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/TheVivekYadav/verihire-agent-frontend.git
   cd verihire-agent-frontend
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Configure environment variables**
   
   Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your LiveKit credentials:
   ```env
   LIVEKIT_API_KEY=your_api_key_here
   LIVEKIT_API_SECRET=your_api_secret_here
   LIVEKIT_URL=wss://your-project.livekit.cloud
   ```

4. **Start the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Setting Up the AI Agent

VeriHire requires an AI agent backend to function. You can:

- **Use our starter agents**:
  - [Python Agent](https://github.com/livekit-examples/agent-starter-python)
  - [Node.js Agent](https://github.com/livekit-examples/agent-starter-node)
- **Build your own**: Follow the [LiveKit Agents documentation](https://docs.livekit.io/agents/start/voice-ai/)

---

## ⚙️ Configuration

### Application Configuration

Customize VeriHire's appearance and behavior in [`app-config.ts`](./app-config.ts):

```typescript
export const APP_CONFIG_DEFAULTS: AppConfig = {
  companyName: 'VeriHire',
  pageTitle: 'VeriHire Voice AI',
  pageDescription: 'Voice AI agent for conducting interviews',

  // Feature flags
  supportsChatInput: true,
  supportsVideoInput: true,
  supportsScreenShare: true,
  isPreConnectBufferEnabled: true,

  // Branding
  logo: '/verihire-logo.svg',
  logoDark: '/verihire-logo-dark.svg',
  accent: '#4F46E5',        // Primary accent color
  accentDark: '#818CF8',    // Dark mode accent color
  startButtonText: 'Start Interview',

  // LiveKit Cloud Sandbox (optional)
  sandboxId: undefined,
  agentName: undefined,
};
```

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `LIVEKIT_API_KEY` | Your LiveKit API key | ✅ Yes |
| `LIVEKIT_API_SECRET` | Your LiveKit API secret | ✅ Yes |
| `LIVEKIT_URL` | Your LiveKit server URL | ✅ Yes |
| `NEXT_PUBLIC_APP_CONFIG_ENDPOINT` | Custom config endpoint | ❌ No |
| `SANDBOX_ID` | LiveKit Cloud Sandbox ID | ❌ No |

---

## 📁 Project Structure

```
verihire-agent-frontend/
├── app/                          # Next.js App Router
│   ├── (app)/                   # App routes
│   ├── api/                     # API routes
│   ├── ui/                      # UI components
│   ├── layout.tsx               # Root layout
│   └── favicon.ico              # Favicon
├── components/                   # React components
│   ├── livekit/                 # LiveKit-specific components
│   ├── ui/                      # Reusable UI components
│   ├── app.tsx                  # Main app component
│   ├── session-view.tsx         # Interview session view
│   └── welcome.tsx              # Welcome screen
├── hooks/                        # Custom React hooks
├── lib/                          # Utility functions
├── public/                       # Static assets
├── styles/                       # Global styles
├── app-config.ts                # Application configuration
├── next.config.ts               # Next.js configuration
└── package.json                 # Dependencies
```

---

## 🧪 Development

### Available Scripts

```bash
# Start development server with Turbopack
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint

# Format code
pnpm format

# Check code formatting
pnpm format:check
```

### Code Quality

This project uses:
- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type checking

Run all checks before committing:
```bash
pnpm lint && pnpm format:check
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy VeriHire is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/TheVivekYadav/verihire-agent-frontend)

1. Click the button above
2. Add your environment variables
3. Deploy!

### Deploy to Other Platforms

VeriHire can be deployed to any platform that supports Next.js:

- **[Netlify](https://www.netlify.com/)**
- **[Railway](https://railway.app/)**
- **[DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform)**
- **[AWS Amplify](https://aws.amazon.com/amplify/)**

Refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for detailed instructions.

---

## 🤝 Contributing

We welcome contributions to VeriHire! Whether it's bug fixes, new features, or documentation improvements, your help makes this project better.

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🔗 Links & Resources

- **Website**: [verihire.live](https://verihire.live)
- **GitHub**: [TheVivekYadav/verihire-agent-frontend](https://github.com/TheVivekYadav/verihire-agent-frontend)
- **LiveKit Docs**: [docs.livekit.io](https://docs.livekit.io/)
- **LiveKit Community**: [livekit.io/join-slack](https://livekit.io/join-slack)

---

## 💬 Support & Contact

Need help or have questions?

- **Issues**: [GitHub Issues](https://github.com/TheVivekYadav/verihire-agent-frontend/issues)
- **Email**: support@verihire.live
- **Community**: Join the [LiveKit Community Slack](https://livekit.io/join-slack)

---

<div align="center">

**Built with ❤️ by the VeriHire Team**

[verihire.live](https://verihire.live) | [Documentation](#getting-started) | [GitHub](https://github.com/TheVivekYadav/verihire-agent-frontend)

</div>
