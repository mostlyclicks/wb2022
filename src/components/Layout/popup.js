import React from 'react'
import styled from 'styled-components'

const popup = (props) => {
  return (
    <Backdrop onClick={props.onHide}>
      <StyledPopup>
        <StyledPopupHeader><a href="#" onClick={props.onHide} style={{color:"black"}}>close X</a></StyledPopupHeader>
        <h1>Wieser Brothers COVID-19 Update</h1>
        <p>
          As we continue to monitor the Coronavirus (COVID-19) and its rippling
          impact on our country, we want to ensure our clients, employees,
          subcontractors and suppliers that our 25+ year commitment to the
          industry remains stronger than ever. We are not shutting down our
          jobsites if work can be safely performed according to the CDC
          guidelines.
        </p>

        <p>
          During this time of uncertainty, Wieser Brothers is commited to
          deliver the construction services you depend on with the{" "}
          <strong>
            highest level of safety and efficiency and with minimal disruption.
          </strong>{" "}
          We will communicate any additional adjustment to our business
          operations.
        </p>

        <p>
          Please know that, as always, the health and safety of our employees,
          subcontractors, suppliers and their families is our highest priority,
          and we will remain diligent in our efforts to help prevent the spread
          of this illness.
        </p>

        <p>
          Sincerely,
          <br />
          Jeff Wieser &amp; Brian Wieser
        </p>
      </StyledPopup>
    </Backdrop>
  );
}

export default popup

const Backdrop = styled.div`
  position:fixed;
  top:0;
  left:0;
  z-index:10001;
  height:100vh;
  width:100%;
  background-color:rgba(0,0,0,.4);
  display:flex;
  justify-content:center;
`

const StyledPopup = styled.div`
  color:#4d4d4d;
  width:80%;
  height:45rem;
  background-color:#ededed;
  border-radius:10px;
  padding:2rem;
  margin-top:100px;
  box-shadow:0px 10px 30px rgba(0,0,0,.4);
  p {
    line-height:1.55rem;
  }
  

  @media (min-width:768px) {
    width:600px;
    height:32rem;
  }
`

const StyledPopupHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 12px;
`;