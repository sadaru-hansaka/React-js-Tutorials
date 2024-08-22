import back1 from '../assets/back1.jpg';
const Images = () => {
    
    return(
        <div>
            <h1>Diaply images</h1>
      {/* use import method */}
      <img height = {200} src={back1} alt="Background 01"></img>

      <br/>
      {/* use require method */}
      <img height={200}
        src = {require("../assets/back2.png")}
        alt = "background 02">
      </img>

      <br/>
      {/* use url */}
      <img src = "https://www.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_30182536.htm#query=car&position=1&from_view=keyword&track=ais_hybrid&uuid=afa7a36c-5be5-4438-aa8c-f2ac9a3c707e"
      alt="url image"/>
        </div>
    );
};

export default Images;