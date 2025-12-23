import express from "express";
import Department from "../models/departmentModel.js"

const DepartmentRouter=express.Router();

DepartmentRouter.get('/', async (req, res) => {
  const departments = await Department.find({}, '_id name description');
  res.json(departments);
});
DepartmentRouter.get('/:id', async (req, res) => {
  const  dept=await Department.findById(req.params.id)
  res.json(dept);
});

export default DepartmentRouter