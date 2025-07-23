import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coins, TrendingUp, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const TokenBalance = () => {
  return (
    <Card className="bg-gradient-secondary text-white border-0 shadow-glow">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Coins className="w-6 h-6" />
          Practice Tokens
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <div className="text-3xl font-bold">1,247</div>
          <div className="text-sm opacity-90">Total Earned</div>
        </div>
        
        <div className="flex justify-between items-center bg-white/10 rounded-lg p-3">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm">Today's Earnings</span>
          </div>
          <span className="font-semibold text-success">+45</span>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-sm">Redeem Tokens:</h4>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="glass" size="sm" className="text-xs">
              <Gift className="w-3 h-3 mr-1" />
              Premium Content
            </Button>
            <Button variant="glass" size="sm" className="text-xs">
              <Coins className="w-3 h-3 mr-1" />
              Custom Avatar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TokenBalance;