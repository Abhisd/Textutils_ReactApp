import React, { useState } from "react";

export default function About(props){
    // let [myStyle,setMyStyle]=useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })

    // let [btnText,setBtnText]=useState("Change to Dark Mode");
    // let [myBtnStyle,setBtnStyle]=useState({
    //     color:'white',
    //     backgroundColor:'black'
    // })
    // let toggleMode=()=>{
    //     if(myStyle.color==='black'){
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black'
    //         });
    //         setBtnStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setBtnText("Change to Light Mode");
    //     }
    //     else{
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         });
    //         setBtnStyle({
    //             color:'white',
    //             backgroundColor:'black'
    //         })
    //         setBtnText("Change to Dark Mode");
    //     }
    // }
    return (
      <>
      <div className="container" style={{backgroundColor:props.mode==='dark'?'#262626':'white',color:props.mode==='dark'?'white':'black'}}>
        <h3 className="m-3">About Us</h3>
        <div className="container">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, iste? Ad, necessitatibus nam eius officia deserunt vel quae ratione molestiae accusantium in atque excepturi incidunt omnis porro illum quis nihil?
            Laboriosam ex iure commodi laudantium, obcaecati illo nesciunt cum maiores magnam assumenda quasi mollitia quae quod corrupti aperiam modi ut minus! Amet, culpa quo dignissimos fugiat iusto architecto alias mollitia?
            At soluta ipsa maiores assumenda, perferendis provident corrupti. Exercitationem, asperiores quis, reprehenderit consectetur fugiat nisi placeat sed aliquid deleniti quae accusantium, est porro quod iste quam ab earum libero iure.
            Esse eligendi obcaecati voluptatum ducimus eveniet hic porro dolores veniam nobis deleniti, magnam nulla doloremque velit ipsum magni, dignissimos quia nemo quidem illum voluptates itaque! Molestias accusamus nisi perferendis aut?
            Dolorem impedit facere nemo temporibus! Voluptate fuga quo eum nihil consectetur sapiente soluta accusantium quasi reiciendis iure, eligendi rerum culpa impedit nesciunt debitis asperiores sed distinctio. Possimus aut dolores similique.
            Quod, voluptates praesentium quos odit nulla aperiam nisi unde alias voluptate quasi fugit similique consequuntur, harum, libero quis pariatur quae nam earum impedit. Esse odit doloribus rem earum accusantium! Laborum?
            Facilis quae aspernatur distinctio similique error dolor. Fugiat provident ratione cupiditate itaque eum labore expedita cumque deleniti ducimus debitis, amet inventore hic! Dignissimos perferendis maiores consectetur consequuntur mollitia nemo sint.
            Fuga consequatur ad doloribus temporibus voluptatum ipsa illo sunt corrupti molestiae veniam suscipit expedita impedit quis dolore, voluptatibus dignissimos quam nobis nesciunt dicta nam voluptas soluta incidunt et iusto? Ullam.
            Quisquam eos nesciunt sed, modi voluptatum illum similique eaque qui ea veritatis. Consequuntur, sed atque quos, expedita quasi repellendus tempore culpa eveniet quidem, distinctio aperiam magnam fugit. Praesentium, omnis in.
            Sint expedita, mollitia labore nostrum molestiae est. Tenetur, debitis a temporibus consequatur magni ut, placeat ex soluta provident quod aliquam voluptas aut officiis voluptatum nemo voluptatibus, assumenda suscipit similique necessitatibus?</p>
        </div>
        </div>
      </>
    );
}