import './App.css';
import { useState, useEffect } from "react";
import Select from 'react-select';
import ProjectCard from './ProjectCard';
import { Navbar, Container, Tooltip, OverlayTrigger } from 'react-bootstrap'

function App() {

  const [allCards, setAllCards] = useState([]);
  const [projectData, setProjectData] = useState([]);
  const [tagsData, setTagsData] = useState([]);


  useEffect(() => {
    (async () => {
      let cardData;
      let uniqueTags = [];
      try {
        const response = await fetch("https://WaveScan-Frontend-Assessment.saurabhmudgal.repl.co");
        cardData = await response.json();
        const allTags = [];
        let temp = {};
        for (let i = 0; i < cardData.length; i++) {
          for (let j = 0; j < cardData[i].tags.length; j++) {
            if (allTags.includes(cardData[i].tags[j])) { }
            else {
              allTags.push(cardData[i].tags[j]);
              temp = { label: cardData[i].tags[j], value: cardData[i].tags[j] };
              uniqueTags.push(temp);
            }
          }
        }
        console.log(uniqueTags);
      } catch (error) {
        console.log(error);
        cardData = [];
      }
      setAllCards(cardData);
      setProjectData(cardData);
      setTagsData(uniqueTags);
    })();
  }, []);

  const searchBar = event => {
    const value = event.target.value.toLowerCase();
    const valueList = value.split(" ");
    if ((valueList.length >= 3) && (valueList[2] !== "")) {
      console.log("value:", value);
      const searchCards = allCards.filter(card => (`${card.title} || ${card.description}`.toLowerCase().includes(value)));
      setProjectData(searchCards)
    } else {
      const searchCards = allCards;
      setProjectData(searchCards)
    };
  }

  const filterChange = event => {
    const value = event;
    console.log(value);
    if (value.length === 0) {
      console.log("value:", value);
      const searchCards = allCards;
      setProjectData(searchCards)
    } else {
      const valueList = [];
      for (let i = 0; i < value.length; i++) {
        valueList.push(value[i].label);
      }
      const searchCards = allCards.filter(card => (`${card.tags}`.includes(valueList)));
      setProjectData(searchCards)
    };
  }


  return (
    <>
      <Navbar className="nav-bar">
        <Container>
          <Navbar.Brand className='nav-brand'>
            <img
              alt=""
              src="/pt-logo.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {' '}Project Tracker | WaveScan
          </Navbar.Brand>
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="button-tooltip-2">Please enter 3 or more words to search!</Tooltip>}>
            <input className="search-box" onInput={searchBar} placeholder="Search... (Enter atleast 3 words)" />
          </OverlayTrigger>
          <Select className="filter-box"
            placeholder="Filter by Categories"
            options={tagsData}
            isMulti
            onChange={opt => filterChange(opt)} />
        </Container>
      </Navbar>
      <div className='app'>
        <Container>
          <div className="app-body">
            <div className="cards-container">
              {projectData.map((item, index) => (
                <ProjectCard key={index} projectData={item} />
              ))}
            </div>
          </div >
        </Container>
      </div >

    </>
  );
}

export default App;
