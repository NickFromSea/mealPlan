const MyList = ({mealPlans,addMeal,deleteDay, selectedDay, setSelectedDay})=>{
    return (
     <div>
      <div className="header">
       <h1>Weekly Meal Plan Ideas</h1>
       <button className="button-add" onClick={addMeal}>
        Add
       </button>
      </div>
      <div className="myList">
       {mealPlans.map(({ id, title, mealForADay }) => (
        <div
         className={`meal ${id === selectedDay ? "selected" : "default"}`}
         onClick={() => setSelectedDay(id)}
        >
         <p className="field">{title}</p>
         <p className="field">{mealForADay.substring(0, 60)}</p>
         <div className="btn_add_myList">
            <button className="button-delete" onClick={() => deleteDay(id)}>
                Delete
            </button>
            <p className="notice"> Click to add</p>
         </div>
        </div>
       ))}
      </div>
     </div>
    );
}

export default MyList;