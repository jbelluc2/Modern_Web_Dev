import React from "react";

export default function Child({ data, onChildClick }) {
  return (
    <div class="child">
      <a href="index.html" class="button" onClick={onChildClick}>{data}</a>
    </div>
  );
}

