import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  LogOut, 
  Droplets, 
  Wind, 
  Thermometer, 
  AlertTriangle, 
  CheckCircle2, 
  Clock,
  MapPin,
  Activity,
  Bell,
  RefreshCw
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface WashroomData {
  id: string;
  name: string;
  location: string;
  status: "clean" | "warning" | "critical";
  lastCleaned: string;
  sensors: {
    nh3: number;
    h2s: number;
    tvoc: number;
    humidity: number;
    temperature: number;
  };
  alerts: number;
}

const MOCK_WASHROOMS: WashroomData[] = [
  {
    id: "WR-001",
    name: "Ground Floor - Block A",
    location: "Near Main Entrance",
    status: "clean",
    lastCleaned: "10 mins ago",
    sensors: {
      nh3: 12,
      h2s: 5,
      tvoc: 180,
      humidity: 55,
      temperature: 26
    },
    alerts: 0
  },
  {
    id: "WR-002",
    name: "First Floor - Block B",
    location: "Near Cafeteria",
    status: "warning",
    lastCleaned: "45 mins ago",
    sensors: {
      nh3: 35,
      h2s: 18,
      tvoc: 420,
      humidity: 72,
      temperature: 28
    },
    alerts: 2
  },
  {
    id: "WR-003",
    name: "Second Floor - Block A",
    location: "Near Conference Room",
    status: "critical",
    lastCleaned: "2 hours ago",
    sensors: {
      nh3: 58,
      h2s: 32,
      tvoc: 680,
      humidity: 85,
      temperature: 30
    },
    alerts: 5
  },
  {
    id: "WR-004",
    name: "Ground Floor - Block C",
    location: "Near Parking",
    status: "clean",
    lastCleaned: "25 mins ago",
    sensors: {
      nh3: 8,
      h2s: 3,
      tvoc: 120,
      humidity: 48,
      temperature: 25
    },
    alerts: 0
  }
];

const getStatusColor = (status: WashroomData["status"]) => {
  switch (status) {
    case "clean": return "bg-green-500";
    case "warning": return "bg-yellow-500";
    case "critical": return "bg-red-500";
  }
};

const getStatusBadge = (status: WashroomData["status"]) => {
  switch (status) {
    case "clean": return <Badge className="bg-green-500/10 text-green-600 border-green-500/20">Clean</Badge>;
    case "warning": return <Badge className="bg-yellow-500/10 text-yellow-600 border-yellow-500/20">Warning</Badge>;
    case "critical": return <Badge className="bg-red-500/10 text-red-600 border-red-500/20">Critical</Badge>;
  }
};

const getSensorLevel = (value: number, thresholds: { warning: number; critical: number }) => {
  if (value >= thresholds.critical) return "critical";
  if (value >= thresholds.warning) return "warning";
  return "normal";
};

