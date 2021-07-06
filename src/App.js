import styled, { createGlobalStyle } from "styled-components";
import './App.css';
/* 


/////////////////////////////////////
1  Globaler Style + Media Queries (CSS)
///////////////////////////////////// 
  > anstelle von import './App.css';
  > Styled Component für CSS IN CSS

/////////////////////
2  ONCLICK HANDLER
/////////////////////
  > onSubmit Daten Entgegenehmen

/////////////////////
3  VALIDATION
/////////////////////
> einfache validierung mit regex

/////////////////////
4  MODAL
/////////////////////
> Zeige erstelltest Modal 

*/





function App() {
  return (
    <div className="App">
       <GlobalStyle></GlobalStyle>
       <div className="form-wrapper">
   
      <Form className="signupform" onSubmit={handleSubmit}>
        <List className="formlist">
          <li>Platform : Meka </li>
          <li>Program: Form</li>
          <li>Task: Validation</li>
        </List>



        <label htmlFor="email">NAME</label>
        <Input
          id="email"
          name="email"
          type="email"
          onChange={console.log("test")}  
        />

        <label id="pass-label" htmlFor="password">
          VORNAME
        </label>
        <Input
          id="password"
          name="password"
          type="text"
          onChange={console.log("test")} 
        />

        <label id="conf-pass" htmlFor="confirmpassword">
          GEBURTSDATUM
        </label>

        <Input
          id="confirmpassword"
          name="confirmpassword"
          type="text"
          onChange={console.log("test")}
        />

        <Button type="submit">Senden</Button>
      </Form>
      <p id="mention">MEKA FORM</p>
    </div>
    </div>
  );
}

export default App;

/////////////////////////////////////
//  Globaler Style + Media Queries (CSS)
///////////////////////////////////// 

const GlobalStyle = createGlobalStyle`


.signupform{
  padding-top:2rem;
}

.App{


height:100vh;
display:grid;
justify-content: center;
align-content: center;
font-family: 'Play';
background: rgb(17,9,37);
background: radial-gradient(circle, rgba(17,9,37,1) 28%, rgba(42,8,16,1) 100%);
border-bottom: 4rem solid black;
border-top: 4rem solid black;

}
input { border: none; }


  
  #mention {
    color: #00ffff;
    text-align: center;
    margin-top: 1rem;
  }
`;

/////////////////////////////////////
//  STYLED COMPONENTS
///////////////////////////////////// 

const Form = styled.form`
  color: white;
  background-color: rgba(43, 11, 95, 68%);
  display: flex;
  flex-direction: column;
  width: 90vw;
  max-width: 400px;
  height: 70vh;
  max-height: 453px;
  justify-self: center;
  align-self: center;
  padding: 0 4rem;

  outline: 1px solid rgba(112, 112, 112, 100%);
  outline-offset: -7px;

  .formlist > *:not(:last-child) {

    margin-bottom: 0.5rem;
  }

  label {
    font-size: 1.5rem;
    margin-bottom: 0.4rem;
  }
  #pass-label {
    margin-top: 2.5rem;
  }

  #conf-pass {
    margin-top: 0.5rem;
  }
`;

const Input = styled.input`
  background-color: #01a8ae;
  padding: 0.5rem 0;
  color: black;
`;

const Button = styled.button`
  flex-grow: 0;

  background-color: #00f6ff;
  border: none;
  margin-top: 3rem;
  padding: 1rem 0;
  width: 50%;
  margin: 0 auto;
  margin-top: 4rem;
`;

const List = styled.ul`
  list-style: none;
  color: #00ffff;
  font-family: "Play";
  margin-top: 4rem;
  margin-left: 3rem;
  margin-bottom: 4rem;
`;



/////////////////////
//  ONSUBMIT HANDLER
/////////////////////
// https://stackoverflow.com/a/47678799/11678858 ( without state )
// https://stackoverflow.com/a/23428536/11678858 ( with state)

function handleSubmit(e) {
  alert('A name was submitted: ' + e.target[0].value +"\n" +  e.target[1].value +"\n" + e.target[2].value );
  e.preventDefault();
};




/////////////////////
//  VALIDATION
/////////////////////



/////////////////////
//  MODAL
/////////////////////