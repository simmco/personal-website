import LinkedIn from './icons/LinkedIn';
import Github from './icons/Github';

const Footer = () => {
  return (
    <footer className="text-gray-700 flex justify-between pt-8">
      <div>© 2020 Michael Simmelbauer. All rights reserved.</div>
      <div className="flex">
        <div className="pr-4">
          <a href="https://github.com/simmco" target="_blank">
            <Github />
          </a>
        </div>
        <a href="https://linkedin.com/in/michael-simmelbauer-10324111b" target="_blank">
          <LinkedIn />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
