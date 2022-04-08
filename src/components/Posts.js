import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { getPosts, getSinglePost } from "../actions/posts";
import { connect } from "react-redux";
import styled from "styled-components";

const Posts = ({ getPosts, getSinglePost, posts }) => {
  useEffect(() => {
    getPosts();
  }, [posts.loading]);

  return (
    <div>
      <Wrapper>
        {posts?.data?.data?.map((post) => (
          <button className="btn" onClick={() => getSinglePost(post.id)}>
            {/* {console.log(post)} */}
            <p>
              {post.id} &nbsp;&nbsp; {post.title}
            </p>
          </button>
        ))}
      </Wrapper>
    </div>
  );
};

// Posts.propTypes = {
//   getPosts: PropTypes.func.isRequired,
// };

const mapStateToProps = (state) => ({
  posts: state.posts,
});

export default connect(mapStateToProps, { getPosts, getSinglePost })(Posts);

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 5rem;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #d3e0b8;
    border-radius: 35%;
    border: 1px solid green;
    height: 30px;
    width: 10%;

    cursor: pointer;
    p {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }
  .btn {
    p {
      display: flex;
      justify-content: center;
      align-items: center;

      text-align: center;
    }
  }
  .btn:hover {
    background-color: #cbafaf;
    transition: 350ms;
  }
`;
