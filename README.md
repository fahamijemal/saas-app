# Converso - Real-time AI Teaching Platform

A modern SaaS application that provides an interactive AI-powered learning experience through voice-enabled companions. Built with Next.js 15, React 19, and TypeScript.

## 🚀 Features

- **AI Companions**: Create and interact with AI teaching companions across various subjects
- **Voice Integration**: Real-time voice conversations powered by Vapi.ai
- **Subject-based Learning**: Support for multiple subjects including Math, Science, History, Language, Economics, and more
- **Session Tracking**: Monitor your learning progress and session history
- **Bookmarking System**: Save your favorite companions for quick access
- **User Profiles**: Personal dashboard with learning statistics
- **Responsive Design**: Modern UI that works on all devices
- **Authentication**: Secure user management with Clerk

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui + Radix UI
- **Authentication**: Clerk
- **Database**: Supabase
- **Voice AI**: Vapi.ai
- **Monitoring**: Sentry
- **Deployment**: Vercel (recommended)

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js 18+ installed
- npm or yarn package manager
- Supabase account and project
- Clerk account and application
- Vapi.ai account and API token

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/fahamijemal/saas-app.git
   cd saas_app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory with the following variables:

   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key

   # Supabase Database
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

   # Vapi.ai Voice Integration
   NEXT_PUBLIC_VAPI_WEB_TOKEN=your_vapi_web_token

   # Sentry Monitoring (Optional)
   SENTRY_DSN=your_sentry_dsn
   ```

4. **Set up Supabase Database**
   
   Create the following tables in your Supabase project:

   ```sql
   -- Companions table
   CREATE TABLE companions (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     name TEXT NOT NULL,
     description TEXT,
     subject TEXT NOT NULL,
     topic TEXT,
     author UUID REFERENCES auth.users(id),
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
     updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Session history table
   CREATE TABLE session_history (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     user_id UUID REFERENCES auth.users(id),
     companion_id UUID REFERENCES companions(id),
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Bookmarks table
   CREATE TABLE bookmarks (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     user_id UUID REFERENCES auth.users(id),
     companion_id UUID REFERENCES companions(id),
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
     UNIQUE(user_id, companion_id)
   );
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
saas_app/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── companions/        # Companion pages
│   ├── my-journey/        # User profile page
│   ├── sign-in/           # Authentication pages
│   └── subscription/      # Subscription management
├── components/            # React components
│   ├── ui/               # Shadcn/ui components
│   └── ...               # Custom components
├── lib/                  # Utility functions and configurations
│   ├── actions/          # Server actions
│   ├── supabase.ts       # Supabase client
│   └── vapi.sdk.ts       # Vapi.ai SDK
├── public/               # Static assets
│   ├── icons/            # SVG icons
│   └── images/           # Images and logos
└── types/                # TypeScript type definitions
```

## 🎯 Key Features Explained

### AI Companions
- Create personalized AI teaching companions
- Choose from various subjects and topics
- Interactive learning experiences

### Voice Integration
- Real-time voice conversations with AI companions
- Powered by Vapi.ai for natural language processing
- Seamless voice-to-text and text-to-voice capabilities

### Learning Analytics
- Track your learning progress
- View session history
- Monitor companion usage statistics

### User Management
- Secure authentication with Clerk
- User profiles with learning statistics
- Bookmark favorite companions

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔒 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key for authentication | Yes |
| `CLERK_SECRET_KEY` | Clerk secret key for server-side operations | Yes |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key | Yes |
| `NEXT_PUBLIC_VAPI_WEB_TOKEN` | Vapi.ai web token for voice integration | Yes |
| `SENTRY_DSN` | Sentry DSN for error monitoring | No |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](../../issues) page
2. Create a new issue with detailed information
3. Contact the development team

## 🔮 Roadmap

- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] Mobile app development
- [ ] Integration with learning management systems
- [ ] Advanced AI model customization
- [ ] Collaborative learning features

---

Built with ❤️ using Next.js, React, and TypeScript




