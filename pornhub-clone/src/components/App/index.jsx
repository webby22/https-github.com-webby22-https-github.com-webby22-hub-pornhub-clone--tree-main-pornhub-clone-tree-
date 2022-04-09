import React from 'react';

// react router dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// componenets
import Header from '../Header';
import Footer from '../Footer';

// pages
import Home from '../../pages/Home';
import Pornstar from '../../pages/Pornstar';
import NotFound from '../../pages/NotFound';
import Categories from '../../pages/Categories';
import Videos from '../../pages/Videos';
import Watch from '../../pages/Watch';

// framer motion
import { AnimatePresence, motion } from 'framer-motion';

// variants
const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
};

const App = () => {
    return (
        <Router>
            <Header />
            <motion.main
                variants={variants}
                initial="hidden"
                animate="enter"
                exit="exit"
                transition={{ type: 'linear' }}
            >
                <AnimatePresence
                    exitBeforeEnter
                    initial={false}
                    onExitComplete={() => window.scrollTo(0, 0)}
                >
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/category/:query" element={<Videos />} />
                        <Route exact path="/videos/:query" element={<Videos />} />
                        {/* <Route exact path="/videos/" element={<Videos />} /> */}
                        <Route exact path="/search/:query" element={<Videos />} />
                        <Route exact path="/watch/:id" element={<Watch />} />
                        <Route exact path="/category" element={<Categories />} />
                        <Route exact path="/pornstars" element={<Pornstar />} />
                        <Route exact path="*" element={<NotFound />} />
                    </Routes>
                </AnimatePresence>
            </motion.main>
            <Footer />
        </Router>
    )
}

export default App
