import { socialImgs } from "../../constants";

const Footer = () => {
return (
    <footer className="footer">
    <div className="footer-container">
        {/* Left Side: Blog Link */}
        <div className="flex flex-col justify-center">
        <a href="/" className="hover:text-white transition-colors">
            Visit My Blog
        </a>
        </div>

        {/* Center: Social Icons */}
        <div className="socials flex gap-4">
        {socialImgs.map((social, index) => (
            <a 
            key={index} 
              href={social.url} // Fixed: Changed 'social.link' to 'social.url'
            target="_blank" 
            rel="noreferrer" 
            className="icon cursor-pointer transition-transform hover:scale-110 flex items-center justify-center"
            >
            <img 
                src={social.imgPath} 
                alt={social.name} 
                className="w-6 h-6 object-contain" 
            />
            </a>
        ))}
        </div>

        {/* Right Side: Copyright */}
        <div className="flex flex-col justify-center">
        <p className="text-center md:text-end">
            © {new Date().getFullYear()} Ashwin. All rights reserved.
        </p>
        </div>
    </div>
    </footer>
);
};

export default Footer;