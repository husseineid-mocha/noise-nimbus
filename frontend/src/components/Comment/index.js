import React from "react";
import { deleteAComment } from "../../store/comment";
import { useSelector, useDispatch } from "react-redux";

export default function Comment(props) {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.session.user.id);
  console.log(props);

  const canDelete = userId === props.userId;

  return (
    <div>
      <div>{props.body}</div>
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
