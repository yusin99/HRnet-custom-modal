// import React, { ReactNode, CSSProperties } from 'react';
// import './Modal.css';

// interface ModalProps {
//   onClose: () => void;
//   title: string;
//   children: ReactNode;
//   isClosable?: boolean;
//   modalStyles?: CSSProperties;
//   contentStyles?: CSSProperties;
// }

// export const Modal: React.FC<ModalProps>  = ({
//   onClose,
//   title,
//   children,
//   isClosable = true,
//   modalStyles = {},
//   contentStyles = {},
// }) => {
//   return (
//     <div className="modal" style={modalStyles}>
//       <div className="modal-content" style={contentStyles}>
//         {isClosable && (
//           <button className="close-button" onClick={onClose}>
//             &times;
//           </button>
//         )}
//         <h2>{title}</h2>
//         {children}
//       </div>
//     </div>
//   );
// };




import React, { CSSProperties, ReactNode, useEffect, useRef } from 'react';
import './modal.css';


interface ModalProps {
  onClose: () => void;
  title: string;
  children: ReactNode;
  isClosable?: boolean;
  modalStyles?: CSSProperties;
  contentStyles?: CSSProperties;
  textStyles?: CSSProperties
}

export const Modal: React.FC<ModalProps> = ({
  onClose,
  title,
  children,
  isClosable = true,
  modalStyles = {},
  contentStyles = {},
  textStyles = {},
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal on outside click
  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (!isClosable) return;

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isClosable]);

  return (
    <div className="modal" style={modalStyles}>
      <div className="modal-content" style={contentStyles} ref={modalRef}>
        {isClosable && (
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        )}
        <h2>{title}</h2>
        <div style={textStyles}>{children}</div>  {/* Applied custom text styles */}
      </div>
    </div>
  );
};

