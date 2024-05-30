function Hello() {

  let FullName = () => {
    return 'Shakib md ibrahim'
  }
  let age = 24;

  return (
    <h2>
      This is hello, my name is {FullName()}
      my age is {age}
    </h2>
  );
}

export default Hello;