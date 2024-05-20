import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AddReport = () => {
    const [mealtype, setMealType] = useState('')
    const [comment, setComment] = useState('')
    const [ingredient, setIngredient] = useState('')
    const [diettype, setDietType] = useState('')
    const [calorie, setCalorie] = useState(0.0);
    const [sugar, setSugar] = useState(0.0);
    const [saturated, setSaturated] = useState(0.0);
    const [unsaturated, setUnsaturated] = useState(0.0);
    const [protein, setProtein] = useState(0.0);
    const [carb, setCarb] = useState(0.0);
    const [sodium, setSodium] = useState(0.0);
    const navigate = useNavigate()

    const saveReport = async e => {
        e.preventDefault()
        await axios.post('http://localhost:5000/reports', { 
            mealtype:mealtype,
            comment:comment,
            ingredient:ingredient,
            diettype:diettype,
            calorie:calorie,
            sugargram:sugar,
            satfat:saturated,
            unfat:unsaturated,
            protein:protein,
            carb:carb,
            sodium:sodium 
        })
        navigate('/')
    }

    return (
        <div>
            <form onSubmit={saveReport}>
                <div>
                    <label htmlFor="mealtype">
                        Meal
                    </label>
                    <input
                        type="text"
                        id="mealtype"
                        value={mealtype}
                        onChange={e => setMealType(e.target.value)}
                        placeholder="What did you eat?"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="ingredient">
                        Ingredients
                    </label>
                    <input
                        type="text"
                        id="ingredient"
                        value={ingredient}
                        onChange={e => setIngredient(e.target.value)}
                        placeholder="What ingredients were used?"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="diettype">
                        Diet Type
                    </label>
                    <input
                        type="text"
                        id="diettype"
                        value={diettype}
                        onChange={e => setDietType(e.target.value)}
                        placeholder="What diet type was that?"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="comment">
                        Comment
                    </label>
                    <input
                        type="text"
                        id="comment"
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        placeholder="Anything you want to say about this meal?"
                    />
                </div>
                <div>
                    <label htmlFor="calorie">
                        Estimated Calorie
                    </label>
                    <input
                        type="number" step="0.01"
                        id="calorie"
                        value={calorie}
                        onChange={e => setCalorie(e.target.value)}
                        placeholder="How much calorie was there?"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="sugar">
                        Estimated Sugar in Gram
                    </label>
                    <input
                        type="number" step="0.01"
                        id="sugar"
                        value={sugar}
                        onChange={e => setSugar(e.target.value)}
                        placeholder="How much sugar was there?"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="saturated">
                        Estimated Saturated Fat in Gram
                    </label>
                    <input
                        type="number" step="0.01"
                        id="saturated"
                        value={saturated}
                        onChange={e => setSaturated(e.target.value)}
                        placeholder="How much saturated fat was there?"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="unsaturated">
                        Estimated Unsaturated Fat in Gram
                    </label>
                    <input
                        type="number" step="0.01"
                        id="unsaturated"
                        value={unsaturated}
                        onChange={e => setUnsaturated(e.target.value)}
                        placeholder="How much unsaturated fat was there?"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="protein">
                        Estimated Protein in Gram
                    </label>
                    <input
                        type="number" step="0.01"
                        id="protein"
                        value={protein}
                        onChange={e => setProtein(e.target.value)}
                        placeholder="How much protein was there?"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="carb">
                        Estimated Carb in Gram
                    </label>
                    <input
                        type="number" step="0.01"
                        id="carb"
                        value={carb}
                        onChange={e => setCarb(e.target.value)}
                        placeholder="How much carb was there?"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="sodium">
                        Estimated Sodium in ML
                    </label>
                    <input
                        type="number" step="0.01"
                        id="sodium"
                        value={sodium}
                        onChange={e => setSodium(e.target.value)}
                        placeholder="How much sodium was there?"
                        required
                    />
                </div>
                <button type="submit">
                    Add
                </button>
                <Link to="/">
                    <button type="button">
                        Cancel
                    </button>
                </Link>
            </form>
        </div>
    )
}

export default AddReport
