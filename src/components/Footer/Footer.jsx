import React from "react";
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container mx-auto mt-5">
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
      <Link to='/'>
      <img
            className="w-32"
            src="https://i.ibb.co/DMhpSK3/toy-car-logo.png"
            alt="toy-car-logo"
            border="0"
          />
      </Link>
          <a className="btn btn-ghost normal-case text-xl"><Link to="/">Toy Sports Car</Link></a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to='/' className="link link-hover">Home</Link>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <Link to='/blog' className="link link-hover">Blogs</Link>
        </div>
        <div>
          <span className="footer-title">contact information</span>
          <a className="link link-hover">Name: Ahaduzzaman</a>
          <a href="mailto:ahaduzzaman45503@gmail.com">Email: ahaduzzaman45503@gmail.com</a>
          <a href="tel:+4733378901">Phone: 01734545503</a>
          <a className="link link-hover">Address: Habigang, Sylhet.</a>
        </div>
        <div>
          <span className="footer-title">Cocial Media</span>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.facebook.com/ahaduzzaman5503" target="-blank">
              <FaFacebookF size={30}></FaFacebookF>
            </a>
            <a href="https://github.com/ahaduzzaman5503" target="-blank">
              <FaGithub size={30}></FaGithub>
            </a>
            <a href="https://www.linkedin.com/in/ahaduzzaman-5503/" target="-blank">
              <FaLinkedin size={30}></FaLinkedin>
            </a>
            <a href="https://twitter.com/ahaduzzaman5503" target="-blank">
              <FaTwitter size={30}></FaTwitter>
            </a>
          </div>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © 2023 - All right reserved by Toy Sports Car</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
