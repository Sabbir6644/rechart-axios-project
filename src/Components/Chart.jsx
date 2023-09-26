
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import  { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';



function Chart() {
     const studentMarks = [
          { id: 1, name: "Student 1", mathScore: 85, englishScore: 78, banglaScore: 22 },
          { id: 2, name: "Student 2", mathScore: 92, englishScore: 50, banglaScore: 91 },
          { id: 3, name: "Student 3", mathScore: 50, englishScore: 84, banglaScore: 76 },
          { id: 4, name: "Student 4", mathScore: 95, englishScore: 30, banglaScore: 93 },
          { id: 5, name: "Student 5", mathScore: 50, englishScore: 90, banglaScore: 60 },
        ];
     const studentsMarks = [
          { id: 1, name: "Student 1", mathScore: 85, englishScore: 78, banglaScore: 22 },
          { id: 2, name: "Student 2", mathScore: 92, englishScore: 50, banglaScore: 91 },
          { id: 3, name: "Student 3", mathScore: 50, englishScore: 84, banglaScore: 76 },
          { id: 4, name: "Student 4", mathScore: 95, englishScore: 30, banglaScore: 93 },
          { id: 5, name: "Student 5", mathScore: 50, englishScore: 90, banglaScore: 60 },
        ];
        
        
     return (
          <div>
              <LineChart width={600} height={300} data={studentMarks}>
              <XAxis dataKey="name"/>
              <YAxis></YAxis>
              <Tooltip></Tooltip>
              <Line type="monotone" dataKey="mathScore" stroke='red' />
              <Line type="monotone" dataKey="englishScore" stroke='green' />
              <Line type="monotone" dataKey="banglaScore" stroke='blue' />
              </LineChart>

              <PieChart width={400} height={400}>
               <Tooltip></Tooltip>
          <Pie data={studentMarks} dataKey="mathScore" cx="50%" cy="50%" outerRadius={60} fill="red" />
          <Pie data={studentsMarks} dataKey="englishScore" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="blue" label />
        </PieChart>
        
              
          </div>
     );
}

export default Chart;