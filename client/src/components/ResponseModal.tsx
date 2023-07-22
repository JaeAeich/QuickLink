import {
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    IconButton,
    useClipboard,
    Tooltip,
  } from '@chakra-ui/react';
  import { AiOutlineCopy } from 'react-icons/ai';
  import { ApiResponse } from '../App';
  
  function ResponseModal({
    url,
    short,
    expiry,
    rate_limit,
    rate_limit_reset,
  }: ApiResponse) {
    const { hasCopied, onCopy } = useClipboard(short);
  
    return (
      <>
        <ModalOverlay />
        <ModalContent bg="white" borderRadius="md" boxShadow="lg" maxW="400px">
          <ModalHeader fontSize="2xl" fontWeight="bold" pb={0}>
            Shortened URL Details
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>
              <strong>Original URL:</strong>
              <br />
              {url}
            </p>
            <p>
              <strong>Short URL:</strong>
              <br />
              {short}
              <Tooltip
                label={hasCopied ? 'Copied!' : 'Copy Short URL'}
                placement="right"
              >
                <IconButton
                  icon={<AiOutlineCopy />}
                  aria-label="Copy Short URL"
                  size="sm"
                  ml={2}
                  onClick={onCopy}
                />
              </Tooltip>
            </p>
            <p>
              <strong>Expiry:</strong>
              <br />
              {expiry}
            </p>
            <p>
              <strong>Rate Limit Remaining:</strong>
              <br />
              {rate_limit}
            </p>
            <p>
              <strong>Rate Limit Reset Time:</strong>
              <br />
              {rate_limit_reset}
            </p>
          </ModalBody>
  
          <ModalFooter>
            <Button
              colorScheme="teal"
              onClick={() => window.open(url, '_blank')}
              mr={3}
            >
              Visit URL
            </Button>
            <Button variant="ghost" onClick={() => onCopy(url)}>
              Copy Original URL
            </Button>
          </ModalFooter>
        </ModalContent>
      </>
    );
  }
  
  export default ResponseModal;
  