const getSensorColor = (level: string) => {
  switch (level) {
    case "critical": return "text-red-500";
    case "warning": return "text-yellow-500";
    default: return "text-green-500";
  }
};

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [washrooms, setWashrooms] = useState(MOCK_WASHROOMS);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("demo_authenticated");
    if (!isAuthenticated) {
      navigate("/demo-login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("demo_authenticated");
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate("/demo-login");
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Simulate data refresh with slight variations
    setWashrooms(prev => prev.map(w => ({
      ...w,
      sensors: {
        ...w.sensors,
        nh3: Math.max(0, w.sensors.nh3 + Math.floor(Math.random() * 10) - 5),
        h2s: Math.max(0, w.sensors.h2s + Math.floor(Math.random() * 6) - 3),
        tvoc: Math.max(0, w.sensors.tvoc + Math.floor(Math.random() * 50) - 25),
      }
    })));
    setIsRefreshing(false);
    toast({
      title: "Data Refreshed",
      description: "Sensor readings have been updated.",
    });
  };

  const totalAlerts = washrooms.reduce((sum, w) => sum + w.alerts, 0);
  const cleanCount = washrooms.filter(w => w.status === "clean").length;
  const warningCount = washrooms.filter(w => w.status === "warning").length;
  const criticalCount = washrooms.filter(w => w.status === "critical").length;

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-background border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Activity className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">SwachhSense</h1>
              <p className="text-sm text-muted-foreground">Manager Dashboard</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={handleRefresh} disabled={isRefreshing}>
              <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`} />
              Refresh
            </Button>
            <Button variant="outline" size="sm" className="relative">
              <Bell className="w-4 h-4" />
              {totalAlerts > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {totalAlerts}
                </span>
              )}
            </Button>
            <Button variant="destructive" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Activity className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Washrooms</p>
                  <p className="text-2xl font-bold">{washrooms.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Clean</p>
                  <p className="text-2xl font-bold text-green-600">{cleanCount}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Warning</p>
                  <p className="text-2xl font-bold text-yellow-600">{warningCount}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Critical</p>
                  <p className="text-2xl font-bold text-red-600">{criticalCount}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Washroom Cards */}
        <h2 className="text-xl font-semibold mb-4">Washroom Status</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {washrooms.map((washroom) => (
            <Card key={washroom.id} className="overflow-hidden">
              <div className={`h-1 ${getStatusColor(washroom.status)}`} />
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{washroom.name}</CardTitle>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                      <MapPin className="w-3 h-3" />
                      {washroom.location}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {getStatusBadge(washroom.status)}
                    <span className="text-xs text-muted-foreground">ID: {washroom.id}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Sensor Readings */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="flex items-center gap-1">
                          <Wind className="w-3 h-3" /> NH₃
                        </span>
                        <span className={getSensorColor(getSensorLevel(washroom.sensors.nh3, { warning: 25, critical: 50 }))}>
                          {washroom.sensors.nh3} ppm
                        </span>
                      </div>
                      <Progress 
                        value={Math.min((washroom.sensors.nh3 / 75) * 100, 100)} 
                        className="h-2"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="flex items-center gap-1">
                          <Wind className="w-3 h-3" /> H₂S
                        </span>
                        <span className={getSensorColor(getSensorLevel(washroom.sensors.h2s, { warning: 10, critical: 25 }))}>
                          {washroom.sensors.h2s} ppm
                        </span>
                      </div>
                      <Progress 
                        value={Math.min((washroom.sensors.h2s / 50) * 100, 100)} 
                        className="h-2"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="flex items-center gap-1">
                          <Wind className="w-3 h-3" /> TVOCs
                        </span>
                        <span className={getSensorColor(getSensorLevel(washroom.sensors.tvoc, { warning: 300, critical: 500 }))}>
                          {washroom.sensors.tvoc} ppb
                        </span>
                      </div>
                      <Progress 
                        value={Math.min((washroom.sensors.tvoc / 1000) * 100, 100)} 
                        className="h-2"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <span className="flex items-center gap-2 text-sm">
                        <Droplets className="w-4 h-4 text-blue-500" />
                        Humidity
                      </span>
                      <span className="font-medium">{washroom.sensors.humidity}%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <span className="flex items-center gap-2 text-sm">
                        <Thermometer className="w-4 h-4 text-orange-500" />
                        Temp
                      </span>
                      <span className="font-medium">{washroom.sensors.temperature}°C</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <span className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-primary" />
                        Last Cleaned
                      </span>
                      <span className="font-medium text-sm">{washroom.lastCleaned}</span>
                    </div>
                  </div>
                </div>

                {/* Alert count */}
                {washroom.alerts > 0 && (
                  <div className="flex items-center gap-2 p-3 bg-red-500/10 rounded-lg text-red-600">
                    <Bell className="w-4 h-4" />
                    <span className="text-sm font-medium">{washroom.alerts} active alert{washroom.alerts > 1 ? "s" : ""}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
