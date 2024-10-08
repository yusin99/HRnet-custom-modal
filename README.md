# oc-custom-modal-react

A simple and customizable React component library for creating modals.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Styling](#styling)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the package, run the following command:

```bash
npm install oc-custom-modal-react
```

or if you're using yarn:

```bash
yarn add oc-custom-modal-react
```

## Usage

First, import the Modal component in your React application:

```jsx
import { Modal } from 'oc-custom-modal-react';
```

Then, you can use the Modal component in your React components:

```jsx
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <Modal onClose={closeModal} title="Example Modal">
          <p>This is the content of the modal.</p>
        </Modal>
      )}
    </div>
  );
}
```

## API

The Modal component accepts the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onClose` | `() => void` | Required | Function to call when the modal should be closed |
| `title` | `string` | Required | The title of the modal |
| `children` | `ReactNode` | Required | The content of the modal |
| `isClosable` | `boolean` | `true` | Whether the modal can be closed by clicking outside or on a close button |
| `modalStyles` | `CSSProperties` | `{}` | Custom styles for the modal container |
| `contentStyles` | `CSSProperties` | `{}` | Custom styles for the modal content container |
| `textStyles` | `CSSProperties` | `{}` | Custom styles for the text content inside the modal |

## Styling

The Modal component comes with basic styling defined in `Modal.css`. You can customize the appearance of the modal by overriding these styles or by passing custom styles through the `modalStyles`, `contentStyles`, and `textStyles` props.

## Examples

### Basic usage

```jsx
<Modal onClose={handleClose} title="Welcome">
  <p>Welcome to our application!</p>
</Modal>
```

### Custom styling

```jsx
<Modal
  onClose={handleClose}
  title="Custom Styled Modal"
  modalStyles={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
  contentStyles={{ borderRadius: '10px', padding: '20px' }}
  textStyles={{ color: 'blue', fontSize: '18px' }}
>
  <p>This modal has custom styles.</p>
</Modal>
```

### Non-closable modal

```jsx
<Modal
  onClose={handleClose}
  title="Important Message"
  isClosable={false}
>
  <p>This modal can only be closed programmatically.</p>
  <button onClick={handleClose}>Acknowledge and Close</button>
</Modal>
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

