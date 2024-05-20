import express from 'express'
import { getReports, getReportById, createReport, updateReport, deleteReport } from '../controller/ReportController.js'

const router = express.Router()

router.get('/reports', getReports)
router.get('/reports/:id', getReportById)
router.post('/reports', createReport)
router.patch('/reports/:id', updateReport)
router.delete('/reports/:id', deleteReport)

export default router
