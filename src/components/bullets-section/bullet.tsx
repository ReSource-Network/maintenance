import { List, ListItem } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Bullet } from '../../global/types';

const BulletSectionList = (bullets: Bullet[]) => {
  return (
    <List spacing={1} mt={4} mb={8} zIndex='text'>
      {bullets.map((bullet) => (
        <ListItem key={bullet.title} textStyle='body'>
          <FontAwesomeIcon
            icon={bullet.icon}
            size='xs'
            style={{ marginRight: 12 }}
          />
          {bullet.title}
        </ListItem>
      ))}
    </List>
  );
};

export default BulletSectionList;
