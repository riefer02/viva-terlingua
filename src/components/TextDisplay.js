import React from "react";

export default function TextDisplay() {
  return (
    <div className="text-display__container">
      <div className="text-display__content">
        <div className="text-display__content-wrapper">
          <div className="text-display__author">Patrick Ryan</div>
          <div className="text-display__date">May 8th, 2021</div>
          <ul className="text-display__tags">
            <li className="text-display__tag">
              <div className="text-display__tag-text">Link 1</div>
            </li>
            <li className="text-display__tag">
              <div className="text-display__tag-text">Link 1</div>
            </li>{" "}
            <li className="text-display__tag">
              <div className="text-display__tag-text">Link 1</div>
            </li>{" "}
            <li className="text-display__tag">
              <div className="text-display__tag-text">Link 1</div>
            </li>
          </ul>
          <p className="text-display__text-area">
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat."
          </p>
          <div className="text-display__actions">
            <button className="text-display__action-btn">
              <div className="text-display__action-text">Action Link</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
