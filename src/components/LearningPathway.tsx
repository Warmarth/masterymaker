import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  PenTool, 
  MessageSquare, 
  Brain,
  Lock,
  CheckCircle,
  PlayCircle
} from "lucide-react";

interface QuestStep {
  id: string;
  title: string;
  description: string;
  type: "vocabulary" | "writing" | "reading" | "critical-thinking";
  status: "completed" | "current" | "locked";
  progress?: number;
  xpReward: number;
  tokensReward: number;
}

const questData: QuestStep[] = [
  {
    id: "1",
    title: "Foundation Vocabulary",
    description: "Master 50 essential academic words",
    type: "vocabulary",
    status: "completed",
    progress: 100,
    xpReward: 250,
    tokensReward: 50,
  },
  {
    id: "2", 
    title: "Argument Structure",
    description: "Learn to craft compelling arguments",
    type: "writing",
    status: "current",
    progress: 65,
    xpReward: 300,
    tokensReward: 75,
  },
  {
    id: "3",
    title: "Critical Reading",
    description: "Analyze complex texts and identify key ideas",
    type: "reading", 
    status: "current",
    progress: 30,
    xpReward: 200,
    tokensReward: 60,
  },
  {
    id: "4",
    title: "Advanced Reasoning",
    description: "Apply logical thinking to solve problems",
    type: "critical-thinking",
    status: "locked",
    xpReward: 400,
    tokensReward: 100,
  },
];

const LearningPathway = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case "vocabulary": return <BookOpen className="w-5 h-5" />;
      case "writing": return <PenTool className="w-5 h-5" />;
      case "reading": return <MessageSquare className="w-5 h-5" />;
      case "critical-thinking": return <Brain className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <CheckCircle className="w-5 h-5 text-success" />;
      case "current": return <PlayCircle className="w-5 h-5 text-info" />;
      case "locked": return <Lock className="w-5 h-5 text-muted-foreground" />;
      default: return <Lock className="w-5 h-5" />;
    }
  };

  const getCardStyle = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-success/20 border-success/50 shadow-elegant";
      case "current":
        return "bg-info/20 border-info/50 shadow-glow animate-pulse-glow";
      case "locked":
        return "bg-muted/20 border-muted/30 opacity-60";
      default:
        return "bg-card/50 border-border/50";
    }
  };

  return (
    <Card className="bg-card/50 backdrop-blur-md border-border/50">
      <CardHeader>
        <CardTitle className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Learning Pathway - Communication Mastery Quest
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {questData.map((quest, index) => (
            <div key={quest.id} className="relative">
              <Card className={`transition-all duration-300 hover:scale-[1.02] ${getCardStyle(quest.status)}`}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="flex flex-col items-center gap-1">
                        {getIcon(quest.type)}
                        {getStatusIcon(quest.status)}
                      </div>
                      
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{quest.title}</h3>
                          <Badge variant="secondary" className="text-xs">
                            Step {index + 1}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{quest.description}</p>
                        
                        {quest.progress !== undefined && (
                          <div className="space-y-1">
                            <div className="flex justify-between text-xs">
                              <span>Progress</span>
                              <span>{quest.progress}%</span>
                            </div>
                            <Progress value={quest.progress} className="h-2" />
                          </div>
                        )}
                        
                        <div className="flex items-center gap-4 text-xs">
                          <div className="flex items-center gap-1">
                            <span className="text-warning">⚡</span>
                            <span>{quest.xpReward} XP</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-success">🪙</span>
                            <span>{quest.tokensReward} Tokens</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      {quest.status === "current" && (
                        <Button size="sm" variant="hero">
                          Continue
                        </Button>
                      )}
                      {quest.status === "completed" && (
                        <Button size="sm" variant="success" disabled>
                          Completed
                        </Button>
                      )}
                      {quest.status === "locked" && (
                        <Button size="sm" variant="secondary" disabled>
                          Locked
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {index < questData.length - 1 && (
                <div className="flex justify-center py-2">
                  <div className="w-px h-6 bg-gradient-to-b from-primary/50 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LearningPathway;