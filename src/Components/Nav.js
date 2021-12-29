import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Nav.scss'
export default function Nav() {
  const [open, setOpen] = useState(false);
  const [navmenu, setNavmenu] = useState(false);

  const openmenu = () => {
    setOpen(!open);
    setNavmenu(!navmenu);
  };

  return (
    <div className="Nav">
      <div onClick={openmenu} id={open === false ? 'navicon' : 'naviconopen'}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, transformOrigin: 'right', scaleX: 1 }}
              exit={{ opacity: 0, scaleX: 0 }}
              transition={{ type: 'tween', stiffness: 150, duration: 0.4 }}
              className={
                navmenu === false ? 'NavMenuContainer' : 'NavMenuContainerOpen'
              }>
              <motion.ul className="NavMenu">
                <motion.li
                  whileHover={{
                    backgroundColor: 'rgb(0, 81, 255)',
                    scaleX: 1.1
                  }}
                  transition={{ duration: 0.3 }}>
                  Item 1
                </motion.li>
                <motion.li
                  whileHover={{
                    backgroundColor: 'rgb(0, 81, 255)',
                    scaleX: 1.1
                  }}
                  transition={{ duration: 0.3 }}>
                  Item 2
                </motion.li>
                <motion.li
                  whileHover={{
                    backgroundColor: 'rgb(0, 81, 255)',
                    scaleX: 1.1
                  }}
                  transition={{ duration: 0.3 }}>
                  Item 3
                </motion.li>
              </motion.ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
