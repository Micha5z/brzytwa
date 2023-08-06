export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Nasze usługi</h2>
          <p>
          Oferujemy szeroki zakres usług, takich jak profesjonalne strzyżenie włosów i brody, szkolenia fryzjerskie prowadzone przez naszych ekspertów oraz ekscytujące eventy tematyczne, w tym niezapomniane spotkania z tatuatorami. Dołącz do nas i odkryj świat męskiej elegancji i perfekcyjnej stylizacji, dopasowanej do Twojego niepowtarzalnego stylu.
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4' >
                  {' '}
             
                   <img className="icons" src={d.img} alt='' />{' '}
           
                  {/* <i className={d.icon}></i> */}
              
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
