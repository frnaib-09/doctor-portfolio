import React from 'react'
import { NavLink } from 'react-router-dom'

const NavMiddle = ({className}) => {
  const navItems = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Skills", url: "/skills" },
    { title: "Testimonials", url: "/testimonials" },
    { title: "Contact", url: "/contact" },
  ]

  return (
    <div className={`${className ?? ''}`}>
      <ul className="flex flex-col lg:flex-row gap-6 xl:gap-8">
        {navItems.map((item, index) => (
          <li key={index} className="shrink-0">
            <NavLink
              to={item.url}
              className={({ isActive }) =>
                `relative block whitespace-nowrap font-primary font-medium text-base text-primary
                after:absolute after:content-[''] after:h-0.75
                after:-bottom-2 after:left-1/2 after:-translate-x-1/2
                after:bg-primary duration-150 after:duration-150 ease-in-out
                ${
                  isActive
                    ? "font-semibold after:w-full"
                    : "after:w-0 hover:font-semibold hover:after:w-full"
                }`
              }
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavMiddle