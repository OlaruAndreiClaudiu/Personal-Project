import React from "react"

const Annocument = () => {
  const mystyle = {
    width: "30%",
    height: "30%",
  }
  const mystyle1 = {
    width: "30%",
    height: "30%",
  }
  return (
    <>
      <section className='annocument background'>
        <div className='container d_flex'>
          <div className='img' style={mystyle}>
            <img src="./assets/img/fitness.png" width='30%' height='30%' />
          </div>
          <div className='img' style={mystyle1}>
            <img src="./assets/img/constructions.png" width='30%' height='30%' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Annocument