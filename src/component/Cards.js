function Cards({Skill}){
    return(
        <div>
            <h1>{Skill.H}</h1>
            <p><li>{Skill.p}</li>
                <li>{Skill.k}</li>
                <li>{Skill.q}</li>
            </p>
            <img src={Skill.Js}/>
            


        
        </div>
    );
}
export default Cards;