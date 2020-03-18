import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../redux/action';
import { Link } from 'react-router-dom';

class PostList extends Component {
  //fetch posts and render them out.
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    const posts = this.props.posts;
    return posts.map(post => {
      return (
        <div className="ui segment">
          <div className="ui header">{post.title}</div>
          <div className="ui meta">{post.body}</div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <Link to={'/post/add'}>
          <button>Add Post</button>
        </Link>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
