import React from "react";
import styled from "styled-components";

const wrapper = styled.div`
  display: block;
  flex: 1;
  backgroud: #ffff;
`;

function home(props) {
  return (
    <wrapper>
      <div>
        <h1> Welcome to my Page</h1>
      </div>
    </wrapper>
  );
}

export default home;
