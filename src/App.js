import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Posts from "./components/Posts.js";
import Card from "./components/Card";
import styled from "styled-components";

function App({ loading }) {
  if (loading) {
    console.log(loading);
    return (
      <center>
        <h1>Loading...</h1>
      </center>
    );
  }
  return (
    <Provider store={store}>
      <Wrapper>
        <div className="content">
          <Card />
          <Posts />
        </div>
      </Wrapper>
    </Provider>
  );
}
const mapStateToProps = (state) => ({
  posts: state.posts.loading,
});
const Wrapper = styled.div`
  .content {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #f7cedd;
    justify-content: space-between;
    padding: 0rem 2rem;
  }
`;

export default App;
