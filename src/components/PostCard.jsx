import React from 'react';
import PropTypes from 'prop-types';

export default function PostCard({ post }) {
  return (
    <article className="flex bg-white shadow-lg rounded-lg mx-4 px-12 my-2">
      <div className="flex items-start px-4 py-6">
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900 -mt-1">
              {post.user.firstName}
              {' '}
              {post.user.lastName}
            </h2>
            <small className="text-sm text-gray-700">22h ago</small>
          </div>
          <h4 className="text-gray-700">{post.title}</h4>
          <p className="mt-3 text-gray-700 text-sm">
            {post.content}
          </p>
        </div>
      </div>
    </article>
  );
}

PostCard.propTypes = {
  post: PropTypes.shape({
    user: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};
