// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Javascript Course
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Session 1 - 3rd April, 2018
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Session Target</Heading>
          <Heading size={5} textColor="secondary">Introduction to Javascript</Heading>
          <Heading size={5} textColor="secondary">Display Possibilities</Heading>
          <Heading size={5} textColor="secondary">Variables</Heading>
          <Heading size={5} textColor="secondary">Q&A</Heading>
          <Heading size={5} textColor="secondary">Assignment Questions</Heading>
        </Slide>

        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={3} textColor="primary" caps fit>Introduction to javascript</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps fit>JavaScript Can Change/Hide/Show HTML Content:</Heading>
          <List>
            <ListItem>document.getElementById("demo").innerHTML = "Hello JavaScript";</ListItem>
            <ListItem>document.getElementById("demo").style.display = "none";</ListItem>
            <ListItem>document.getElementById("demo").style.display = "block";</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps fit>JavaScript Can Change HTML Attributes:</Heading>
          <List>
            <ListItem>Changing the src (source) attribute of an {"<img>"} tag</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps fit>JavaScript Can Change HTML Styles (CSS):</Heading>
          <List>
            <ListItem>document.querySelector('body').style.fontSize = "50px";</ListItem>
            <ListItem>Can change any css properties</ListItem>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={3} textColor="primary" caps fit>Ways to Include JavaScript in your webpage</Heading>
          <List>
            <ListItem>Head or body?</ListItem>
            <ListItem>Internal/Embedded (using {'<script>'})</ListItem>
            <ListItem>External (.js extenstion)</ListItem>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={3} textColor="primary" caps fit>JavaScript Display Possibilities</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <List>
            <ListItem>innerHTML</ListItem>
            <ListItem>document.write();</ListItem>
            <ListItem>window.alert()</ListItem>
            <ListItem>console.log();</ListItem>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={3} textColor="primary" caps fit>Javascript Variables</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps fit>Containers for storing data values:</Heading>
          <List>
            <ListItem>var name = "dhawal";</ListItem>
            <ListItem>var x = 6;</ListItem>
            <ListItem>var x = 10, y = 6;</ListItem>
            <ListItem>var z = x + y;</ListItem>
            <ListItem>var person = "John Doe", carName = "Volvo", price = 200;</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps fit>JavaScript Identifiers:</Heading>
          <List>
            <ListItem>Names can contain letters, digits, underscores, and dollar signs.</ListItem>
            <ListItem>Names must begin with a letter</ListItem>
            <ListItem>Names are case sensitive (y and Y are different variables)</ListItem>
            <ListItem>Reserved words (like JavaScript keywords) cannot be used as names eg: class, new, var etc</ListItem>
            <ListItem>Use camel case</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps fit>Assignment Operator</Heading>
          <List>
            <ListItem> = </ListItem>
            <ListItem>RHS is assigned to LHS</ListItem>
            <ListItem>var x = 6;</ListItem>
            <ListItem>var z = x + y;</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps fit>JavaScript Data Types & Declaration</Heading>
          <List>
            <ListItem>string and number for now, many other</ListItem>
            <ListItem>var x = 30; //number </ListItem>
            <ListItem>var x = "dhawal mehta"; //string </ListItem>
            <ListItem>var x = "30"; //string</ListItem>
            <ListItem>var carName = "Volvo";var carName; doesnt lose value</ListItem>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={3} textColor="primary" caps fit>Q&A</Heading>
          <Text margin="10px 0 0" textColor="secondary" size={4} fit>
            Any Questions?
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={3} textColor="secondary" caps fit>Assignment</Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={4} fit>
            Check Email
          </Text>
          <Text margin="10px 0 0" textColor="secondary" size={3} fit bold>
            Last Date & Time of Submission: 5th April, Thursday by 3pm.
          </Text>
        </Slide>




        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary" caps fit>Thank you!</Heading>
          <Heading size={5} textColor="tertiary" >Dhawal Mehta</Heading>
        </Slide>
      </Deck>
    );
  }
}
