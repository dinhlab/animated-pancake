const PartList = ({ total, path, set, selected, top = '50%' }) => {
  const parts = []
  for (let i = 0; i < total; i++) {
    const isSelected = selected === i
    parts.push(
      <div
        key={`${path}-${i}`}
        className={`square ${isSelected ? 'selected' : ''}`}
        onClick={() => set(i)}
      >
        <img
          src={`/assets/${path}/${i + 1}.png`}
          className='img-center'
          style={{ top }}
        />
      </div>
    )
  }
  return <div className='list'>{parts}</div>
}
export default PartList
