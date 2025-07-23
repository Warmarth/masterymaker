import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface ProgressCardProps {
  title: string;
  progress: number;
  level: string;
  xpEarned: number;
  totalXp: number;
}

const ProgressCard = ({ title, progress, level, xpEarned, totalXp }: ProgressCardProps) => {
  return (
    <Card className="bg-card/50 backdrop-blur-md border-border/50 hover:shadow-glow transition-all duration-300 group">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <Badge variant="secondary" className="bg-gradient-primary text-primary-foreground">
            {level}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="text-foreground font-medium">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-muted-foreground">XP Earned</span>
          <span className="text-success font-semibold">{xpEarned} / {totalXp}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressCard;