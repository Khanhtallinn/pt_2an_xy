import { useState } from "react";
function App(){
  let [a,seta] = useState();
  let [b,setb] = useState();
  let [c,setc] = useState();
  let [a1,seta1] = useState();
  let [b1,setb1] = useState();
  let [c1,setc1] = useState();
  //Conv data type
  let ac = Number(a)
  let bc = Number(b)
  let cc = Number(c)
  let a1c = Number(a1)
  let b1c = Number(b1)
  let c1c = Number(c1)
  let p1,p2,p3,p4,p1f,p2f, x,y
  if(!isNaN(ac) && !isNaN(bc) && !isNaN(cc) && !isNaN(a1c) && !isNaN(b1c) && !isNaN(c1c))
  {
    //Calculate
    //process 1
    ac = 0 - ac
    //process2
    p1 = a1c * bc
    p2 = b1c * cc
    p3 = b1c * ac
    p4 = c1c * bc
    //process3
    p1f = p1 + p3
    p2f = p4 - p2
    //get x,y
    x = p2f / p1f
    y = (c1c - (a1c*x)) / b1c

  }
  else
  {
    x=y=0
  }

  return(
    <>
      <center>
        <div className="b1">
          <input type="text" placeholder="a"
          value={a}
          onChange={(e) => seta(e.target.value)}
          />x + 
          <input type="text" placeholder="b"
          value={b}
          onChange={(e) => setb(e.target.value)}
          />y 
          = <input type="text" placeholder="c"
          value={c}
          onChange={(e) => setc(e.target.value)}
          />

        </div>
        <div className="b2">
          <input type="text" placeholder="a'"
          value={a1}
          onChange={(e) => seta1(e.target.value)}
          />x + 
          <input type="text" placeholder="b'"
          value={b1}
          onChange={(e) => setb1(e.target.value)}
          />y 
          = <input type="text" placeholder="c'"
          value={c1}
          onChange={(e) => setc1(e.target.value)}
          />
        </div>
        <div className="b3">
            <div className="b3_1">
              x = {x}
            </div>
            <div className="b3_2">
              y = {y}
            </div>
        </div>
      </center>
    </>
  )
}
export default App;