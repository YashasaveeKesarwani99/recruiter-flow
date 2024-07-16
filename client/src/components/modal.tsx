import Modal from 'react-modal';

export interface ModalProps {
  open: boolean;
  title: string;
  children?: React.ReactNode;
  onSubmit?: () => void;
}

const MyModal = ({ open, title, children, onSubmit }: ModalProps) => {

  return (
    <Modal
      className={`h-auto max-h-[600px] w-[800px] rounded-3xl bg-primary-background flex flex-col px-12 py-8 outline-none gap-4 ${open ? 'block' : 'hidden'}`}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
      isOpen={open}
      >
      <h2 className='text-lg pb-10 bold text-primary-yellow'>{title}</h2>
      {children}
    </Modal>
  );
};

export default MyModal;
