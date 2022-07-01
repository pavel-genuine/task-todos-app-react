import React from 'react';

const Footer = () => {
    return (
        <footer class="footer p-10 bg-[#050535] text-white">
  <div>
    <span class="footer-title">Services</span> 
    <a class="link link-hover">Branding</a> 
    <a class="link link-hover">Design</a> 
    <a class="link link-hover">Marketing</a> 
    <a class="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span class="footer-title">Company</span> 
    <a class="link link-hover">About us</a> 
    <a class="link link-hover">Contact</a> 
    <a class="link link-hover">Jobs</a> 
    <a class="link link-hover">Press kit</a>
  </div> 
  <div>
    <span class="footer-title">Legal</span> 
    <a class="link link-hover">Terms of use</a> 
    <a class="link link-hover">Privacy policy</a> 
    <a class="link link-hover">Cookie policy</a>
  </div> 
  <div>
    <span class="footer-title">Newsletter</span> 
    <div class="form-control w-80">
      <label class="label">
        <span class="">Enter your email address</span>
      </label> 
      <div class="relative">
        <input  type="text" placeholder="username@site.com" class="input w-full pr-16" /> 
        <button class="btn bg-[brown] absolute top-0 right-0 border-none rounded-l-none">Subscribe</button>
      </div>
    </div>
  </div>
</footer>
    );
};

export default Footer;