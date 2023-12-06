import '../../src/sidebar.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function SideBar({ onCategorySelect }) { //This name (onCategorySelect) is given as an argument to the SideBar so that you can call a function inside the SideBar.
    const categories = ['All', 'flower', 'kerzen', 'bilder', 'vasen'];

  const handleCategoryClick = (event, category) => {
    event.preventDefault();
    onCategorySelect(category);
  };

  return (
    <>
      <div>
        <Card style={{ width: '20rem' }}>
          <ListGroup variant="flush" className='category'>
            {categories.map((category, index) => (
              <ListGroup.Item key={index}>
                <a href="/" onClick={(e) => handleCategoryClick(e, category)}>
                  {category}
                </a>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      </div>
    </>
  );
}

export default SideBar;
