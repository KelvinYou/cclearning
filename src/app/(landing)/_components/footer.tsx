import dayjs from 'dayjs';
import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-tertiary border-t-[1px]">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14">
      
    </div>

    <div className="w-full p-4 text-center">
      © {dayjs().format('YYYY')} Copyright: {" "}
      <a className="" href="">
        Clever Clogs Learning
      </a>
    </div>
  </footer>
);

export default Footer;
