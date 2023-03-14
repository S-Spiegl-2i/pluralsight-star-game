const PlayNumber = props => (
    <button 
    className='number' onClick={() => console.log('number', props.number)}>
      {props.number}
      </button>
  );

  export default PlayNumber;