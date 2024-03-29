import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css"; 
import Container from "react-bootstrap/Container"; 
import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col"; 
import Button from "react-bootstrap/Button"; 
import InputGroup from "react-bootstrap/InputGroup"; 
import FormControl from "react-bootstrap/FormControl"; 
import ListGroup from "react-bootstrap/ListGroup"; 

function Tasks() {
  const [userInput, setUserInput] = useState('');
  const [list, setList] = useState([]);

  const updateInput = (value) => {
    setUserInput(value);
  }

  const addItem = () => {
    if(userInput !== '') {
      const userTask = {
        id:Math.random(),
        value: userInput
      };

      const newlist = [...list];
      newlist.push(userTask);

      setList(newlist);
      setUserInput("");
    }
  }

  const deleteItem = (key) => {
    const newList = [...list];
    const upatedList = newList.filter((item) => item.id !== key);
    setList(upatedList);
  }

  const editItem = (index) => {
    const toDoes = [...list];
    const edetedToDo = prompt('Edit the todo:');
    if (edetedToDo !== null && edetedToDo.trim() !== ''){
      let updatedToDoes = [...toDoes];
      updatedToDoes[index].value = edetedToDo;
      setList(updatedToDoes);
    }
  }

  return ( 
    <Container> 
        <Row 
            style={{ 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center", 
                fontSize: "3rem", 
                fontWeight: "bolder", 
            }} 
        > 
            TODO LIST 
        </Row> 

        <hr /> 
        <Row> 
            <Col md={{ span: 5, offset: 4 }}> 
                <InputGroup className="mb-3"> 
                    <FormControl 
                        placeholder="add item . . . "
                        size="lg"
                        value={userInput} 
                        onChange={(event) => 
                          updateInput(event.target.value) 
                        } 
                        aria-label="add something"
                        aria-describedby="basic-addon2"
                    /> 
                    <InputGroup> 
                        <Button 
                            variant="dark"
                            className="mt-2"
                            onClick={() => addItem()} 
                        > 
                            ADD 
                        </Button> 
                    </InputGroup> 
                </InputGroup> 
            </Col> 
        </Row> 
        <Row> 
            <Col md={{ span: 5, offset: 4 }}> 
                <ListGroup> 
                    {/* map over and print items */} 
                    {list.map((item, index) => { 
                        return ( 
                          <div key = {index} >  
                            <ListGroup.Item 
                                variant="dark"
                                action 
                                style={{display:"flex", 
                                        justifyContent:'space-between'
                              }} 
                            > 
                                {item.value} 
                                <span> 
                                <Button style={{marginRight:"10px"}} 
                                variant = "light"
                                onClick={() => deleteItem(item.id)}> 
                                  Delete 
                                </Button> 
                                <Button variant = "light"
                                onClick={() => editItem(index)}> 
                                  Edit 
                                </Button> 
                                </span> 
                            </ListGroup.Item> 
                          </div> 
                        ); 
                    })} 
                </ListGroup> 
            </Col> 
        </Row> 
    </Container> 
); 
}

export default Tasks;