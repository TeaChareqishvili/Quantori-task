interface ModalProps {
  isOpen: boolean;

  children: React.ReactNode;
}

const LogInModal: React.FC<ModalProps> = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};

export default LogInModal;
