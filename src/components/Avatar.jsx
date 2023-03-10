const Part = ({ path, index, zIndex }) => (
  <img
    src={`/assets/${path}/${index + 1}.png`}
    width={300}
    style={{ zIndex, position: 'absolute' }}
  />
)

const Avatar = ({ body, eyes, hair, hat, clothing1, clothing2, clothing3, mouth, eyebrow, glasses }) => {
  return (
    <div className='avatar'>
      <Part path='body' index={body} zIndex={0} />
      <Part path='eyes' index={eyes} zIndex={1} />
      <Part path='hair' index={hair} zIndex={5} />
      <Part path='accessories/hats' index={hat} zIndex={6} />
      <Part path='clothes/layer_1' index={clothing1} zIndex={2} />
      <Part path='clothes/layer_2' index={clothing2} zIndex={3} />
      <Part path='clothes/layer_3' index={clothing3} zIndex={4} />
      <Part path='mouths' index={mouth} zIndex={1} />
      <Part path='noses' index={0} zIndex={1} />
      <Part path='eyebrows' index={eyebrow} zIndex={3} />
      <Part path='accessories/glasses' index={glasses} zIndex={4} />
    </div>
  )
}
export default Avatar
