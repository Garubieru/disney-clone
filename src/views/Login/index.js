import React from "react";

import { Container, Content, CTALogo, SignUp, Description } from "./styles";

const Login = () => (
  <Container>
    <Content>
      <CTALogo src="/images/cta-logo-one.svg" alt="cta" />
      <SignUp href="/signup">GET ALL THERE</SignUp>
      <Description>
        Get Premier Access to Raya and Last Dragon for an additional fee with
        Disney+ subscription. As of 03/26/2021, the price of Disney+ and The
        Disney Bundle will increase by $1.
      </Description>
      <CTALogo src="/images/cta-logo-two.png" alt="cta-2" />
    </Content>
  </Container>
);

export default Login;
