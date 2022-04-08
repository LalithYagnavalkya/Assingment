import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Card = ({ posts }) => {
  const [first, setfirst] = useState(false);
  useEffect(() => {
    setfirst(!first);
  }, []);
  console.log(posts);

  if (!first) {
    return (
      <Wrapper>
        <div className="container">
          <h1> Name: First Name</h1>
          <h2>Email</h2>
        </div>
        <img src="https://reqres.in/img/faces/2-image.jpg" alt="" />
      </Wrapper>
    );
  }

  return (
    <div>
      {/* {posts ? ( */}
      <Wrapper>
        <div className="container">
          <h1>
            {posts?.data?.first_name}&nbsp;{posts?.data?.last_name}
          </h1>
          <h2>{posts?.data?.email}</h2>
        </div>
        <img src={posts?.data?.avatar} alt="" />
      </Wrapper>
      {/* ) : (
        <Wrapper>
          <div className="container">
            <h1> Name: First Name</h1>
            <h2>Email</h2>
          </div>
          <img src="https://reqres.in/img/faces/2-image.jpg" alt="" />
        </Wrapper>
      )} */}
    </div>
  );
};
const mapStateToProps = (state) => ({
  posts: state.posts.singePost,
});
export default connect(mapStateToProps)(Card);

const Wrapper = styled.div`
  background-color: white;
  margin-top: 1rem;
  display: flex;
  height: 20rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  .container {
    display: flex;
    flex-direction: column;
  }
  img {
    border-radius: 50%;
  }
`;
