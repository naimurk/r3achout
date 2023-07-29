import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell,BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DashboardS2 = () => {
  const dataTwo = [
    { name: 'Urgent Job', value: 5 },
    { name: 'Opened Job', value: 15 },
    { name: 'Closed Job', value: 10 },
  ];
  const COLORS = ['#FF8042', '#00C49F', '#8884d8'];
  const colorIndications = [
    'Urgent Job (5)',
    'Opened Job (15)',
    'Closed Job (10)',
  ];

  const data = [
    {
      "jobTitle": "Frontend Developer",
      "total": 15
    },
    {
      "jobTitle": "UI/UX Designer",
      "total": 8
    },
    {
      "jobTitle": "Backend Developer",
      "total": 10
    },
    {
      "jobTitle": "Data Scientist",
      "total": 5
    },
    {
      "jobTitle": "Product Manager",
      "total": 12
    },
    {
      "jobTitle": "DevOps Engineer",
      "total": 7
    },
    {
      "jobTitle": "Full Stack Developer",
      "total": 9
    },
    {
      "jobTitle": "Marketing Specialist",
      "total": 6
    },
    {
      "jobTitle": "Sales Manager",
      "total": 11
    },
    {
      "jobTitle": "Data Engineer",
      "total": 8
    },
    {
      "jobTitle": "HR Coordinator",
      "total": 4
    },
    {
      "jobTitle": "Network Administrator",
      "total": 7
    },
    {
      "jobTitle": "Content Writer",
      "total": 6
    },
    {
      "jobTitle": "Graphic Designer",
      "total": 10
    },
    {
      "jobTitle": "Quality Assurance Analyst",
      "total": 5
    },
    {
      "jobTitle": "Business Analyst",
      "total": 9
    },
    {
      "jobTitle": "Project Manager",
      "total": 11
    },
    {
      "jobTitle": "Software Engineer",
      "total": 7
    },
    {
      "jobTitle": "Technical Support Specialist",
      "total": 6
    },
    {
      "jobTitle": "UX Researcher",
      "total": 12
    }
  ];
  
  
  

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 items-center justify-center'>
      
      {/* tiny bar chart */}
      <div>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={dataTwo}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
              const RADIAN = Math.PI / 180;
              const radius = 25 + innerRadius + (outerRadius - innerRadius);
              const x = cx + radius * Math.cos(-midAngle * RADIAN);
              const y = cy + radius * Math.sin(-midAngle * RADIAN);

              return (
                <text
                  x={x}
                  y={y}
                  fill={COLORS[index % COLORS.length]}
                  textAnchor={x > cx ? 'start' : 'end'}
                  dominantBaseline="central"
                >
                  {`${colorIndications[index]} ${(percent * 100).toFixed(0)}%`}
                </text>
              );
            }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
      {/* pie chart */}
     
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="jobTitle" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
      </div>



    </div>
  );
};

export default DashboardS2;
