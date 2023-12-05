import express from 'express';
import { AcademicDepartmentControllers } from './academicDepertment.controller';


const router = express.Router();
router.get('/', AcademicDepartmentControllers.getAllAcademicDepartments);
router.post(
  '/create-academic-department',
  // validateRequest(
  //   AcademicDepartmentValidation.createAcademicDepartmentValidationSchema,
  // ),
  AcademicDepartmentControllers.createAcademicDepartmemt,
);

router.get(
  '/:departmentId',
  AcademicDepartmentControllers.getSingleAcademicDepartment,
);

router.patch(
  '/:departmentId',
//   validateRequest(
//     AcademicDepartmentValidation.updateAcademicDepartmentValidationSchema,
//   ),
  AcademicDepartmentControllers.updateAcademicDeartment,
);



export const AcademicDepartmentRoutes = router;
