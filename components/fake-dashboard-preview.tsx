'use client'

import { BarChart3, Bell, Settings, TrendingUp, Users, Zap } from 'lucide-react'

export function FakeDashboardPreview() {
  return (
    <div className="group perspective">
      <style>{`
        @keyframes tilt {
          0%, 100% {
            transform: perspective(1000px) rotateX(0deg) rotateY(0deg);
          }
          25% {
            transform: perspective(1000px) rotateX(2deg) rotateY(3deg);
          }
          50% {
            transform: perspective(1000px) rotateX(-1deg) rotateY(-2deg);
          }
          75% {
            transform: perspective(1000px) rotateX(1deg) rotateY(2deg);
          }
        }
        
        .dashboard-preview {
          animation: tilt 8s ease-in-out infinite;
          transform-style: preserve-3d;
          transition: all 0.3s ease-out;
        }
        
        .dashboard-preview:hover {
          animation: none;
          transform: perspective(1200px) rotateX(-4deg) rotateY(4deg) scale(1.02);
          box-shadow: 0 20px 40px rgba(53, 85, 219, 0.15);
        }
      `}</style>
      
      <div className="dashboard-preview relative rounded-xl border border-border bg-gradient-to-br from-background to-muted/30 p-4 shadow-xl overflow-hidden">
        {/* Gradient overlay background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        
        <div className="relative">
          {/* Top bar */}
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-border/50">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <Zap className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground">Atlas Dashboard</p>
                <p className="text-xs text-muted-foreground">Production</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-1.5 hover:bg-muted rounded-lg transition-colors">
                <Bell className="h-4 w-4 text-muted-foreground" />
              </button>
              <button className="p-1.5 hover:bg-muted rounded-lg transition-colors">
                <Settings className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>
          </div>

          <div className="flex gap-4">
            {/* Sidebar */}
            <div className="w-32 space-y-1">
              <div className="h-2 w-24 bg-primary/30 rounded-full" />
              <div className="h-2 w-20 bg-muted rounded-full" />
              <div className="h-2 w-16 bg-muted rounded-full mt-4" />
              <div className="h-2 w-20 bg-muted rounded-full" />
              <div className="h-2 w-24 bg-muted rounded-full" />
            </div>

            {/* Main content */}
            <div className="flex-1 space-y-4">
              {/* KPI Cards */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: 'Revenue', value: '$45.2K', icon: TrendingUp, color: 'from-primary/20 to-primary/5' },
                  { label: 'Users', value: '2,847', icon: Users, color: 'from-accent/20 to-accent/5' },
                  { label: 'Requests', value: '982K', icon: BarChart3, color: 'from-blue-500/20 to-blue-500/5' }
                ].map((card) => {
                  const Icon = card.icon
                  return (
                    <div key={card.label} className={`bg-gradient-to-br ${card.color} p-2 rounded-lg border border-border/50`}>
                      <div className="flex items-center gap-1.5">
                        <Icon className="h-3.5 w-3.5 text-muted-foreground" />
                        <div>
                          <p className="text-xs text-muted-foreground">{card.label}</p>
                          <p className="text-sm font-bold text-foreground">{card.value}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Chart placeholder */}
              <div className="bg-muted/30 rounded-lg p-3 border border-border/50">
                <div className="flex items-end justify-between h-16 gap-1">
                  {[60, 45, 75, 55, 80, 40, 90].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-primary/60 to-primary/30 rounded-sm opacity-70"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2">Weekly performance</p>
              </div>

              {/* Table */}
              <div className="space-y-1">
                <div className="grid grid-cols-4 gap-2 pb-2 border-b border-border/50">
                  <p className="text-xs font-semibold text-muted-foreground">Service</p>
                  <p className="text-xs font-semibold text-muted-foreground">Status</p>
                  <p className="text-xs font-semibold text-muted-foreground">Uptime</p>
                  <p className="text-xs font-semibold text-muted-foreground">Response</p>
                </div>
                {[
                  { service: 'API', status: 'Healthy', uptime: '99.99%', response: '145ms' },
                  { service: 'Database', status: 'Healthy', uptime: '99.95%', response: '32ms' },
                  { service: 'Cache', status: 'Optimal', uptime: '100%', response: '8ms' }
                ].map((row) => (
                  <div key={row.service} className="grid grid-cols-4 gap-2 py-1.5 px-2 hover:bg-muted/30 rounded transition-colors">
                    <p className="text-xs font-medium text-foreground">{row.service}</p>
                    <p className="text-xs text-green-600">● {row.status}</p>
                    <p className="text-xs text-muted-foreground">{row.uptime}</p>
                    <p className="text-xs text-muted-foreground">{row.response}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
