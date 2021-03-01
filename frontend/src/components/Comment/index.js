import React from "react";
import { deleteAComment } from "../../store/comment";
import { useSelector, useDispatch } from "react-redux";
import "./comment.css";

export default function Comment(props) {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.session.user.id);
  console.log(props);

  const canDelete = userId === props.userId;

  return (
    <div className="comment-item-body">
      <div className="comment-item-content">{props.body}</div>
      {canDelete && (
        <button
          className="delete-button"
          onClick={() => dispatch(deleteAComment(props.id))}
        >
          X
        </button>
      )}
    </div>
  );
}
