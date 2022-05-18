import './directory.styles.scss';
import CategoryItem from '../category-item/category-item.component';

const Directory = ({ categories }) => {
  return (
    <ul className="directory-container">
      {categories.map(({ id, ...rest }) => (
        <li key={id} className="category-container">
          <CategoryItem category={rest} />
        </li>
      ))}
    </ul>
  );
};

export default Directory;
