import { useState, useEffect } from 'react'
import './App.css'
import Avatar from './components/Avatar'
import PartList from './components/PartList'
const totalParts = {
  body: 5,
  eyes: 5,
  hair: 10,
  mouth: 5,
  eyebrows: 5,
  glasses: 5,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9
}
const App = () => {
  const [state, setState] = useState({
    body: 0,
    eyes: 0,
    eyebrows: 0,
    hair: 0,
    mouth: 0,
    glasses: 0,
    clothing1: 0,
    clothing2: 0,
    clothing3: 0
  })
  const randomize = () => {
    const getRandomValue = (part) => {
      return Math.floor(Math.random() * totalParts[part])
    }
    setState({
      body: getRandomValue('body'),
      eyes: getRandomValue('eyes'),
      eyebrows: getRandomValue('eyebrows'),
      hair: getRandomValue('hair'),
      mouth: getRandomValue('mouth'),
      glasses: getRandomValue('glasses'),
      clothing1: getRandomValue('clothing1'),
      clothing2: getRandomValue('clothing2'),
      clothing3: getRandomValue('clothing3')
    })
  }
  useEffect(() => {
    randomize()
  }, [])
  return (
    <div className='grid'>
      <div className='col-4'>
        <div className='avatar-wrapper'>
          <Avatar
            body={state.body}
            eyes={state.eyes}
            hair={state.hair}
            clothing1={state.clothing1}
            clothing2={state.clothing2}
            clothing3={state.clothing3}
            mouth={state.mouth}
            eyebrow={state.eyebrows}
            glasses={state.glasses}
          />
        </div>
        <button className='button' onClick={() => randomize()}>
          Randomize!
        </button>
      </div>
      <div className='col-8'>
        <details className='list-section'>
          <summary>Hair</summary>
          <PartList total={totalParts.hair} path='hair' set={(value) => setState({ ...state, hair: value })} selected={state.hair} />
        </details>
        <details className='list-section'>
          <summary>Body</summary>
          <PartList total={totalParts.body} path='body' set={(value) => setState({ ...state, body: value })} selected={state.body} />
        </details>
        <details className='list-section'>
          <summary>Eyebrows</summary>
          <PartList total={totalParts.eyebrows} path='eyebrows' set={(value) => setState({ ...state, eyebrows: value })} selected={state.eyebrows} />
        </details>
        <details className='list-section'>
          <summary>Eyes</summary>
          <PartList total={totalParts.eyes} path='eyes' set={(value) => setState({ ...state, eyes: value })} selected={state.eyes} top='35px' />
        </details>
        <details className='list-section'>
          <summary>Mouth</summary>
          <PartList total={totalParts.mouth} path='mouth' set={(value) => setState({ ...state, mouth: value })} selected={state.mouth} />
        </details>
        <details className='list-section'>
          <summary>Glasses</summary>
          <PartList total={totalParts.glasses} path='accessories/glasses' set={(value) => setState({ ...state, glasses: value })} selected={state.glasses} />
        </details>
        <details className='list-section'>
          <summary>Clothing (L1)</summary>
          <PartList total={totalParts.clothing1} path='clothes/layer_1' set={(value) => setState({ ...state, clothing1: value })} selected={state.clothing1} />
        </details>
        <details className='list-section'>
          <summary>Clothing (L2)</summary>
          <PartList total={totalParts.clothing2} path='clothes/layer_2' set={(value) => setState({ ...state, clothing2: value })} selected={state.clothing2} />
        </details>
        <details className='list-section'>
          <summary>Clothing (L3)</summary>
          <PartList total={totalParts.clothing3} path='clothes/layer_3' set={(value) => setState({ ...state, clothing3: value })} selected={state.clothing3} />
        </details>
      </div>
    </div>
  )
}
export default App
