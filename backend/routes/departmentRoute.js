import express from "express";
import Department from "../models/departmentModel.js"

const DepartmentRouter=express.Router();

DepartmentRouter.get('/', async (req, res) => {
  const departments = await Department.find({}, '_id name description');
  res.json(departments);
});

export default DepartmentRouter