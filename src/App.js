import Acordion from "./components/Acordion";

const App = () => {

  const items = [ 
    {
      id: '1f',
      label : 'Can I use react on a project?',
      content: "You can use React on any project you want!"
    },
    {
      id: '2a',
      label : 'Can I use javaScript on a project?',
      content: "You can use javaScript on any project you want!"
    },
    {
      id: '4a',
      label : 'Can I use CSS on a project?',
      content: "You can use CSS on any project you want!"
    }
  ]

  return <Acordion items={items}/>
};

export default App;
