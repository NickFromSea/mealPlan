
import { useEffect, useState } from 'react';
import './App.css';
import MyList from './MyList';
import MyMealsAndIngridients from './MyMealsAndIngridients';
import { v4 as uuid } from "uuid";

function App() {

  const [mealPlans, setmealPlan] = useState(
    localStorage.mealPlans? JSON.parse(localStorage.mealPlans):[]);
  const [selectedDay, setSelectedDay] = useState(false);

  useEffect(()=>{
    localStorage.setItem("mealPlans", JSON.stringify(mealPlans))
  },[mealPlans])

  const addMeal =()=>{
    const newMeal ={
      title: "",
      id: uuid(),
      mealForADay:"",
      ingredients:""
    }
    setmealPlan([newMeal, ...mealPlans])

  }

  const deleteDay =(mealId)=>{
    setmealPlan(mealPlans.filter(({id})=>id !==mealId))
  }

  const updateDay = (myUpdatedMeal)=>{
    const updatedMeals = mealPlans.map((mealPlan)=>{
      if (mealPlan.id === myUpdatedMeal.id){
        return myUpdatedMeal;
      }
      return mealPlan
    })
    setmealPlan(updatedMeals)
  }

  const getActiveMeal =()=>{
    return mealPlans.find(({id})=>id===selectedDay)
  }

  return (
   <div className="App">
    <MyList
     mealPlans={mealPlans}
     addMeal={addMeal}
     deleteDay={deleteDay}
     selectedDay={selectedDay}
     setSelectedDay={setSelectedDay}
    />
    <MyMealsAndIngridients selectedDay={getActiveMeal()} updateDay={updateDay} />
   </div>
  );
}

export default App;
