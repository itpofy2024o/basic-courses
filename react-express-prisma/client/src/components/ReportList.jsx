import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import useSWR from 'swr'

const ReportList = () => {
    const fetcher = async () => {
        const response = await axios.get('http://localhost:5000/reports')
        return response.data
    }

    const { data } = useSWR('reports', fetcher)
    if (!data) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <div>
                <Link to="/add">
                    <button type="button">
                        Add New Report
                    </button>
                </Link>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">
                                    #
                                </th>
                                <th scope="col">
                                    Meal
                                </th>
                                <th scope="col">
                                    Diet Type
                                </th>
                                <th scope="col">
                                    Ingredient
                                </th>
                                <th scope="col">
                                    Calorie
                                </th>
                                <th scope="col">
                                    Sugar in Gram
                                </th>
                                <th scope="col">
                                    Saturated Fat in Gram
                                </th>
                                <th scope="col">
                                    Unsaturated Fat in Gram
                                </th>
                                <th scope="col">
                                    Protein in Gram
                                </th>
                                <th scope="col">
                                    Carb in Gram
                                </th>
                                <th scope="col">
                                    Sodium in ML
                                </th>
                                <th scope="col">
                                    Comment
                                </th>
                                <th scope="col">
                                    Time
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length !== 0 ? (
                                data.map((report, index) => (
                                    <tr key={report.id}>
                                        <td>{index + 1}</td>
                                        <th scope="row">
                                            {report.mealtype}
                                        </th>
                                        <td>{report.diettype}</td>
                                        <td>{report.ingredient}</td>
                                        <td>{report.calorie}</td>
                                        <td>{report.sugargram}</td>
                                        <td>{report.satfat}</td>
                                        <td>{report.unfat}</td>
                                        <td>{report.protein}</td>
                                        <td>{report.carb}</td>
                                        <td>{report.sodium}</td>
                                        <td>{report.comment}</td>
                                        <td>{report.created_at}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4">
                                        No Data
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ReportList
