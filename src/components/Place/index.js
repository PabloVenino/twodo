import { Card } from "../Card";
import "./Place.css";

export const Place = ({ secondaryColor, primaryColor, title, tasks }) => {
  return (
    tasks.length > 0 &&
    <section className="places" style={{
      backgroundColor: secondaryColor
    }}>
      <h3 style={{ borderColor: primaryColor }}>{title}</h3>
      <div className="tasks">
        {tasks.map(
          task => 
          <Card
            taskTitle={task.taskName}
            placeTitle={task.executeTask} 
            endDate={task.date}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
          />)}
      </div>
    </section>
  );
};