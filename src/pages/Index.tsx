import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProgressCard from "@/components/ProgressCard";
import BadgeShowcase from "@/components/BadgeShowcase";
import TokenBalance from "@/components/TokenBalance";
import LearningPathway from "@/components/LearningPathway";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSelector } from "@/components/LanguageSelector";
import heroImage from "@/assets/hero-image.jpg";
import { 
  BookOpen, 
  Users, 
  Shield, 
  Zap,
  Brain,
  Award,
  Coins,
  Globe
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/50 backdrop-blur-md bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                MasteryMaker
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost">Features</Button>
              <Button variant="ghost">About</Button>
              <LanguageSelector />
              <ThemeToggle />
              <Button variant="hero">Join Beta</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-gradient-primary text-primary-foreground">
                  Web3 Education on ICP
                </Badge>
                <h1 className="text-5xl font-bold leading-tight">
                  Learn, Earn, and Own Your
                  <span className="bg-gradient-primary bg-clip-text text-transparent"> Education Journey</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Revolutionary Web3 platform that bridges engaging digital entertainment 
                  with foundational learning practice. Earn NFT badges, practice tokens, 
                  and build lifelong skills through gamified quests.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" className="text-lg px-8">
                  Start Learning
                </Button>
                <Button variant="glass" size="lg" className="text-lg px-8">
                  View Demo
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">10K+</div>
                  <div className="text-sm text-muted-foreground">Active Learners</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-warning">500+</div>
                  <div className="text-sm text-muted-foreground">NFT Badges</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-info">1M+</div>
                  <div className="text-sm text-muted-foreground">Tokens Earned</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <img 
                src={heroImage} 
                alt="Web3 Education Platform" 
                className="relative rounded-3xl shadow-2xl w-full h-auto animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Your Personal Learning
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Dashboard</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Track progress, showcase achievements, and manage your Web3 education portfolio
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <LearningPathway />
            </div>
            <div className="space-y-6">
              <TokenBalance />
              <ProgressCard 
                title="Writing Mastery"
                progress={75}
                level="Intermediate"
                xpEarned={1250}
                totalXp={2000}
              />
            </div>
          </div>

          <BadgeShowcase />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Revolutionizing Education with
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Web3</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Combining blockchain technology with proven educational methods
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Smart Learning Paths",
                description: "AI-powered personalized quests via smart contracts"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "NFT Achievements",
                description: "Earn verifiable digital badges for skill mastery"
              },
              {
                icon: <Coins className="w-8 h-8" />,
                title: "Practice Tokens",
                description: "Get rewarded for consistent effort and engagement"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Decentralized Portfolio",
                description: "Own your learning record on the blockchain"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Community Learning",
                description: "Peer feedback and collaborative growth"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Earn-to-Learn",
                description: "Unlock premium content with earned tokens"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Built on ICP",
                description: "Powered by Internet Computer Protocol"
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Critical Skills",
                description: "Focus on vocabulary and structured writing"
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-md border-border/50 hover:shadow-glow transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students already earning while learning on the most 
            innovative education platform built on Web3.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8">
              Join Beta Program
            </Button>
            <Button variant="glass" size="lg" className="text-lg px-8 text-white border-white/20">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
               <span className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
                MasteryMaker
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              Built on Internet Computer Protocol • Powered by Web3 • © 2024 LearnDAO
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;