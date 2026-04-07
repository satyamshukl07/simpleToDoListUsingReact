import {useState} from "react";
export default function LudoBoard(){
    let [moves, setMoves] = useState({blue:0, red:0, yellow:0, green:0});
    let [arr, SetArr] = useState(["no moves"]);



    let updateBlue = () =>{
       // console.log(`moves.blue =${moves.blue}`);
        // setMoves((prevMoves)=>{
        //    return {...moves, blue: moves.blue + 1}
        // });

        //arr.push("blue moves");
        SetArr((prevArr)=>{
            return[...prevArr, "blue moves"]});
        console.log(arr);
    };

    let updateyellow = () =>{
      //  console.log(`moves.yellow =${moves.yellow}`);
        setMoves((prevMoves)=>{
           return {...moves, yellow: moves.yellow + 1}
        });
    }
    return(
        <div>
            <p>Game begins!</p>
            <p>{arr}</p>
            <div className="board">
                <p>blue moves ={moves.blue}</p>
                <button style ={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
                <p>yellow moves ={moves.yellow}</p>
                <button  style ={{backgroundColor:"yellow", color:"black"}}onClick={updateyellow}>+1</button>
                <p>green moves ={moves.green}</p>
                <button  style ={{backgroundColor:"green"}}>+1</button>
                <p>red moves ={moves.red}</p>
                <button  style ={{backgroundColor:"red"}}>+1</button>

            </div>
        </div>
    );
}