import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import {Container, Row, Col} from 'react-bootstrap';
import {Navbar, InputGroup, Form, FormControl} from 'react-bootstrap';
import {Button, Table} from 'react-bootstrap'

import styles from './App.css';
import BackgroundImage from './img/image.jpeg'

// In-line styling for the background image
var backgroundStyle = {
  backgroundImage: `url(${BackgroundImage})`
}

// Items for the dropdown boxes
const textClasses = ['data type', 'data structure', 'command line', 'web dev', 'python 2', 
                    'libraries', 'error handling', 'classes', 'scope', 'environment',
                    'visualization', 'database', 'built-in', 'iterator', 'file I/O',
                    'operators', 'syntax', 'function', 'machine learning', 'all the above'];
const complexities = ['beginner', 'intermediate', 'advanced', 'expert', 'all the above'];
const directness = ['direct', 'reference', 'adding on', 'all the above'];

// Fetch search data from the backend
const fetchSearches = async () => {
  const response = await fetch("http://localhost:9999/search");
  const searches = await response.json();

  return (searches)
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedClass: textClasses[0],
      selectedComplexity: complexities[0],
      selectedDirectness: directness[0],
      questions: true,
      answers: true,
      showComplexity: false,
      showDirectness: false,
      searchBoxInput: "",
      search: false,
      data: [],
      featched: {'data': []},
    }
  }

  // Update state as the dropdown box is changed
  handleDropdownSelect = (e, stateName) => {
    this.setState({...this.state, [stateName]: e.currentTarget.value});
  }

  // Update state as the toggle switch is changed for different table rendering effects
  handleToggleButton = (e, stateName) => {
    this.setState({...this.state, [stateName]: e.target.checked});
  }

  // Store the search box input
  handleSearchBox = (e) => {
    this.setState({
      ...this.state, 
      searchBoxInput: e.target.value,
    });
  }

  // Fetch data from backend and render table when search button is clicked
  handleSubmit = (e) => {
    fetchSearches().then(searches => {this.setState({
      ...this.state,
      search: true,
      data: this.filterQuery(searches.data)
    })});
  }

  // Filter data fetched from backend
  filterQuery = (queryData) => {
    var filteredQuery = [];

    queryData.map((data) => { 
      return ((data.Classification.split(", ").includes(this.state.selectedClass) || 'all the above' === this.state.selectedClass) && 
        (data.Complexity.split(", ").includes(this.state.selectedComplexity) || 'all the above' === this.state.selectedComplexity) && 
        (data.Directness.split(", ").includes(this.state.selectedDirectness) || 'all the above' === this.state.selectedDirectness) &&
        this.checkKeyword(data)) ? 
        filteredQuery.push(data) : null
    });

    return (filteredQuery)
  }

  // Check if the typed in keyword is in the question-answer pair
  checkKeyword = (data) => {
    var keywordArr = this.state.searchBoxInput.split();
    var keywordFound = false;

    keywordArr.map((keyword) => {
      return ((data.Question.includes(keyword) || data.Answer.includes(keyword)) ?
      keywordFound = true : null)
    });

    return (keywordFound);
  }

  // After search button is clicked, render table
  renderTableItems = () => {
    return (this.state.data.map((data, index) => {
      return (
      <tr>
        <td>{index+1}</td>
        {this.state.questions ? <th>{data.Question}</th> : null}
        {this.state.answers ? <th>{data.Answer}</th> : null}
        {<th>{data.Classification}</th>}
        {this.state.showComplexity ? <th>{data.Complexity}</th> : null}
        {this.state.showDirectness ? <th>{data.Directness}</th> : null}
      </tr>)
    }));
  }

  render() {

    return (
      <MemoryRouter>
        <Container className="p-3">
          <header style={styles.header}>
            Stack Exchange Corpus
          </header>
          <Navbar bg="light">
            <Container>
              <Navbar.Brand>Searching question answer token pairs in the Stack Exchange Corpus</Navbar.Brand>
            </Container>
          </Navbar>
          <Container style={backgroundStyle}>
            <Form.Label htmlFor="basic-url" bsPrefix='search-box-title'>
              Search box (please break with white spaces)
            </Form.Label>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search for keywords"
                aria-label="Search for keywords"
                aria-describedby="basic-addon2"
                onChange={this.handleSearchBox}
              />
            </InputGroup>
            <Container>
              <Row>
                {/* Question-Answer Toggles */}
                <Col xs lg="2">
                  <Col>
                    <Form.Check 
                        type="switch"
                        id="custom-switch"
                        label="Questions"
                        defaultChecked={this.state.questions}
                        onChange={(e) => this.handleToggleButton(e, 'questions')}
                      />
                  </Col>
                  <Col>
                    <Form.Check 
                        type="switch"
                        id="custom-switch"
                        label="Answers"
                        defaultChecked={this.state.answers}
                        onChange={(e) => this.handleToggleButton(e, 'answers')}
                      />
                  </Col>
                  <Col>
                    <Form.Check 
                        type="switch"
                        id="custom-switch"
                        label="Complexity"
                        defaultChecked={this.state.showComplexity}
                        onChange={(e) => this.handleToggleButton(e, 'showComplexity')}
                      />
                  </Col>
                  <Col>
                    <Form.Check 
                        type="switch"
                        id="custom-switch"
                        label="Directness"
                        defaultChecked={this.state.showDirectness}
                        onChange={(e) => this.handleToggleButton(e, 'showDirectness')}
                      />
                  </Col>
                </Col>
                {/* Dropdown Bars */}
                <Col>
                  <Row>
                    <Col>
                      {/* Text Classification */}
                      <label htmlFor="selectTextClass">Text Classification</label>
                      <Form.Select
                        id="selectTextClass"
                        className="mt-2"
                        onChange={(e) => this.handleDropdownSelect(e, 'selectedClass')}
                      >
                        {textClasses.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </Form.Select>
                    </Col>
                    <Col>
                      {/* Complexity Classification */}
                      <label htmlFor="selectedComplexity">Complexity Classification</label>
                      <Form.Select
                        id="selectedComplexity"
                        className="mt-2"
                        onChange={(e) => this.handleDropdownSelect(e, 'selectedComplexity')}
                      >
                        {complexities.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </Form.Select>
                    </Col>
                    <Col>
                      {/* Directness Classification */}
                      <label htmlFor="selectedDirectness">Directness Classification</label>
                      <Form.Select
                        id="selectedDirectness"
                        className="mt-2"
                        onChange={(e) => this.handleDropdownSelect(e, 'selectedDirectness')}
                      >
                        {directness.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </Form.Select>
                    </Col>
                  </Row>
                </Col>
                {/* Search Button */}
                <Col xs lg="2">
                  <Button 
                  variant="primary" 
                  size="lg" 
                  onClick={this.handleSubmit}>
                    SEARCH
                  </Button>
                </Col>
              </Row>
            </Container>
          <br/>
          </Container>
            {/* Search Queries */}
            {this.state.search ? <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  {this.state.questions ? <th>Question</th> : null}
                  {this.state.answers ? <th>Answer</th> : null}
                  {<th>Classification Annotations</th>}
                  {this.state.showComplexity ? <th>Complexity Annotations</th> : null}
                  {this.state.showDirectness ? <th>Directness Annotations</th> : null}
                </tr> 
              </thead>
              <tbody>
                {this.renderTableItems()}
              </tbody>
            </Table> : null}
        </Container>
      </MemoryRouter>
    );
  }
}

export default App;
