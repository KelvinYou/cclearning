import dayjs from 'dayjs';
import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-tertiary">

    <div className="w-full p-4 text-center ">
      © {dayjs().format('YYYY')} Copyright: {" "}
      <a className="" href="">
        Clever Clogs Learning
      </a>
    </div>
  </footer>
);

export default Footer;
