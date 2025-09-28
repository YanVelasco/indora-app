import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from "recharts";

const userGrowthData = Array.from({ length: 12 }, (_, i) => {
  const t = i + 1;

  const L = 1000, k = 0.5, t0 = 6;
  const users = Math.round(L / (1 + Math.exp(-k * (t - t0))));
  return { month: `M${t}`, users };
});

const engagementData = Array.from({ length: 12 }, (_, i) => {
  const t = i + 1;
  const y0 = 100, k = 0.15;
  const engagement = Math.round(y0 * Math.exp(-k * t));
  return { month: `M${t}`, engagement };
});

const retentionData = Array.from({ length: 12 }, (_, i) => {
  const t = i + 1;
  const retention = Math.round(80 - 10 * Math.sin(t / 2) + 5 * Math.cos(t / 3));
  return { month: `M${t}`, retention };
});

export default function TrendAnalysis() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Análise de Tendências</h1>
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-2">Crescimento de Usuários (Função Logística)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={userGrowthData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={3} dot={{ r: 6 }} activeDot={{ r: 10 }} animationDuration={1500} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-2">Engajamento dos Usuários (Decaimento Exponencial)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={engagementData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorEng" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="engagement" stroke="#82ca9d" fillOpacity={1} fill="url(#colorEng)" animationDuration={1500} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Retenção de Usuários (Curva de Tendência)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={retentionData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="retention" stroke="#ff7300" strokeWidth={3} dot={{ r: 6 }} activeDot={{ r: 10 }} animationDuration={1500} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

