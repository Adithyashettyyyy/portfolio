import Cards from './Cards.js';
import "../css/Skills.css";
import Js from "../image/palang.jpg";
import fsd from "../image/wweb.jpg";
import cer from "../image/cer.jpg";
function Skills(){

    const skillP=[
        {
            id:1,
            H:"Programming Languages:",
            p:"C: Strong command with experince in algorithmic problem sloving.",
            k:"Java: proficient in Java development,including application development.",
            q:"Python: Skilled in Python Programming for various application and scripting.",
            i:Js

        },
        {
            id:2,
            H:"Full-Stack Development:",
            p:"Experinced in end-to-end web development,covering both front-end and back-end technologies.",
            k:"Familiar with HTML,CSS and JavaScript for the application.",
            q:"building responsive and interactive web application.",
            i:fsd


        },
        {
            id:3,
            H:"Certifications:",
            p:"Full Stack Development in Internshalla",
            k:"HTML,web development in coursera",
            q:"Introduction to c in coursera",
            i:cer
            
        }
    ]
    return(
        <>
        <div className="skills">
            <h2>MY SKILLS</h2>
           
            {
            skillP.map((item)=>(
                <Cards Skill={item}/>
            ))
        }
        </div>
        </>
    );
}
export default Skills;