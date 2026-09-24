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
        <ul className='flex gap-8'>
            {navItems.map((item, index) => (
            <li key={index}><a href="{item.url}">{item.title}</a></li>
            ))}
        </ul>
    </div>
  )
}

export default NavMiddle