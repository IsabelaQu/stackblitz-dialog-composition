import { FC } from 'react';
import { Dialog } from './components/Dialog';
import { 
  InformationCircleIcon,
  ExclamationTriangleIcon,
  ChevronDoubleDownIcon,
} from '@heroicons/react/24/outline';

interface AppProps {
  name: string;
}

const App: FC<AppProps> = ({ name }) => {
  const description: string =
    'This component can be rendered in various ways,\n making it possible to customize it, for example:' +
    '\n- Title, icon, description, and button' +
    '\n- Title, description, and button' +
    '\n- Description and button' +
    '\n- Title, description' +
    '\n- Title, button';
  const title: string = 'Dialog Component';

  return (
    <div className="container">
      <div className="content">
      <h1>React TSX Starter</h1>
      <div>A basic Functional Components App and composition components focused on research, featuring React and Twitter Bootstrap.</div>
      </div>

      <div className="row">
        <Dialog.Root>
          <Dialog.Title title={title}>
            <Dialog.Icon icon={InformationCircleIcon} />
          </Dialog.Title>
          <Dialog.Description text={description} />
          <Dialog.Button
            name="OK"
            className="btn btn-primary"
            onAction={null}
          />
        </Dialog.Root>
      </div>
      <div className="row">
        <Dialog.Root>
          <Dialog.Title title="Drive scan oversize">
            <Dialog.Icon icon={ExclamationTriangleIcon} />
          </Dialog.Title>
          <Dialog.Description
            text="The sweep has exceeded the available space limit,
some storage blocks may be damaged."
          />
        </Dialog.Root>
      </div>
      <div className="row">
        <Dialog.Root>
          <Dialog.Title title="Final Result" />
          <Dialog.Button
            name="View Details"
            className="btn btn-outline-primary"
            onAction={null}
          >
            <Dialog.Icon icon={ChevronDoubleDownIcon} />
          </Dialog.Button>
        </Dialog.Root>
      </div>
    </div>
  );

  return <div>{name}</div>;
};

export default App;
