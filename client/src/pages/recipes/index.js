import React, { Component } from "react";
import API from "../../utils/Api";
import { Row, Col, Card, Button } from "react-materialize";
import TextInput from "../../component/textInput/textInput";
import DrinkCard from "../../component/drinkCard/drinkCard";
import DrinkButton from "../../component/button/button";

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      search: "",
      drinkName: [],
      drinkInfo: {},

      drinkRecipe: {},

      drinkIng: {},
      drinkMeasurment: {},
      show: false

    };
  }
searchNonAlcoholic = () => {
  API.getNonAlcohol().then((res) => {
    const data = res.data.drinks;

    this.setState({ ...this.state, result: data });
    const tempDrinkName = [];
    for (var i = 0; i < data.length; i++) {
      tempDrinkName.push({ name: data[i].strDrink, id: data[i].idDrink });
    }
    // return tempDrinkName;
    this.setState({ ...this.state, drinkName: tempDrinkName });
  })
  .catch((err) => console.log(err));
  
}
  searchRandom = () =>  {
    API.getRandom().then((res) => {
      var ing = [];
      
      console.log(res.data.drinks[0]);
      for (let i = 1; i < 16; i++){
        if (res.data.drinks[0]['strIngredient' + [i]] === null && res.data.drinks[0]['strMeasure' + [i]] === null) {
        }else if (res.data.drinks[0]['strMeasure' + [i]] === null){
          ing.push(res.data.drinks[0]['strIngredient' + [i]]);
        }
        
        else {
          ing.push(res.data.drinks[0]['strMeasure' + [i]]  + " " + res.data.drinks[0]['strIngredient' + [i]]);
          

        }
      }
      console.log(ing);

      this.setState({ ...this.state, drinkInfo: res.data.drinks[0], drinkIng: ing });
      
    })
    .catch((err) => console.log(err));
  };           
  searchIngredients = (query) => {
    API.getIngs(query)
      .then((res) => {
        const data = res.data.drinks;

        this.setState({ ...this.state, result: data });
        const tempDrinkName = [];
        for (var i = 0; i < data.length; i++) {
          tempDrinkName.push({
            name: data[i].strDrink,
            id: data[i].idDrink,
          });
        }
        // return tempDrinkName;
        this.setState({
          ...this.state,
          drinkName: tempDrinkName,
        });
      })
      .catch((err) => console.log(err));
  };
  specificDrink = (query) => {
    API.getId(query)
      .then((res) => {
        var ing = [];
        
        console.log(res.data.drinks[0]);
        this.setState({
          ...this.state,
          drinkInfo: res.data.drinks[0],
        });
      })
      .catch((err) => console.log(err));
  };

          }
          
          else {
            ing.push(res.data.drinks[0]['strMeasure' + [i]] +  " " + res.data.drinks[0]['strIngredient' + [i]]);
            

          }
        }
        console.log(ing);

        this.setState({ ...this.state, drinkInfo: res.data.drinks[0], drinkIng: ing });
        
      })
      .catch((err) => console.log(err));
  };
  
  handleInputChange = (event) => {
    const value = event.target.value;

    this.setState({
      ...this.state,
      search: value,
    });
  };
  handleButtonClick = (event) => {
    event.preventDefault();
    this.setState({...this.state, show:true})
    console.log(this.state);
    this.searchIngredients(event.target.id);
    // console.log(this.children);
  };
  handleRandomButtonClick = (event) => {
    event.preventDefault();
    console.log(event.target);
    this.searchRandom();
  }
  handleNonAlcoholicButton = (event) => {
    event.preventDefault();
    this.setState({...this.state, show:true})
    this.searchNonAlcoholic();
  }
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.setState({...this.state, show:true})
    this.searchIngredients(this.state.search);
  };

  render() {
    return (
      <div>
        <main className="container main-content">
                <Row>
                  <Col className="push-s4 push-m4 push-l4">
                  <h5 className="light-blue-text text-darken-1">
                Select a Spirit!
              </h5>
                  </Col>
                
                </Row>
              


              <Row>
                <Col s={3} m={3} l={3}>
=======
              <div className="row drink-wrapper">
                <div  className="col s4 m4 l4">
                <DrinkButton
                    onClick={this.handleButtonClick}
                    type="success"
                    className="input-lg"
                  >
                    Vodka
                  </DrinkButton>                              
                </Col>
                <Col s={3} m={3} l={3}>
                <DrinkButton
                </div>

                <div  className="col s4 m4 l4">
                  <DrinkButton
>>>>>>> 9ac9fa45f934c538d1086430746905465507deb3
                    onClick={this.handleButtonClick}
                    type="success"
                    className="input-lg"
                  >
                    Rum
                  </DrinkButton>
<<<<<<< HEAD
                </Col>
                <Col s={3} m={3} l={3}>                
                <DrinkButton
=======
                </div>

<<<<<<< HEAD
                <div
                  id="tequilaInput"
                  className="col s4 m4 l4"
                >
                  <TequillaButton />
                </div>
              </div>
              <div className="row">
                <div
                  id="whiskeyInput"
                  className="col s4 m4"
                >
                  <WhiskeyButton />
=======
                <div  className="col s4 m4 l4">
                  <DrinkButton
>>>>>>> 9ac9fa45f934c538d1086430746905465507deb3
                    onClick={this.handleButtonClick}
                    type="success"
                    className="input-lg"
                  >
                    Whiskey
                  </DrinkButton></Col>
                <Col s={3} m={3} l={3}>
                <DrinkButton
                    onClick={this.handleButtonClick}
                    type="success"
                    className="input-lg"
                  >
                    Gin
                  </DrinkButton>
<<<<<<< HEAD
                </Col>
=======
>>>>>>> 6e4c7c9b877d987364be5bc4d1b02df3a97d5c24
                </div>
>>>>>>> 9ac9fa45f934c538d1086430746905465507deb3

              </Row>
              <Row>
                <Col s={3} m={3} l={3}>
                <DrinkButton
                    onClick={(event) => this.handleButtonClick(event)}
                    type="success"
                    className="input-lg"
                  >
                    Tequila
                  </DrinkButton>
<<<<<<< HEAD
                </Col>
                <Col s={3} m={3} l={3}>
                <DrinkButton
=======
                </div>

<<<<<<< HEAD
                <div
                  id="Non_AlcoholicInput"
                  className="col s4 m4 l4"
                >
                  <NonalcoholicButton />
=======
                <div  className="col s4 m4 l4">
                  <DrinkButton
>>>>>>> 9ac9fa45f934c538d1086430746905465507deb3
                    onClick={this.handleRandomButtonClick}
                    type="success"
                    className="input-lg"
                  >
                    Random
                  </DrinkButton>
<<<<<<< HEAD
                </Col>
                <Col s={3} m={3} l={3}>
                <DrinkButton
                    onClick={this.handleButtonClick}
                    type="success"
                    className="input-lg"
                  >
                    Bourbon
                  </DrinkButton>
                </Col>
                <Col s={3} m={3} l={3}>
                <DrinkButton
                    onClick={this.handleNonAlcoholicButton}
                    type="success"
                    className="input-lg"
                  >
                    Non-Alcoholic
                  </DrinkButton>
                </Col>
              </Row>

              <Row>
                <Col>
                </Col>
              </Row>
              <Row>
                <Col>
                </Col>
              </Row>
              <Row>
                <Col>
                </Col>
              </Row>
              
           

          
            <Row>
              <Col 
              className="push-s3 push-m3 push-l3"
              s={6} m={6} l={6}>
              
                <TextInput 
                className="valign-wrapper"
                  
                  
                  value={this.state.search}
                  handleInputChange={this.handleInputChange}
                  handleFormSubmit={(event) => this.handleFormSubmit(event)}
                />
                
              
              <Button
              className="btn light-blue darken-1 btn:hover pulse drink-wrapper-buttons valign-wrapper"
              onClick={(event) => this.handleFormSubmit(event)}
              >
                Search
                </Button>
              </Col>
            </Row>

            
            <Row>
            <Col m={6} s={6} l={6}>  
                  
                  {this.state.show ? (
                  <Card m={6} s={6} l={6}>
                  {this.state.drinkName.map((drink) => {
                  return (
                    <Button
                      flat
                      node="button"
                        waves="light"
                        key={drink.id}
                      onClick={() => this.setState(this.specificDrink(drink.id))}
                    >
                      {drink.name}  
                    </Button>                                
                  )
                  })}
                  </Card>
                  ) : (
                  ""
                  )}
              </Col>
              <Col m={6} s={6} l={6}>
              {this.state.drinkInfo.strDrink ? (
              <DrinkCard s={6} m={6} l={6}

            {this.state.drinkInfo.strDrink ? (
              <DrinkCard

                recipe={
                  this.state.drinkInfo.strInstructions
                }

                directions={this.state.drinkInfo.strInstructions}
                ing={this.state.drinkIng}

                image={this.state.drinkInfo.strDrinkThumb}
                title={this.state.drinkInfo.strDrink}
              />
            ) : (
              ""
            )}

              </Col>
                        
            </Row>            
                  
        </main>
      </div>
    );
  }
}

          </div>
          <Card s={12}>
            {this.state.drinkName.map((drink) => {
              return (

                <button
                  onClick={() =>
                    this.setState(
                      this.specificDrink(drink.id)
                    )
                  }
                  // value={drink.id}

                <Button
                  flat
                  node="button"
                   waves="light"
                   key={drink.id}
                  onClick={() => this.setState(this.specificDrink(drink.id))}

                >
                  {drink.name}

  
                </Button>
                                
                              )
                            })}
                          </Card>
                        </main>
                      </div>
                    );
                  }
                }

export default Recipes;
