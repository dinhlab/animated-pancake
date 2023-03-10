import { useState, useEffect } from 'react'
import './App.css'
import Avatar from './components/Avatar'
import PartList from './components/PartList'
const totalParts = {
  body: 17,
  eyes: 17,
  hair: 73,
  hat: 28,
  mouth: 24,
  eyebrows: 15,
  glasses: 17,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9
}
const App = () => {
  // Defining state variables to keep track of the current selection for each part of the avatar
  const [body, setBody] = useState(0)
  const [eyes, setEyes] = useState(0)
  const [eyebrows, setEyebrow] = useState(0)
  const [hair, setHair] = useState(0)
  const [hat, setHat] = useState(0)
  const [clothing1, setClothing1] = useState(0)
  const [clothing2, setClothing2] = useState(0)
  const [clothing3, setClothing3] = useState(0)
  const [mouth, setMouth] = useState(0)
  const [glasses, setGlasses] = useState(0)
  // Defining the randomize function which will select a random value for each part
  const randomize = () => {
    const getRandomValue = (part) => {
      return Math.floor(Math.random() * totalParts[part])
    }
    setBody(getRandomValue('body'))
    setEyes(getRandomValue('eyes'))
    setEyebrow(getRandomValue('eyebrows'))
    setHair(getRandomValue('hair'))
    setHat(getRandomValue('hat'))
    setMouth(getRandomValue('mouth'))
    setGlasses(getRandomValue('glasses'))
    setClothing1(getRandomValue('clothing1'))
    setClothing2(getRandomValue('clothing2'))
    setClothing3(getRandomValue('clothing3'))
  }
  // Using the useEffect hook to automatically randomize the avatar on page load
  useEffect(() => {
    randomize()
  }, [])
  return (
    <div className='grid'>
      <div className='col-4'>
        <div className='avatar-wrapper'>
          <Avatar
            body={body}
            eyes={eyes}
            hair={hair}
            hat={hat}
            clothing1={clothing1}
            clothing2={clothing2}
            clothing3={clothing3}
            mouth={mouth}
            eyebrow={eyebrows}
            glasses={glasses}
          />
        </div>
        <button className='button' onClick={() => randomize()}>
          Randomize!
        </button>
      </div>
      <div className='col-8'>
        <details className='list-section'>
          <summary>Hat</summary>
          <PartList total={totalParts.hat} path='accessories/hats' set={setHat} selected={hat} />
        </details>
        <details className='list-section'>
          <summary>Hair</summary>
          <PartList total={totalParts.hair} path='hair' set={setHair} selected={hair} />
        </details>
        <details className='list-section'>
          <summary>Body</summary>
          <PartList total={totalParts.body} path='body' set={setBody} selected={body} />
        </details>
        <details className='list-section'>
          <summary>Eyebrows</summary>
          <PartList total={totalParts.eyebrows} path='eyebrows' set={setEyebrow} selected={eyebrows} />
        </details>
        <details className='list-section'>
          <summary>Eyes</summary>
          <PartList total={totalParts.eyes} path='eyes' set={setEyes} selected={eyes} top='35px' />
        </details>
        <details className='list-section'>
          <summary>Mouth</summary>
          <PartList total={totalParts.mouth} path='mouths' set={setMouth} selected={mouth} />
        </details>
        <details className='list-section'>
          <summary>Glasses</summary>
          <PartList total={totalParts.glasses} path='accessories/glasses' set={setGlasses} selected={glasses} />
        </details>
        <details className='list-section'>
          <summary>Clothing (L1)</summary>
          <PartList total={totalParts.clothing1} path='clothes/layer_1' set={setClothing1} selected={clothing1} />
        </details>
        <details className='list-section'>
          <summary>Clothing (L2)</summary>
          <PartList total={totalParts.clothing2} path='clothes/layer_2' set={setClothing2} selected={clothing2} />
        </details>
        <details className='list-section'>
          <summary>Clothing (L3)</summary>
          <PartList total={totalParts.clothing3} path='clothes/layer_3' set={setClothing3} selected={clothing3} />
        </details>
      </div>
    </div>
  )
}
export default App
