import React from "react";
import SessionItem from "./SessionItem";

const Sessions = ({ agendas }) => {
  const agendasItems = agendas.map(agenda => <SessionItem agenda={agenda} />);
  return (
    <div class="shortcode-html">
      <div class="row">{agendasItems}</div>
    </div>
  );
};

export default Sessions;
