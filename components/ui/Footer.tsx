import { HeartIcon } from '@phosphor-icons/react/dist/ssr';

const Footer = () => {
  return (
    <footer>
      <hr className="text-gray-300" />
      <div className="text-md flex items-center pt-10 px-4 pb-40 gap-1">
        <span className="font-medium text-gray-500">
          {new Date().getFullYear()} Made with
        </span>{' '}
        <HeartIcon weight="fill" size={18} className="text-red-400" />
        <span className="font-medium text-gray-500">by Omar Fandiño</span>{' '}
      </div>
    </footer>
  );
};

export default Footer;
