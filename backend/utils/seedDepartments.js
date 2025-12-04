import Department from "../models/departmentModel.js"
import asyncHandler from "express-async-handler"
const departments= [
  {name: 'Development', description: 'Software development and engineering team' },
  { name: 'UI/UX', description: 'User Interface and User Experience design team' },
  { name: 'Design', description: 'Graphic design and creative team' },
  { name: 'HR', description: 'Human Resources and team management' },
  { name: 'Communications', description: 'Marketing and communications team' },
  { name: 'Relv/Relex', description: 'Relations and external partnerships team' }
];
const createDepartments=asyncHandler(async()=>{

    console.log('Seeding departments...');
    
    const createdDepartments = [];
    for (const dept of departments) {
      const existing = await Department.findOne({ name: dept.name });
      if (!existing) {
        const newDept = Department.create(dept);
        createdDepartments.push(newDept);
        console.log(` Created department: ${dept.name}`);
      } 
    }

    console.log(`Seeding completed! Created/verified ${createdDepartments.length} departments`);
    return createdDepartments;

})

export default createDepartments