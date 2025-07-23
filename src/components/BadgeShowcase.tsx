import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Star, Trophy, Zap } from "lucide-react";

interface NFTBadge {
  id: string;
  name: string;
  description: string;
  rarity: "common" | "rare" | "epic" | "legendary";
  icon: "award" | "star" | "trophy" | "zap";
  earned: boolean;
}

const badgeData: NFTBadge[] = [
  {
    id: "1",
    name: "Vocabulary Master",
    description: "Complete 100 vocabulary challenges",
    rarity: "rare",
    icon: "award",
    earned: true,
  },
  {
    id: "2", 
    name: "Writing Champion",
    description: "Submit 50 structured arguments",
    rarity: "epic",
    icon: "trophy",
    earned: true,
  },
  {
    id: "3",
    name: "Consistency Star",
    description: "Practice for 30 consecutive days",
    rarity: "legendary",
    icon: "star",
    earned: false,
  },
  {
    id: "4",
    name: "Speed Reader",
    description: "Complete reading challenges in record time",
    rarity: "common",
    icon: "zap",
    earned: true,
  },
];

const BadgeShowcase = () => {
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "award": return <Award className="w-8 h-8" />;
      case "star": return <Star className="w-8 h-8" />;
      case "trophy": return <Trophy className="w-8 h-8" />;
      case "zap": return <Zap className="w-8 h-8" />;
      default: return <Award className="w-8 h-8" />;
    }
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common": return "bg-muted";
      case "rare": return "bg-info";
      case "epic": return "bg-warning";
      case "legendary": return "bg-gradient-primary";
      default: return "bg-muted";
    }
  };

  return (
    <Card className="bg-card/50 backdrop-blur-md border-border/50">
      <CardHeader>
        <CardTitle className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Achievement Badges (NFTs)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badgeData.map((badge) => (
            <div
              key={badge.id}
              className={`relative p-4 rounded-lg border transition-all duration-300 hover:scale-105 ${
                badge.earned
                  ? "bg-card border-border/50 shadow-elegant"
                  : "bg-muted/20 border-muted/30 opacity-60"
              }`}
            >
              <div className="flex flex-col items-center space-y-2">
                <div
                  className={`p-3 rounded-full ${getRarityColor(badge.rarity)} ${
                    badge.earned ? "animate-pulse-glow" : ""
                  }`}
                >
                  {getIcon(badge.icon)}
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-sm">{badge.name}</h3>
                  <p className="text-xs text-muted-foreground">{badge.description}</p>
                  <Badge
                    variant="secondary"
                    className={`mt-2 text-xs ${getRarityColor(badge.rarity)} text-white`}
                  >
                    {badge.rarity}
                  </Badge>
                </div>
              </div>
              {badge.earned && (
                <div className="absolute -top-2 -right-2">
                  <div className="w-4 h-4 bg-success rounded-full flex items-center justify-center">
                    <span className="text-xs text-success-foreground">✓</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BadgeShowcase;