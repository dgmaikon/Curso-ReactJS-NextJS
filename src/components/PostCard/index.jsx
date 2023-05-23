import p from 'prop-types'
import "./styles.css";
export const PostCard = ({ title, body, cover, id }) => {
  return (
    <div className="post">
      <img src={cover} alt={title} />
      <div className="post-content">
        <h2>
          {title} {id}
        </h2>
        <p>{body}</p>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  title: p.string.isRequired,
  cover: p.string.isRequired,
  body: p.string.isRequired,
  id: p.number.isRequired,
}
