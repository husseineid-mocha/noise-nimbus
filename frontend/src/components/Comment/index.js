import React from "react";
import { deleteAComment } from "../../store/comment";
import { useSelector, useDispatch } from "react-redux";
import "./comment.css";

export default function Comment(props) {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.session.user.id);
  const userName = useSelector((state) => state.session.user.username);

  const canDelete = userId === props.userId;

  return (
    <div className="comment-item-body">
      <div className="comment-nameAndBody">
        <div className="comment-userName">{props.User?.username}</div>
        <div className="comment-item-content">{props.body}</div>
      </div>
      {canDelete && (
        <div
          className="delete-button"
          onClick={() => dispatch(deleteAComment(props.id))}
        >
          <i className="fas fa-trash-alt fa-lg"></i>
        </div>
      )}
    </div>
    // )
  );
}
