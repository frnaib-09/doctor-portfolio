import React from 'react'
import Home from '../pages/Home'

const NavMiddle = () => {
    const navItems = [
        {title: "Home",
            url: "#"
        },
        {title: "About",
            url: "#"
        },
        {title: "Skills",
            url: "#"
        },
        {title: "Testimonial",
            url: "#"
        },
        {title: "Contact",
            url: "#"
        },
    ]
  return (
    <div>
      <ul className="lg:flex gap-10 hidden">
        {navItems.map((item, index) => (
          <li key={index}>
            <a
              className="relative font-primary font-medium text-base text-primary hover:font-semibold after:absolute after:content-[''] after:h-0.75 after:w-0 hover:after:w-full after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:bg-primary duration-150 after:duration-150 ease-in-out"
              href="{item.url}"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavMiddle