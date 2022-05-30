import "./App.css";
import Header from "./components/Header/Header";
import Stepper from "./components/Header/Stepper";
import Searchbar from "./components/Header/Searchbar";
import Section from "./components/Section/Section";
import { Route, Switch } from "react-router-dom";
import Stepper2 from "./components/Pages/Resume/Stepper2";
import Upload from "./components/Pages/Resume/Upload/Upload";
import Button from "./components/Pages/Resume/Button";
import Stepper3 from "./components/Profile/Stepper3";
import Upload2 from "./components/Profile/Upload2";
import Textfield1 from "./components/Profile/Textfield/Textfield";
import Textfield2 from "./components/Profile/Textfield/Textfield2";
import Textfield3 from "./components/Profile/Textfield/Textfield3";
import Dropdown1 from "./components/Profile/Dropdown/Dropdown";
import Dropdown2 from "./components/Profile/Dropdown/Dropdown2";
import Dropdown3 from "./components/Profile/Dropdown/Dropdown3";
import Dropdown4 from "./components/Profile/Dropdown/Dropdown4";
import Dropdown5 from "./components/Profile/Dropdown/Dropdown5";
import Button3 from "./components/Profile/Button3";
import Table from "./components/ApplicantList/Table";
import Header2 from  "./components/ApplicantList/Header2"

function App() {
  return (
    <Switch>
      <Route path="/applicantlist">
        <Header2 />
        <Table />
      </Route>
      <Route path="/profile">
        <Header />
        <Stepper3 />
        <Upload2 />
        <Textfield1 />
        <Textfield2 />
        <Dropdown1 />
        <Dropdown2 />
        <Dropdown3 />
        <Dropdown4 />
        <Dropdown5 />
       <Textfield3 />
       <Button3 />
      </Route>
      <Route path="/uploadResume">
        <Header />
        <Stepper2 />
        <Upload />
        <Button />
      </Route>
      <Route path="/">
        <Header />

        <Stepper />
        <Searchbar />
        <Section />
      </Route>
    </Switch>
  );
}

export default App;
