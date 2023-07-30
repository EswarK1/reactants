import {  List, Button,Space ,Table} from 'antd';
import React, { useState } from 'react';
import {BOY_NAMES,GIRL_NAMES} from '../src/constants'
import './App.css';

const ALPHABET = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

function App(props) {
  const {setFirstNameFilter} = props;

  const [name,SetName]=useState("");

  const [selected, setSelected] = useState(null);

  const handleClick = char => {
    if (char === selected) {
      char = null;
    }
    setSelected(char);
    //setFirstNameFilter(char);
  }

  const pickRandomName = names => {
    return names[Math.floor(Math.random() * names.length)]

}

const pickRandomLetter = mapping =>{
  const randomLetterIndex = Math.floor(Math.random() * Object.keys(mapping).length);
        return Object.keys(mapping)[randomLetterIndex];
}

const handleChange = () =>{
  console.log(pickRandomName(BOY_NAMES[pickRandomLetter(BOY_NAMES)]))
  SetName(pickRandomName(BOY_NAMES[pickRandomLetter(BOY_NAMES)])) 
  
}
console.log(name)
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  }]

  return (
    <section className="alphabetContainer">
      <Space>
        <Button onClick={handleChange}>Generate Random Name</Button>
      </Space>
      {/* <Table columns={columns} dataSource={name}/> */}
      <List
        grid={{column: 6}}
        dataSource={ALPHABET}
        bordered={true}
        renderItem={letter => (
          <List.Item
            key={letter}
          >
            <Button
              type={selected === letter ? 'primary' : 'default'}
              size="large"
              onClick={() => handleClick(letter)}
              >
                {letter}
            </Button>
            
          </List.Item>
        )}
      />
    </section>
    )

}

export default App;
