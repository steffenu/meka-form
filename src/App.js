import styled, { createGlobalStyle } from "styled-components";
import './App.css';
/* 

Als Aufgabe ist für Sie folgendes geplant. 
 - Erstellen Sie ein grafisch ansprechendes und responsives Webformular (in React) mit Personendaten (Name, Vorname, Geburtsdatum,…). Es soll außerdem die Möglichkeit bestehen, ein Bild hochzuladen.

 

Auf dem Webformular soll ein Button „senden“ enthalten sein. Sobald dieser „geklickt“ wird, sollen die Daten validiert (z.B. Geburtsdatum darf nicht in der Zukunft liegen, Namen dürfen keine Zahlen enthalten,…) und ggf ein Hinweis (zum Beispiel als roter PopOver) mit der entsprechenden Fehlermeldung erscheinen. Anschließend sollen die Daten inkl. Bild in einer Klasse gespeichert und in einem Dialog als Labels und Bild angezeigt werden.


/////////////////////////////////////
1  Globaler Style (CSS)
///////////////////////////////////// 
  > anstelle von import './App.css';
  > Styled Component für CSS IN CSS

/////////////////////
2  ONCLICK HANDLER
/////////////////////
  > onSubmit Daten Entgegenehmen
  > <Form className="signupform" onSubmit={handleSubmit}>

/////////////////////
3  VALIDATION
/////////////////////
> validierung mit regex



*/





function App() {
  return (
    <div className="App">
       <GlobalStyle></GlobalStyle>
       <div className="form-wrapper">
   
      <Form className="signupform" onSubmit={handleSubmit}>

        <label htmlFor="name">NAME</label>
        <Input
          id="name"
          name="name"
          type="name"
           
        />

        <label id="pass-label" >
          VORNAME
        </label>
        <Input
          id="vorname"
          name="vorname"
          type="text"
          
        />

        <label id="conf-pass">
          GEBURTSDATUM
        </label>

        <Input
          id="geburt"
          name="geburt"
          type="date"
        />

        <label id="add-file">
          DATEI ANHANG
        </label>

        <Input
          id="datei"
          name="datei"
          type="file"
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
  padding-top:4rem !important;
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
  let myForm = new FormData(e.target[0].value, e.target[1].value , e.target[2].value, e.target[3].value);



  e.preventDefault();

 
  validation(myForm);

  alert( myForm.name +"\n" +   myForm.vorname +"\n" +  myForm.geburtsdatum + "\n" +  myForm.dateipfad );
};

/////////////////////
//  KLASSE
/////////////////////
// https://www.w3schools.com/js/js_classes.asp

class FormData {
  constructor(name, vorname , geburtsdatum , dateipfad) {
    this.name = name;
    this.vorname = vorname;
    this.geburtsdatum = geburtsdatum;
    this.dateipfad = dateipfad;
  }
}



/////////////////////
//  VALIDATION
/////////////////////
// 1. Keine Zahl im Namen - regex search digit
// 2. Kein Datum in der Zukunft - geburtsdatum > 
// 3. DateiTyp PNG / JPG



// myForm = // name, vorname , geburtsdatum , dateipfad
function validation(myForm) {
  // DATUM HEUTE für vergleich mit Form Jahr (simplified for demo)
  var today = new Date();
  var yyyy = today.getFullYear();
  console.log('yyyy:', yyyy)
  

  const re_digit = /\d/g;  // search digit
  const re_filetype = /.png|.jpg/g;  // search .png or jpg

  console.log(myForm.name.match(re_digit))
  if (myForm.name.match(re_digit)) {
      alert("ERROR - ZAHL IM NAMEN" );
  }

  if (myForm.vorname.match(re_digit)) {
    alert("ERROR - ZAHL IM VORNAMEN" );
  }


let jahr = myForm.geburtsdatum.split("-");
//console.log('jahr:', jahr[0])

  if (jahr[0] > yyyy ) {
    alert("ERROR - GEBURTSDATUM in der Zukunft" );
  }

  if (!myForm.dateipfad.match(re_filetype)) {
    alert("ERROR - Dateityp .jpg oder .png benötigt" );
  }





}



