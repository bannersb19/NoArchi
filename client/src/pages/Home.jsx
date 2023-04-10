import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';

import { headContentAnimation, headContainerAnimation, headTextAnimation, slideAnimation } from '../config/motion';
import { CustomButton } from '../components';

const Home = () => {
	const snap = useSnapshot(state);
	return (
		<AnimatePresence>
			<p className="max-w-xs font-normal text-right fixed right-24 text-white top-24 hindingMobile">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Numquam, eius.
			</p>
			{snap.intro && (
				<motion.div className="home" {...slideAnimation('left')}>
					<motion.header {...slideAnimation('down')}>
						
					</motion.header>

					<motion.div className="home-content " {...headContainerAnimation}>
						<motion.div {...headTextAnimation}>
							<h1 className="head-text text-white">
								NO <br className="xl:block hidden" /> ARCHI
							</h1>
						</motion.div>

						<motion.div {...headContentAnimation} className="flex flex-col gap-5">
							<p className="max-w-sm font-normal text-white">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								<strong>
									obcaecati, nobis quia impedit. Voluptatum quisquam recusandae similique.
								</strong>
							</p>

							<CustomButton
								type="filled"
								title="CHANGE LOOKS"
								handleClick={() => (state.intro = false)}
								customStyles="w-fit px-4 py-2.5 font-bold text-sm"
							/>
						</motion.div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Home;
