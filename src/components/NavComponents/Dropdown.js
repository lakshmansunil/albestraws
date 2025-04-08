import { Link } from 'react-router-dom';
import { Menu , MenuButton} from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function DropDown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 block py-2 lg:py-0 px-4 hover:text-sky-600 rounded">
          Services
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-900" />
        </MenuButton>
      </div>

      <Menu.Items
        className="absolute -right-full lg:right-0 mt-2 w-56 origin-top-right rounded-md bg-white border-zinc-500 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none z-50"
      >
        <div className="py-1">
          <Menu.Item>
            {({ active }) => (
              <Link
                to="services/iot-and-robotics"
                className={`block px-4 py-2 m-1 rounded text-lg text-gray-700 ${active ? 'bg-blue-400 text-gray-900' : ''}`}
              >
                Developent
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link
                to="services/data-science"
                className={`block px-4 py-2 m-1 rounded text-lg text-gray-700 ${active ? 'bg-blue-400 text-gray-900' : ''}`}
              >
                Support
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link
                to="services/machine-learning"
                className={`block px-4 py-2 m-1 rounded text-lg text-gray-700 ${active ? 'bg-blue-400 text-gray-900' : ''}`}
              >
                Contract
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link
                to="services/artificial-intelligence"
                className={`block px-4 py-2 m-1 rounded text-lg text-gray-700 ${active ? 'bg-blue-400 text-gray-900' : ''}`}
              >
                Pay roll
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link
                to="services/artificial-intelligence"
                className={`block px-4 py-2 m-1 rounded text-lg text-gray-700 ${active ? 'bg-blue-400 text-gray-900' : ''}`}
              >
                Freelancing Development & Support
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link
                to="services/artificial-intelligence"
                className={`block px-4 py-2 m-1 rounded text-lg text-gray-700 ${active ? 'bg-blue-400 text-gray-900' : ''}`}
              >
                Hardware Supply to all IT and Non-IT companies
              </Link>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  );
}
