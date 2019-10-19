import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1 className={style.title}>{title}</h1>
      <ul>
        <span className={style.ingredient}> Ingredients: </span>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p className={style.calories}>
        <stron>Calories: </stron>
        {calories}
      </p>
      <img className={style.image} src={image} alt="" />
    </div>
  );
};

export default Recipe;
