import { Button, Link } from '@chakra-ui/react';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LogoVariation } from '../../global/types';

const SvgDownloadButton = (variation: LogoVariation) => {
  return (
    <Button
      download
      key={variation.id}
      href={variation.imgSrcName}
      as={Link}
      variant='outline'
      rightIcon={<FontAwesomeIcon icon={faDownload} />}
    >
      .SVG
    </Button>
  );
};

export default SvgDownloadButton;
