import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const getReports = async (_, res) => {
    try {
        const response = await prisma.fastingdailyreport.findMany()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const getReportById = async (req, res) => {
    try {
        const response = await prisma.fastingdailyreport.findUnique({
            where: {
                id: Number(req.params.id),
            },
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

export const createReport = async (req, res) => {
    const { mealtype, comment, ingredient, calorie, sugargram, satfat, unfat, protein, carb, sodium, diettype } = req.body
    try {
        const fastingdailyreport = await prisma.fastingdailyreport.create({
            data: {
                mealtype: mealtype, comment: comment, ingredient: ingredient, calorie: calorie, sugargram: sugargram, satfat: satfat, unfat: unfat, protein: protein, carb: carb, sodium: sodium, diettype: diettype
            },
        })
        res.status(201).json(fastingdailyreport)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

export const updateReport = async (req, res) => {
    const { mealtype, comment, ingredient, calorie, sugargram, satfat, unfat, protein, carb, sodium, diettype } = req.body
    try {
        const fastingdailyreport = await prisma.fastingdailyreport.update({
            where: {
                id: Number(req.params.id),
            },
            data: {
                mealtype: mealtype, comment: comment, ingredient: ingredient, calorie: calorie, sugargram: sugargram, satfat: satfat, unfat: unfat, protein: protein, carb: carb, sodium: sodium, diettype: diettype
            },
        })
        res.status(200).json(fastingdailyreport)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

export const deleteReport = async (req, res) => {
    try {
        const fastingdailyreport = await prisma.fastingdailyreport.delete({
            where: {
                id: Number(req.params.id),
            },
        })
        res.status(200).json(fastingdailyreport)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
